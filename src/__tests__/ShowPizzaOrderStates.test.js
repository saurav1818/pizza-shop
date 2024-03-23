import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/store";
import ShowPizzaOrderStates from "../components/ShowPizzaOrderStates";
import AddNewPizzaOrder from "../components/AddNewPizzaOrder";

test("Should show Pizza order states section", () => {
  render(
    <Provider store={store}>
      <ShowPizzaOrderStates />
    </Provider>
  );
  const placedOrdersStateSection = screen.getByTestId("placed-orders");
  const makingOrdersStateSection = screen.getByTestId("making-orders");
  const readyOrdersStateSection = screen.getByTestId("ready-orders");
  const pickedOrdersStateSection = screen.getByTestId("picked-orders");

  expect(placedOrdersStateSection).toBeInTheDocument();
  expect(makingOrdersStateSection).toBeInTheDocument();
  expect(readyOrdersStateSection).toBeInTheDocument();
  expect(pickedOrdersStateSection).toBeInTheDocument();
});

test("Should go to next pizza state when clicked on next on Order tile", () => {
  render(
    <Provider store={store}>
      <AddNewPizzaOrder />
      <ShowPizzaOrderStates />
    </Provider>
  );

  const orderPizzaButton = screen.getByRole("button", { name: "Order Pizza" });

  fireEvent.click(orderPizzaButton);

  const placedOrdersStateSection = screen.getByTestId("placed-orders");
  const orderTilePlacedOrders = placedOrdersStateSection.querySelector(
    "[data-testid='order-tile']"
  );

  const nextStateButton = orderTilePlacedOrders.querySelector(
    "[data-testid='next-button']"
  );

  fireEvent.click(nextStateButton);
  const makingOrdersStateSection = screen.getByTestId("making-orders");
  const orderTileMakingOrders = makingOrdersStateSection.querySelector(
    "[data-testid='order-tile']"
  );
  expect(orderTileMakingOrders).toBeInTheDocument();
});
