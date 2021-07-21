import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => (
  <BrowserRouter>
    <FollowersList />
  </BrowserRouter>
);

describe("FollowersList", () => {
  beforeEach(() => {
    console.log("Running Before every tests");
  });

  beforeAll(() => {
    console.log("Running only once Before all the Tests");
  });

  afterEach(() => {
    console.log("Running After every tests");
  });
  afterAll(() => {
    console.log("Running only once After all the Tests");
  });

  it("Should render follower item", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  //   it("Should render multiple follower items", async () => {
  //     render(<MockFollowersList />);
  //     const followerDivElements = await screen.findAllByTestId(/follower-item/i);
  //     expect(followerDivElements.length).toBe(5);
  //   });
});
