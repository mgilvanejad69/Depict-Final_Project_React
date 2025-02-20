import { useContext, useEffect, useRef, useState } from "react";
import { AddToCardContext } from "../../Context/AddToCardContext";

const SearchSvg = () => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const { setCategoryProducts } = useContext(AddToCardContext);
  const inputRef = useRef();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 1000);

    return () => clearTimeout(handler);
  }, [inputValue]);

  useEffect(() => {
    if (debouncedValue.trim() === "") {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((newData) => setCategoryProducts(newData.products))
        .catch((error) => console.log(error));
    } else {
      fetch(`https://dummyjson.com/products/search?q=${debouncedValue}`)
        .then((res) => res.json())
        .then((data) => setCategoryProducts(data.products))
        .catch((error) => console.log(error));
    }
  }, [debouncedValue]);

  const handleClearInput = () => {
    setInputValue("");
    setDebouncedValue("");
    inputRef.current.value = "";
  };

  return (
    <div>
      <div className="flex items-center justify-center cursor-pointer">
        {inputValue.length > 0 ? (
          <button
            className="absolute top-0 right-0 z-20 w-[56px] h-[48px] opacity-70 flex items-center justify-center !pb-1 cursor-pointer"
            onClick={handleClearInput}
          >
            x
          </button>
        ) : (
          <button className="absolute top-0 right-0 z-20 w-[56px] h-[48px] opacity-70 flex items-center justify-center !pb-1 cursor-pointer">
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="gray"
              className="opacity-50 group-hover:opacity-100"
            >
              <defs>
                <symbol
                  id="searchSearch"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 18a7.5 7.5 0 115.973-2.963l4.369 4.246-1.394 1.434-4.387-4.263A7.467 7.467 0 0110.5 18zm5.5-7.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
                    clipRule="evenodd"
                  ></path>
                </symbol>
              </defs>
              <g>
                <path
                  fillRule="evenodd"
                  d="M10.5 18a7.5 7.5 0 115.973-2.963l4.369 4.246-1.394 1.434-4.387-4.263A7.467 7.467 0 0110.5 18zm5.5-7.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
                  clipRule="evenodd"
                ></path>
              </g>
            </svg>
          </button>
        )}
        <form className="absolute top-0 right-0 z-10">
          <input
            type="text"
            name=""
            id=""
            className={`${
              inputValue.length > 0 ? "w-[450px] !pl-3" : "w-0"
            } h-[48px] text-[#181818]  border-[#ff5314] outline-0 rounded-[8px] !pr-[56px] transition-all duration-500 ease-out group-focus-within:w-[450px] placeholder:opacity-0 group-focus-within:border group-focus-within:placeholder:opacity-100 group-focus-within:!pl-3`}
            placeholder="Search"
            onChange={(e) => setInputValue(e.target.value)}
            ref={inputRef}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchSvg;
