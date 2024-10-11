import { useState } from "react";

type HomePageProps = {
  personName: string;
  secondPersonName?: string;
  /**
   * Callback fired when the button is clicked.
   *
   * @param {Number} buttonNum Button number clicked.
   */
  onButtonClick?: (buttonNum: number) => void;
};

const HomePage = ({ personName, onButtonClick, ...props }: HomePageProps) => {
  const [clickedButtonResponse, setClickedButtonResponse] = useState<string>();

  const handleButtonClick = (buttonNum: number) => {
    const response =
      buttonNum === 1
        ? "First button clicked"
        : buttonNum === 2
          ? "Second button clicked"
          : "something else clicked";

    setClickedButtonResponse(response);

    onButtonClick?.(buttonNum);
  };

  return (
    <>
      <h1>
        Hello {personName}
        {props.secondPersonName ? ` and ${props.secondPersonName}` : ""}!
      </h1>
      <div>
        {onButtonClick ? (
          <>
            <button type="button" onClick={() => handleButtonClick(1)}>
              Click Me!
            </button>
            <button type="button" onClick={() => handleButtonClick(2)}>
              Click Me Too!
            </button>
          </>
        ) : (
          ""
        )}
      </div>
      {clickedButtonResponse ? (
        <p>clicked button response: {clickedButtonResponse}</p>
      ) : (
        ""
      )}
    </>
  );
};

export default HomePage;
