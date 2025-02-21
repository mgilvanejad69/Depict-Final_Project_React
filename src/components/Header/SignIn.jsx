import { useContext, useEffect, useRef, useState } from "react";
import { AddToCardContext } from "../../Context/AddToCardContext";
import gsap from "gsap";
import LogoPic from "./Logo";

const SignIn = () => {
  const [userList, setUserList] = useState([]);

  const {
    SignInRef,
    setUserProfileInfo,
    setIsLoggedIn,
    usernameRef,
    passwordRef,
  } = useContext(AddToCardContext);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUserList(data.users))
      .catch((error) => console.log(error));
  }, []);

  const handleCloseLoginPage = () => {
    gsap.to(SignInRef.current, {
      top: "-100vh",
      ease: "power2.out",
      duration: 0.5,
    });
  };
  const handleSubmit = () => {
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
  return (
    <div
      className="w-screen max-h-[100vh] h-full bg-[#181818] opacity-[95%] flex justify-center items-center fixed left-0 top-[-100vh] z-50"
      ref={SignInRef}
    >
      <div className="w-[400px] h-[600px] flex flex-col justify-start items-center !p-6 bg-[#FFFFFF] rounded-[8px] shadow-2xl">
        <div className="!p-4 flex flex-col justify-center items-center">
          <LogoPic />
          <h2 className="text-[#181818] text-[24px] !my-6">Welcome</h2>
          <p className="text-[#181818] text-[14px]">Login to continue</p>
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
            placeholder="Username*"
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
            placeholder="Password*"
            ref={passwordRef}
          />
        </form>
        <button
          className="w-full h-[48px] bg-[#212121] text-[#FFFFFF] !mt-[48px] cursor-pointer"
          onClick={handleSubmit}
        >
          Continue
        </button>
        <button className="w-full h-[48px] bg-[#212121] text-[#FFFFFF] !mt-[8px] cursor-pointer">
          SIgn up
        </button>
        <button
          className="w-full h-[48px] bg-[#212121] text-[#FFFFFF] !mt-[8px] cursor-pointer"
          onClick={handleCloseLoginPage}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SignIn;
