export const Second = () => {
  const pirates = [
    { id: 1, name: "Straw Hats", captain: "Monkey D.Luffy" },
    { id: 2, name: "Hearts Pirate", captain: "Trafalgar D.Law" },
    { id: 3, name: "Kidd Pirates", captain: "Eustass Kidd" },
  ];
  const captains = ["Monkey D.Luffy", "Red Hair Shanks", "Marshall D. Teach"];
  return (
    <>
      {captains.map((captain) => {
        return <p>{captain}</p>;
      })}
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Captain</td>
          </tr>
        </thead>
        <tbody>
          <>
            {pirates.map((pirate, index) => (
              <tr key={index}>
                <td>{pirate.id}</td>
                <td>{pirate.name}</td>
                <td>{pirate.captain}</td>
              </tr>
            ))}
          </>
        </tbody>
      </table>
    </>
  );
};
