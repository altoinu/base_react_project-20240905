type HomePageProps = {
  personName: string;
  secondPersonName?: string;
  /**
   * Callback fired when the button is clicked.
   *
   * @param {string} response response from the button click.
   */
  onButtonClick?: (response: string) => void;
};

const HomePage = ({ personName, onButtonClick, ...props }: HomePageProps) => {
  const handleButtonClick = (response: string) => {
    onButtonClick?.(response);
  };

  return (
    <>
      <h1>
        Hello {personName}
        {props.secondPersonName ? ` and ${props.secondPersonName}` : ""}!
      </h1>
      {onButtonClick ? (
        <>
          <button
            type="button"
            onClick={() => handleButtonClick("First button clicked")}
          >
            Click Me!
          </button>
          <button
            type="button"
            onClick={() => handleButtonClick("Second button clicked")}
          >
            Click Me Too!
          </button>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default HomePage;
