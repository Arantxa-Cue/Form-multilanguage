import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it´s rendered", () => {
    test("Then it should display a form with label, input and button", () => {
      render(<Form />);

      const button = screen.getByRole("button", { name: /EN/i });
      const submitButton = screen.getByRole("button", { name: /Create/i });

      expect(submitButton).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
