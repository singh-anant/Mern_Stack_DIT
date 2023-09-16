import "./first.css";
export const First = () => {
  const name = "Monkey.D.Luffy";
  const flag = FontFaceSetLoadEvent;
  return (
    <>
      <h1 className="red">First JSX-{name}</h1>
      {/* Conditional rendering */}
      {flag ? <h1>Flag is True</h1> : <h1>Flag is False</h1>}
    </>
  );
};
