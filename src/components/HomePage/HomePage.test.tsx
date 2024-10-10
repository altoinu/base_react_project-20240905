import HomePage from "./HomePage";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<HomePage>", () => {
  it("should have person's name", () => {
    render(<HomePage personName="Kaoru" />);
    const heading = screen.getByRole("heading");
    expect(heading.textContent).toBe("Hello Kaoru!");
  });

  it("should have person and second person's names", () => {
    render(<HomePage personName="John" secondPersonName="Doe" />);
    const heading = screen.getByRole("heading");
    expect(heading.textContent).toBe("Hello John and Doe!");
  });

  it("should have two buttons when onButtonClick is set", () => {
    const handleButtonClick = (response: string) => console.log(response);
    render(
      <HomePage
        personName="John"
        secondPersonName="Doe"
        onButtonClick={handleButtonClick}
      />,
    );

    const button1 = screen.getByRole("button", { name: "Click Me!" });
    expect(button1).toBeInTheDocument();
    const button2 = screen.getByRole("button", { name: "Click Me Too!" });
    expect(button2).toBeInTheDocument();
  });

  it("should call onButtonClick with 'First button clicked' when first button is clicked", async () => {
    const user = userEvent.setup();

    const handleButtonClick = jest.fn();
    render(
      <HomePage
        personName="John"
        secondPersonName="Doe"
        onButtonClick={handleButtonClick}
      />,
    );
    const button1 = screen.getByRole("button", { name: "Click Me!" });

    await user.click(button1);

    expect(handleButtonClick).toHaveBeenCalledWith("First button clicked");
  });

  it("should call onButtonClick with 'Second button clicked' when first button is clicked", async () => {
    const user = userEvent.setup();

    const handleButtonClick = jest.fn();
    render(
      <HomePage
        personName="John"
        secondPersonName="Doe"
        onButtonClick={handleButtonClick}
      />,
    );
    const button2 = screen.getByRole("button", { name: "Click Me Too!" });

    await user.click(button2);

    expect(handleButtonClick).toHaveBeenCalledWith("Second button clicked");
  });
});
