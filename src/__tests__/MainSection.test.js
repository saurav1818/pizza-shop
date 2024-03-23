import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/store";
import MainSection from "../components/MainSection";
import AddNewPizzaOrder from "../components/AddNewPizzaOrder";

test("Should not show Main section table until there is a order placed", () => {
  render(
    <Provider store={store}>
      <MainSection />
    </Provider>
  );

  const noOrdersPlacedText = screen.getByTestId("no-orders");

  expect(noOrdersPlacedText).toBeInTheDocument();
});

test("Should show Main section when we have an order", () => {
  render(
    <Provider store={store}>
      <AddNewPizzaOrder />
      <MainSection />
    </Provider>
  );

  const orderPizzaButton = screen.getByRole("button", { name: "Order Pizza" });
  fireEvent.click(orderPizzaButton);
  const ordersSection = screen.getByTestId("orders-section");
  expect(ordersSection).toBeInTheDocument();
});
