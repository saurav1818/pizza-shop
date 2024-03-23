import { useSelector } from "react-redux";
import { removedFromPlacedOrder } from "../store/placedOrders";
import { removedFromMakingOrder } from "../store/makingOrders";
import TableRow from "./TableRow";
const MainSection = () => {
  const placedOrders = useSelector((state) => state.placedOrders.placedOrders);
  const makingOrders = useSelector((state) => state.makingOrders.makingOrders);
  const readyOrders = useSelector((state) => state.readyOrders.readyOrders);
  const pickedOrders = useSelector((state) => state.pickedOrders.pickedOrders);

  return placedOrders.length ||
    makingOrders.length ||
    readyOrders.length ||
    pickedOrders.length ? (
    <div className="mx-auto w-6/12 my-10" data-testid="orders-section">
      <h1>Main Section</h1>
      <table className="border-separate w-full">
        <thead>
          <tr>
            <th className="bg-slate-700 border text-white text-left p-4">
              Order Id
            </th>
            <th className="bg-slate-700 text-white border text-left p-4">
              Order Stage
            </th>
            <th className="bg-slate-700 text-white border text-left p-4">
              Total Time (time from order placed)
            </th>
            <th className="bg-slate-700 text-white border text-left p-4">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {placedOrders.map((placedOrder) => (
            <TableRow
              key={placedOrder.id}
              order={placedOrder}
              dispatchAction={removedFromPlacedOrder}
            />
          ))}
          {makingOrders.map((makingOrder) => (
            <TableRow
              key={makingOrder.id}
              order={makingOrder}
              dispatchAction={removedFromMakingOrder}
            />
          ))}
          {readyOrders.map((readyOrder) => (
            <TableRow key={readyOrder.id} order={readyOrder} />
          ))}
          {pickedOrders.map((pickedOrder) => (
            <TableRow key={pickedOrder.id} order={pickedOrder} />
          ))}
          <tr>
            <td className="bg-slate-200 border text-left px-8 py-4 font-bold">
              Total Orders Delivered
            </td>
            <td colSpan={3} className="bg-slate-200 border text-left px-8 py-4">
              {pickedOrders.length}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ) : (
    <div className="mx-auto w-6/12 my-10" data-testid={"no-orders"}>
      <h1 className="text-center font-bold">No Orders Placed</h1>
    </div>
  );
};

export default MainSection;
