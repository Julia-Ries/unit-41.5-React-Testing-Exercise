import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";


//smoke test
it("renders without crashing", () => {
    render(<Card />);
  });


//snapshot test
it("matches snapshot", () => {
    const {asFragment} = render (<Card />);
    expect(asFragment()).toMatchSnapshot();
});