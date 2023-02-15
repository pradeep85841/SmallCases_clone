import { render, fireEvent, getByText } from "@testing-library/react";
import LandingPage from "./index.js";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

test("landing page", () => {
  const navigate = jest.fn();
  useNavigate.mockReturnValue(navigate);

  const { getByText } = render(<LandingPage />);

  const submitButton = getByText("Discover Stockfolio");

  fireEvent.click(submitButton);

  expect(navigate).toHaveBeenCalledWith("/discover");
});
