import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { convertSecondsToMinutes } from "../utils/utils";

const TableRow = ({ order, dispatchAction }) => {
  const dispatch = useDispatch();
  const [timer1, setTimer1] = useState(0);
  useEffect(() => {
    const timerFunction = () => {
      return setInterval(() => {
        setTimer1((prevTime) => prevTime + 1);
      }, 1000);
    };
    let timer;
    if (order.stage !== "picked") timer = timerFunction();

    return () => {
      clearInterval(timer);
    };
  }, [order.stage]);

  return (
    <tr key={order.id}>
      <td className="bg-slate-200 border text-left p-4">
        Order Id: {order.id.substring(0, 5)}
      </td>
      <td className="bg-slate-200 border text-left p-4">
        Order Stage:{" "}
        {order.stage.charAt(0).toUpperCase() + order.stage.substring(1)}
      </td>
      <td className="bg-slate-200 border text-left p-4">
        Time: {convertSecondsToMinutes(order.totalTime + timer1)}
      </td>
      <td
        className="bg-slate-200 border text-left p-4 cursor-pointer"
        onClick={() => dispatchAction && dispatch(dispatchAction(order))}
      >
        {dispatchAction && "Cancel"}
      </td>
    </tr>
  );
};

export default TableRow;
