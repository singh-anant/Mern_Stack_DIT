const Buttons = ({ buttonName, alert, func }) => {
  const bootstrapClass = `btn btn-outline-${alert}`;
  const buttonClicked = () => {
    func();
  };
  return (
    <div>
      <button onClick={buttonClicked} className={bootstrapClass}>
        {buttonName}
      </button>
    </div>
  );
};

export default Buttons;
