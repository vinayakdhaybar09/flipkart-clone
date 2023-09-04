import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const imgLink =
  "https://storiesflistgv2.blob.core.windows.net/stories/2017/09/BBD-Storify_mainbanner-1024x600.jpg";

describe("hero", () => {
  test("render hero img", () => {
    render(
      <Provider store={store}>
        <Hero />
      </Provider>
    );
    const imgElement = screen.getByAltText("heroImg");
    expect(imgElement).toHaveAttribute("src", imgLink);
  });
});
