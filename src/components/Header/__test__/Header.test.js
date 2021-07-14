import { render, screen } from '@testing-library/react';
import Header from '../Header';

it("Header Component Unit Test By Text", () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
});

// // Role Query Attribute (Priority)
// it("Header Component Unit Test By Role", () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getByRole("heading", { name: /my header/i });
//     expect(headingElement).toBeInTheDocument();
// });

// // Title(Semantic) Query Attribute
// it("Header Component Unit Test By Role", () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getByTitle("header");
//     expect(headingElement).toBeInTheDocument();
// });

// // TestID Query Attribute
// it("Header Component Unit Test By Role", () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getByTestId('header-1');
//     expect(headingElement).toBeInTheDocument();
// });

// // Find By
// it("Header Component Unit Test By Role", async () => {
//     render(<Header title="My Header" />);
//     const headingElement = await screen.findByRole('heading', { name: /my header/i });
//     expect(headingElement).toBeInTheDocument();
// });

// // Query By
// it("Header Component Unit Test By Role", () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.queryByRole('heading', { name: /cats/i });
//     expect(headingElement).not.toBeInTheDocument();
// });