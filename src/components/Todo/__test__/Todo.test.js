import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
);

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, {
      target: { value: task },
    });
    fireEvent.click(buttonElement);
  });
};

describe("ToDo Integration Test", () => {
  it("Should render same text passed in input", () => {
    render(<MockTodo />);
    addTask(["Go grocery shopping"]);
    const divElement = screen.getByText(/Go grocery shopping/i);
    expect(divElement).toBeInTheDocument();
  });

  it("Should render multiple items", () => {
    render(<MockTodo />);
    addTask(["Go grocery shopping", "Wash my hands"]);
    const divElements = screen.getAllByTestId("task-container");
    expect(divElements.length).toBe(2);
  });

  it("Class should not render initially", () => {
    render(<MockTodo />);
    addTask(["Go grocery shopping"]);
    const divElement = screen.getByText(/Go grocery shopping/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("Class should render when the item is clicked", () => {
    render(<MockTodo />);
    addTask(["Go grocery shopping"]);
    const divElement = screen.getByText(/Go grocery shopping/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
