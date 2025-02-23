import { useContext } from "react";
import { AddToCardContext } from "../../Context/AddToCardContext";

const AddToCardButtoninCardBox = ({ elem }) => {
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
      <div className="w-[112px] h-[36px] text-[#181818] border border-[#ff5314] !bg-white text-[14px] !pb-1  main-color flex justify-between items-center rounded-[8px] cursor-pointer z-40">
          <button
            className="text-[24px] text-[#ff5314] !px-5 cursor-pointer !pb-1"
            onClick={(event) => {
              event.stopPropagation();
              handleRemoveFromCard(elem);
            }}
          >
            -
          </button>
          <p className="text-[#ff5314] text-[16px]">
            {productsQuantity(cardList, elem)}
          </p>
          <button
            className="text-[20px] text-[#ff5314] !px-5 cursor-pointer"
            onClick={(event) => {
              event.stopPropagation();
              handleAddToCard(elem);
            }}
          >
            +
          </button>
        </div>
    </>
  );
};

export default AddToCardButtoninCardBox;
