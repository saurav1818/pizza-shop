import { useDispatch } from "react-redux";
import { removedFromPlacedOrder } from "../store/placedOrders";
import {
  addToMakingOrder,
  removedFromMakingOrder,
} from "../store/makingOrders";
import { addToReadyOrder, removedFromReadyOrder } from "../store/readyOrders";
import { addToPickedOrder } from "../store/pickedOrders";
import { useEffect, useState } from "react";
import { convertSecondsToMinutes, orderMakingTime } from "../utils/utils";

const OrderTile = ({ order }) => {
  const dispatch = useDispatch();
  const [timeTakenByOrder, setTimeTakenByOrder] = useState(0);
  useEffect(() => {
    const timerFunction = () => {
      return setInterval(() => {
        setTimeTakenByOrder((prevTime) => prevTime + 1);
      }, 1000);
    };
    let timer;
    if (order.stage !== "picked") timer = timerFunction();

    return () => {
      clearInterval(timer);
    };
  }, [order.stage]);

  const timeTakenByOrderInMaking = orderMakingTime(order);

  const handleChangeStatus = () => {
    if (order.stage === "placed") {
      dispatch(
        addToMakingOrder({
          ...order,
          stage: "making",
          totalTime: order.totalTime + timeTakenByOrder,
        })
      );
      dispatch(removedFromPlacedOrder(order));
    } else if (order.stage === "making") {
      dispatch(
        addToReadyOrder({
          ...order,
          stage: "ready",
          totalTime: order.totalTime + timeTakenByOrder,
        })
      );
      dispatch(removedFromMakingOrder(order));
    } else if (order.stage === "ready") {
      dispatch(
        addToPickedOrder({
          ...order,
          stage: "picked",
          totalTime: order.totalTime + timeTakenByOrder,
        })
      );
      dispatch(removedFromReadyOrder(order));
    }
  };

  return (
    <div
      data-testid="order-tile"
      className={`rounded-md text-white rounded=md w-3/4 mx-auto flex flex-col justify-center items-center my-4 
        ${
          timeTakenByOrder > timeTakenByOrderInMaking
            ? "bg-red-900"
            : "bg-slate-700"
        }`}
    >
      <h1 className="my-2 text-xs">OrderId: {order.id.substring(0, 5)}</h1>
      {order.stage === "picked" ? (
        <p className="mb-2">picked</p>
      ) : (
        <>
          <p className="my-2">
            Time: {convertSecondsToMinutes(timeTakenByOrder)}
          </p>
          <button
            data-testid="next-button"
            className="my-2 bg-green-500 p-2 rounded-md"
            onClick={handleChangeStatus}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default OrderTile;
