import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import ProductInfo from "../components/ProductInfo";
import { Provider } from "react-redux";
import { store } from "../redux/store";
// import { Provider } from "react-redux";
// import { store } from "../redux/store";

const mockData = {
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
};

describe("products", () => {
  test("render products", () => {
    render(
      <Provider store={store}>
        <ProductInfo productData={mockData} />
      </Provider>
    );
    const textElement = screen.getByTestId("ptoductTitle");
    expect(textElement.textContent).toBe(`${mockData.title}`);
  });

  test("render product price", () => {
    render(
      <Provider store={store}>
        <ProductInfo productData={mockData} />
      </Provider>
    );
    const textElement = screen.getByTestId("productPrice");
    expect(textElement.textContent).toBe(`$ ${mockData.price}`);
  });
});
