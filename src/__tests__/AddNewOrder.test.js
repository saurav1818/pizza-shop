import AddNewPizzaOrder from "../components/AddNewPizzaOrder";
import { Provider } from "react-redux";
import store from "../store/store";
import { fireEvent, render, screen } from "@testing-library/react";
import ShowOrderPizzaStates from "../components/ShowPizzaOrderStates";
test("Should render Order Pizza Button", () => {
  render(
    <Provider store={store}>
      <AddNewPizzaOrder />
    </Provider>
  );

  const orderPizzaButton = screen.getByRole("button", { name: "Order Pizza" });

  expect(orderPizzaButton).toBeInTheDocument();
});

test("Should add a new Order", () => {
  render(
    <Provider store={store}>
      <AddNewPizzaOrder />
      <ShowOrderPizzaStates />
    </Provider>
  );
  const orderPizzaButton = screen.getByRole("button", { name: "Order Pizza" });
  fireEvent.click(orderPizzaButton);
  const orderTile = screen.getByTestId("order-tile");
  expect(orderTile).toBeInTheDocument();
});
