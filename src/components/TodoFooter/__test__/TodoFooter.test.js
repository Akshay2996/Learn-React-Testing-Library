import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockToDoFooter = ({ numberOfIncompleteTasks }) => (
  <BrowserRouter>
    <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
  </BrowserRouter>
);

describe("ToDoFooter Component", () => {
  it("should render correct amount of incomplete task", () => {
    render(<MockToDoFooter numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it("should render task when no. is 1", () => {
    render(<MockToDoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  it("should render task when no. is 1 by testID", () => {
    render(<MockToDoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByTestId("para");
    expect(paragraphElement).toHaveTextContent(/^1 task left$/i);
  });

  it("should render task testID with attributes", () => {
    render(<MockToDoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByTestId("para");
    expect(paragraphElement.textContent).toBe("1 task left");
  });
});
