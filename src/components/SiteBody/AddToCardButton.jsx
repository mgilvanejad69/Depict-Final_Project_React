import { useContext } from "react";
import { AddToCardContext } from "../../Context/AddToCardContext";

const AddToCardButton = ({ elem }) => {
  const { setAddToCard, cardList, setCardList } = useContext(AddToCardContext);

  const handleAddToCard = (item) => {
    setAddToCard((prev) => prev + 1);
    setCardList([...cardList, item]);
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
  };
  return (
    <>
      {productsQuantity(cardList, elem) > 0 ? (
        <div className="w-[112px] h-[36px] text-[#181818] text-[14px] !pb-1  absolute bottom-[104px] right-[-112px] opacity-80 main-color flex justify-between items-center rounded-l-[50px] cursor-pointer z-40 hover:text-[#FFFFFF] group-hover:right-0 transition-all hover:opacity-100">
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
          className="!pl-4 w-[112px] h-[36px] text-[#181818] text-[14px] !pb-1  absolute bottom-[104px] right-[-112px] opacity-80 main-color flex justify-between items-center rounded-l-[50px] cursor-pointer z-40 hover:text-[#FFFFFF] group-hover:right-0 transition-all hover:opacity-100"
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
