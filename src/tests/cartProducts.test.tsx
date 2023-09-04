import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import CartProducts from "../components/CartProducts";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import userEvent from "@testing-library/user-event";

const mockData = [
  {
    cartId: 1693478128300,
    quantity: 4,
    productData: {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
  },
];

describe("cartProducts", () => {
  test("render products in the cart", () => {
    render(
      <Provider store={store}>
        <CartProducts cartData={[...mockData]} />
      </Provider>
    );
    const textElement = screen.getByText(`${mockData[0].productData.title}`);
    expect(textElement).toBeInTheDocument();
  });

  test("quantity decrement button",async () => {
    render(
      <Provider store={store}>
        <CartProducts cartData={mockData} />
      </Provider>
    );
    const initialQtyElement = screen.getByTestId("qty")
    // console.log("initial",initialQtyElement.textContent)

    const decButton = screen.getByTestId("decBtn")
    await userEvent.click(decButton)

    const updatedQtyButton = screen.getByTestId("qty")
    // console.log("updated",updatedQtyButton.textContent)
    
    expect(Number(updatedQtyButton.textContent)).toBe(Number(initialQtyElement.textContent))

  });
});
