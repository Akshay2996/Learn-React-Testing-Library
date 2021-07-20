import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => (
  <BrowserRouter>
    <FollowersList />
  </BrowserRouter>
);

describe("FollowersList", () => {
  it("Should render follower item", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  it("Should render multiple follower items", async () => {
    render(<MockFollowersList />);
    const followerDivElements = await screen.findAllByTestId(/follower-item/i);
    expect(followerDivElements.length).toBe(5);
  });
});
