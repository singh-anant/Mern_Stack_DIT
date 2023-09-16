const Message = ({ msg, alert }) => {
  const bootstrapClass = `alert alert-${alert} text-center fw-bold fs-4`;
  return <div className={bootstrapClass}>{msg}</div>;
};

export default Message;
