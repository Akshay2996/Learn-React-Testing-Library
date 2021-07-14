import { render, screen } from '@testing-library/react';
import TodoFooter from './TodoFooter';

it("Todo Footer Component", () => {
    render(<TodoFooter numberOfIncompleteTasks="0" />);
})