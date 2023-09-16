import { useState } from "react";
import Buttons from "../components/Buttons";
import Input from "../components/Input";
import Message from "../components/Message";

const Greet = () => {
  /*   const names = {};//on rerendering it becomes empty */
  const [names, setNames] = useState({});
  const [message, setMessage] = useState("Welcome");
  const capital = (str) =>
    str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
  const receiveDataFromChild = (data, key) => {
    // names[key] = data;
    const temp = {};
    temp[key] = data;
    setNames({ ...names, ...temp });
  };

  const showFullName = () => {
    setMessage(
      "Welcome " + capital(names["first"]) + " " + capital(names["last"])
    );
  };
  const clear = () => {
    console.log("clear");
    const temp = {};
    temp["first"] = "";
    temp["last"] = "";
    setMessage("Welcome");
    setNames(temp);
  };
  return (
    <div>
      <Message msg="Greet App" alert="primary" />
      <Input
        func={receiveDataFromChild}
        inputKey="first"
        inputLabel="First Name"
        placeholder="Enter First Name"
        val={names["first"]}
      />
      <Input
        func={receiveDataFromChild}
        inputKey="last"
        inputLabel="Last Name"
        placeholder="Enter Last Name"
        val={names["last"]}
      />
      <Buttons func={showFullName} buttonName="Greet" alert="success" />
      <Buttons func={clear} buttonName="Clear" alert="danger" />
      {/* {message && <Message msg="Welcome" nameOfClass="success" />} */}
      <Message msg={message} alert="success" />
    </div>
  );
};

export default Greet;
