import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addToPlacedOrder } from "../store/placedOrders";

const AddNewPizzaOrder = () => {
  const [pizzaState, setPizzaState] = useState({
    id: uuidv4(),
    type: "veg",
    size: "small",
    base: "thin",
    stage: "placed",
    totalTime: 0,
  });

  const dispatch = useDispatch();

  const placedOrdersNumbers = useSelector(
    (state) => state.placedOrders.placedOrders.length
  );
  const makingOrdersNumbers = useSelector(
    (state) => state.makingOrders.makingOrders.length
  );
  const readyOrdersNumbers = useSelector(
    (state) => state.readyOrders.readyOrders.length
  );

  const handleChange = (e) => {
    setPizzaState({ ...pizzaState, [e.target.name]: e.target.value });
  };

  const handleOrderPizza = (e) => {
    e.preventDefault();
    if (placedOrdersNumbers + makingOrdersNumbers + readyOrdersNumbers === 10)
      return;
    const id = uuidv4();
    dispatch(addToPlacedOrder({ ...pizzaState, id }));
  };

  return (
    <div className=" w-6/12 mx-auto my-6">
      <h1 className="text-center text-xl font-bold">Pizza Shop</h1>
      <form className="flex justify-around items-center">
        <label htmlFor="type" className="font-semibold ">
          Type:
        </label>
        <select
          name="type"
          className="m-4 p-2 border border-black rounded-md"
          onChange={handleChange}
        >
          <option value="veg">Veg</option>
          <option value="non-veg">Non-veg</option>
        </select>
        <label htmlFor="size" className="font-semibold ">
          Size:
        </label>
        <select
          name="size"
          className="m-4 p-2 border border-black rounded-md"
          onChange={handleChange}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <label htmlFor="base" className="font-semibold ">
          Base:
        </label>
        <select
          name="base"
          className="m-4 p-2 border border-black rounded-md"
          onChange={handleChange}
        >
          <option value="thin">Thin</option>
          <option value="thick">Thick</option>
        </select>
        <button
          type="submit"
          disabled={
            placedOrdersNumbers + makingOrdersNumbers + readyOrdersNumbers ===
            10
          }
          className=" m-4 p-2 rounded-md bg-red-500 text-white"
          onClick={handleOrderPizza}
        >
          Order Pizza
        </button>
      </form>
      {placedOrdersNumbers + makingOrdersNumbers + readyOrdersNumbers ===
        10 && (
        <p className="font-bold text-red-600">
          *Please wait maximum order capacity reached!
        </p>
      )}
    </div>
  );
};

export default AddNewPizzaOrder;
