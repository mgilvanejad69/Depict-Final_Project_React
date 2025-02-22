import { useContext, useEffect, useRef, useState } from "react";
import { AddToCardContext } from "../../Context/AddToCardContext";
import LogoPic from "./Logo";

const SignIn = () => {
  const [userList, setUserList] = useState([]);
  const [signUp, setSignUp] = useState(false);

  const {
    SignInRef,
    setUserProfileInfo,
    setIsLoggedIn,
    usernameRef,
    passwordRef,
    signInisOpen,
    setSignInisOpen,
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
  const handleLogin = () => {
    let usernameValue = usernameRef.current.value;
    let passwordValue = passwordRef.current.value;

    let userData = userList.filter((elem) => elem.username === usernameValue);
    if (userData.length === 0) {
      alert("User Not Found");
    }
    if (usernameValue.trim() === "") {
      alert("Please Fill Username and Password");
    }
    if (userData[0].password === passwordValue) {
      setIsLoggedIn(true);
      setUserProfileInfo(userData);
      handleCloseLoginPage();
    } else {
      alert("Username Or Password is Incorrect!");
    }
  };

  const handleSubmit = () => {
    console.log("you Submit");
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
      <div className="w-[90%] lg:w-[400px] flex flex-col justify-start items-center !p-6 bg-[#FFFFFF] rounded-[8px] shadow-2xl">
        <div className="!p-1 flex flex-col justify-center items-center">
          <LogoPic />
          <h2 className="text-[#181818] text-[24px] !my-6">Welcome</h2>
          {!signUp && (
            <>
              <p className="text-[#181818] text-[14px]">Login to continue</p>
            </>
          )}
        </div>

        <form
          onClick={(e) => e.preventDefault()}
          className="flex flex-col items-center gap-6 w-full relative"
        >
          <input
            type="text"
            name=""
            id=""
            className="w-full !pl-3 h-[48px] rounded-[4px] outline-0 border border-[#a1a1a1] text-[#181818] focus:border-blue-700 focus:border-[2px]"
            placeholder={signUp ? "First Name*" : "Username*"}
            ref={usernameRef}
          />
        </form>

        <form
          onClick={(e) => e.preventDefault()}
          className="flex flex-col items-center gap-6 w-full !mt-4 relative"
        >
          <input
            type="text"
            name=""
            id=""
            className="w-full !pl-3 h-[48px] rounded-[4px] outline-0 border border-[#a1a1a1] text-[#181818] focus:border-blue-700 focus:border-[2px]"
            placeholder={signUp ? "Last Name*" : "Password*"}
            ref={passwordRef}
          />
        </form>
        {signUp ? (
          <>
            <form
              onClick={(e) => e.preventDefault()}
              className="flex flex-col items-center gap-6 w-full !mt-4 relative"
            >
              <input
                type="text"
                name=""
                id=""
                className="w-full !pl-3 h-[48px] rounded-[4px] outline-0 border border-[#a1a1a1] text-[#181818] focus:border-blue-700 focus:border-[2px]"
                placeholder="Select Username*"
                ref={passwordRef}
              />
            </form>

            <form
              onClick={(e) => e.preventDefault()}
              className="flex flex-col items-center gap-6 w-full !mt-4 relative"
            >
              <input
                type="text"
                name=""
                id=""
                className="w-full !pl-3 h-[48px] rounded-[4px] outline-0 border border-[#a1a1a1] text-[#181818] focus:border-blue-700 focus:border-[2px]"
                placeholder="Select Password*"
                ref={passwordRef}
              />
            </form>

            <form
              onClick={(e) => e.preventDefault()}
              className="flex flex-col items-center gap-6 w-full !mt-4 relative !mb-[32px]"
            >
              <input
                type="text"
                name=""
                id=""
                className="w-full !pl-3 h-[48px] rounded-[4px] outline-0 border border-[#a1a1a1] text-[#181818] focus:border-blue-700 focus:border-[2px]"
                placeholder="Email*"
                ref={passwordRef}
              />
            </form>
          </>
        ) : (
          ""
        )}

        {signUp ? (
          ""
        ) : (
          <button
            className="w-full h-[48px] bg-[#212121] text-[#FFFFFF] !mt-[48px] cursor-pointer"
            onClick={handleLogin}
          >
            Continue
          </button>
        )}
        <button
          className="w-full h-[48px] bg-[#212121] text-[#FFFFFF] !mt-[8px] cursor-pointer"
          onClick={signUp ? handleSubmit : handleSignUp}
        >
          {signUp ? "Submit" : "SIgn up"}
        </button>
        <button
          className="w-full h-[48px] bg-[#212121] text-[#FFFFFF] !mt-[8px] cursor-pointer"
          onClick={signUp ? handleBackBtn : handleCloseLoginPage}
        >
          {signUp ? "Login" : "Close"}
        </button>
      </div>
    </div>
  );
};

export default SignIn;
