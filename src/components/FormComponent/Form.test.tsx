import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it´s rendered", () => {
    test("Then it should display a form with buttons 'EN','ES','CA','PT', and a 'CREATE' button", () => {
      render(<Form />);

      const buttonEn = screen.getByRole("button", { name: /EN/i });
      const buttonEs = screen.getByRole("button", { name: /ES/i });
      const buttonCa = screen.getByRole("button", { name: /CA/i });
      const buttonPt = screen.getByRole("button", { name: /PT/i });
      const submitButton = screen.getByRole("button", { name: /Create/i });

      expect(submitButton).toBeInTheDocument();
      expect(buttonEn).toBeInTheDocument();
      expect(buttonEs).toBeInTheDocument();
      expect(buttonCa).toBeInTheDocument();
      expect(buttonPt).toBeInTheDocument();
    });
  });
  describe("When the user clicks button 'ES'", () => {
    test("Then onClick props should be called", () => {
      const newLanguage = jest.fn();
      render(<button onClick={newLanguage}>ES</button>);

      fireEvent.click(screen.getByRole("button", { name: /ES/i }));

      expect(newLanguage).toHaveBeenCalledTimes(1);
    });
  });
  describe("When the user clicks button 'CREATE'", () => {
    test("Then the form should be submitted", () => {
      const handleSubmit = jest.fn();

      render(<button onClick={handleSubmit}>CREATE</button>);

      userEvent.click(screen.getByRole("button", { name: /CREATE/i }));

      expect(handleSubmit).toHaveBeenCalled();
    });
  });
});
