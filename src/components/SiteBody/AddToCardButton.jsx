import { useContext } from "react";
import { AddToCardContext } from "../../Context/AddToCardContext";

const AddToCardButton = ({ elem }) => {
  const { setAddToCard, cardList, setCardList, setCardIsOpen } =
    useContext(AddToCardContext);

  const handleAddToCard = (item) => {
    setAddToCard((prev) => prev + 1);
    setCardList([...cardList, item]);
    setCardIsOpen(false);
  };

  const productsQuantity = (arr, item) => {
    let newArr = arr.filter((elem) => elem.id == item.id);
    return newArr.length;
  };

  const handleRemoveFromCard = (item) => {
    let newCardList = [...cardList];
    let itemIndex = newCardList.findIndex((elem) => elem.id == item.id);
    newCardList.splice(itemIndex, 1);
    setCardList(newCardList);
    setCardIsOpen(false);
  };
  return (
    <>
      {productsQuantity(cardList, elem) > 0 ? (
        <div className="w-[112px] h-[36px] text-[#181818] text-[14px] !pb-1  absolute bottom-[104px] right-0 lg:right-[-112px] lg:opacity-80 main-color flex justify-between items-center rounded-l-[50px] cursor-pointer z-40 lg:hover:text-[#FFFFFF] lg:group-hover:right-0 transition-all lg:hover:opacity-100">
          <button
            className="text-[24px] text-white !px-5 cursor-pointer !pb-1"
            onClick={(event) => {
              event.stopPropagation();
              handleRemoveFromCard(elem);
            }}
          >
            -
          </button>
          <p className="text-white text-[16px]">
            {productsQuantity(cardList, elem)}
          </p>
          <button
            className="text-[20px] text-white !px-5 cursor-pointer"
            onClick={(event) => {
              event.stopPropagation();
              handleAddToCard(elem);
            }}
          >
            +
          </button>
        </div>
      ) : (
        <button
          className="!pl-4 w-[112px] h-[36px] text-[#181818] text-[14px] !pb-1  absolute bottom-[104px] right-0 lg:right-[-112px] lg:opacity-80 main-color flex justify-between items-center rounded-l-[50px] cursor-pointer z-40 hover:text-[#FFFFFF] lg:group-hover:right-0 transition-all lg:hover:opacity-100"
          onClick={(event) => {
            event.stopPropagation();
            handleAddToCard(elem);
          }}
        >
          Add to Card
        </button>
      )}
    </>
  );
};

export default AddToCardButton;
