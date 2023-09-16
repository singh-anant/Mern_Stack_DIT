const Input = ({ inputLabel, placeholder, inputKey, func, val }) => {
  const takeInput = (event) => {
    console.log(event.target.value);
    func(event.target.value, inputKey);
  };
  return (
    <div className="form-group">
      <label>{inputLabel}</label>
      <input
        value={val}
        onChange={takeInput}
        className="form-control"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
