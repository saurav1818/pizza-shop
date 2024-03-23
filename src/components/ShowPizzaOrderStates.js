import OrderTile from "./OrderTile";
import { useSelector } from "react-redux";

const ShowOrderPizzaStates = () => {
  const placedOrders = useSelector((state) => state.placedOrders.placedOrders);
  const makingOrders = useSelector((state) => state.makingOrders.makingOrders);
  const readyOrders = useSelector((state) => state.readyOrders.readyOrders);
  const pickedOrders = useSelector((state) => state.pickedOrders.pickedOrders);

  return (
    <div
      className="w-full flex justify-around mt-10"
      data-testid="orders-states-section"
    >
      <div
        className="w-2/12 h-96 overflow-y-scroll bg-slate-200"
        data-testid="placed-orders"
      >
        <h1 className="sticky top-0 bg-slate-700 p-4 text-white">
          Order Placed
        </h1>
        {placedOrders.map((order) => (
          <OrderTile key={order.id} order={order} />
        ))}
      </div>
      <div
        className="w-2/12 h-96 overflow-y-scroll bg-slate-200"
        data-testid="making-orders"
      >
        <h1 className="sticky top-0 bg-slate-700 p-4 text-white">
          Order in Making
        </h1>
        {makingOrders.map((order) => (
          <OrderTile key={order.id} order={order} />
        ))}
      </div>
      <div
        className="w-2/12 h-96 overflow-y-scroll bg-slate-200"
        data-testid="ready-orders"
      >
        <h1 className="sticky top-0 bg-slate-700 p-4 text-white">
          Order Ready
        </h1>
        {readyOrders.map((order) => (
          <OrderTile key={order.id} order={order} />
        ))}
      </div>
      <div
        className="w-2/12 h-96 overflow-y-scroll bg-slate-200"
        data-testid="picked-orders"
      >
        <h1 className="sticky top-0 bg-slate-700 p-4 text-white">
          Order Picked
        </h1>
        {pickedOrders.map((order) => (
          <OrderTile key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default ShowOrderPizzaStates;
