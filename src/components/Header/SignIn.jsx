import { useContext, useEffect, useState } from "react";
import { AddToCardContext } from "../../Context/AddToCardContext";
import LogoPic from "./Logo";

const SignIn = () => {
  const [userList, setUserList] = useState([]);
  const [signUp, setSignUp] = useState(false);

  const {
    SignInRef,
    setUserProfileInfo,
    setIsLoggedIn,
    signInisOpen,
    setSignInisOpen,
    register,
    handleSubmit,
    reset,
  } = useContext(AddToCardContext);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUserList(data.users))
      .catch((error) => console.log(error));
  }, []);

  const handleCloseLoginPage = () => {
    setSignInisOpen(false);
  };
  const handleLogin = (data) => {
    const { username, password } = data;
    let userData = userList.filter((elem) => elem.username === username);
    if (userData.length === 0 && username.trim() !== "") {
      alert("User Not Found");
    }
    if (userData.length !== 0 && userData[0].password === password) {
      setIsLoggedIn(true);
      setUserProfileInfo(userData);
      handleCloseLoginPage();
      reset();
    } else {
      alert("password is Incorrect!");
    }
  };

  const handleSiteSubmit = (data) => {
    const { username, email } = data;
    let duplicateUsername = userList.find((elem) => elem.username === username);
    let duplicateEmail = userList.find((elem) => elem.email === email);
    if (duplicateUsername) {
      alert("The username entered is duplicate!");
    } else if (duplicateEmail) {
      alert("The username entered is duplicate!");
    } else {
      setUserList([...userList, data]);
    }
    reset();
    setSignUp(false);
  };

  const handleSignUp = () => {
    setSignUp(true);
  };

  const handleBackBtn = () => {
    setSignUp(false);
  };


  return (
    <div
      className={`w-screen max-h-[100vh] h-full bg-[#181818] opacity-[95%] flex justify-center items-center fixed left-0 ${
        signInisOpen ? "top-0" : "top-[-100vh]"
      }  z-50 transition-all duration-500 ease-out`}
      ref={SignInRef}
    >
      {signUp ? (
        <div className="w-[90%] lg:w-[900px] lg:h-[530px] flex flex-col justify-start items-center !p-6 bg-[#FFFFFF] rounded-[30px] shadow-2xl transition-all duration-500">
          <div className="!p-1 flex flex-col justify-center items-center">
            <LogoPic />
            <h2 className="text-[#181818] text-[24px] !my-6">Welcome</h2>
            <p className="text-[#181818] text-[14px]">Login to continue</p>
          </div>
          <form
            className="flex flex-col items-center gap-6 w-full relative"
            onSubmit={handleSubmit(handleSiteSubmit)}
          >
            <div className="flex flex-col lg:flex-row justify-center items-start gap-2 lg:gap-[80px] lg:!mt-9">
              <div className="flex flex-col items-start justify-start gap-2 lg:gap-4">
                <input
                  type="text"
                  className="w-full !pl-3 h-[48px] rounded-[4px] outline-0 border border-[#a1a1a1] text-[#181818] focus:border-blue-700 focus:border-[2px]"
                  placeholder="First Name*"
                  {...register("firstName", { required: true })}
                />
                <input
                  type="text"
                  className="w-full !pl-3 h-[48px] rounded-[4px] outline-0 border border-[#a1a1a1] text-[#181818] focus:border-blue-700 focus:border-[2px]"
                  placeholder="Last Name*"
                  {...register("lastName", { required: true })}
                />

                <input
                  type="text"
                  className="w-full !pl-3 h-[48px] rounded-[4px] outline-0 border border-[#a1a1a1] text-[#181818] focus:border-blue-700 focus:border-[2px]"
                  placeholder="Select Username*"
                  {...register("username", { required: true })}
                />
              </div>
              <div className="flex flex-col items-start justify-start gap-2 lg:gap-4">
                <input
                  type="text"
                  className="w-full !pl-3 h-[48px] rounded-[4px] outline-0 border border-[#a1a1a1] text-[#181818] focus:border-blue-700 focus:border-[2px]"
                  placeholder="Select Password*"
                  {...register("password", { required: true })}
                />

                <input
                  type="text"
                  className="w-full !pl-3 h-[48px] rounded-[4px] outline-0 border border-[#a1a1a1] text-[#181818] focus:border-blue-700 focus:border-[2px]"
                  placeholder="Email*"
                  {...register("email", { required: true })}
                />
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-1 lg:gap-4 lg:!mt-8">
              <input
                type="submit"
                value="Submit"
                className="w-full h-[32px] lg:h-[48px] bg-[#212121] text-[#FFFFFF] !mt-1 lg:!mt-2 cursor-pointer"
              />
              <button
                className="w-full h-[32px] lg:h-[48px] bg-[#212121] text-[#FFFFFF] !mt-[8px] cursor-pointer"
                onClick={signUp ? handleBackBtn : handleSignUp}
              >
                {signUp ? "Login" : "SIgn up"}
              </button>
              <button
                className="w-full h-[32px] lg:h-[48px] bg-[#212121] text-[#FFFFFF] !mt-[8px] cursor-pointer"
                onClick={handleCloseLoginPage}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="w-[90%] lg:w-[400px] flex flex-col justify-start items-center !p-6 bg-[#FFFFFF] rounded-[30px] shadow-2xl  transition-all duration-500">
          <div className="!p-1 flex flex-col justify-center items-center">
            <LogoPic />
            <h2 className="text-[#181818] text-[24px] !my-6">Welcome</h2>
            <p className="text-[#181818] text-[14px]">Login to continue</p>
          </div>

          <form
            className="flex flex-col items-center gap-6 w-full relative"
            onSubmit={handleSubmit(handleLogin)}
          >
            <input
              type="text"
              className="w-full !pl-3 h-[48px] rounded-[4px] outline-0 border border-[#a1a1a1] text-[#181818] focus:border-blue-700 focus:border-[2px]"
              placeholder="Username*"
              {...register("username", { required: true })}
            />
            <input
              type="text"
              className="w-full !pl-3 h-[48px] rounded-[4px] outline-0 border border-[#a1a1a1] text-[#181818] focus:border-blue-700 focus:border-[2px]"
              placeholder="Password*"
              {...register("password", { required: true })}
            />
            <input
              type="submit"
              value="Continue"
              className="w-full h-[48px] bg-[#212121] text-[#FFFFFF] !mt-[48px] cursor-pointer"
            />
          </form>
          <button
            className="w-full h-[48px] bg-[#212121] text-[#FFFFFF] !mt-[8px] cursor-pointer"
            onClick={signUp ? handleBackBtn : handleSignUp}
          >
            {signUp ? "Login" : "SIgn up"}
          </button>
          <button
            className="w-full h-[48px] bg-[#212121] text-[#FFFFFF] !mt-[8px] cursor-pointer"
            onClick={handleCloseLoginPage}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default SignIn;
