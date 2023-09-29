import { Button, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Alert from "@mui/material/Alert";
const Add = () => {
  const [message, setMessage] = useState("");
  // Since we want to read the parameters so we use a Hook called useParams();
  const params = useParams();
  // pick html input element
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  const takeInput = () => {
    const noteObject = {
      title: titleRef.current.value,
      descriptionRef: descriptionRef.current.value,
      date: dateRef.current.value,
    };
    console.log(noteObject);
    setMessage("Note has been added");
  };
  // console.log(params);
  // This will return a object with a object name.
  return (
    <div>
      <h1>{params.operationName} Your Note</h1>
      <TextField
        inputRef={titleRef}
        id="outline-basic"
        label="Title"
        variant="outlined"
      />
      <br />
      <br />
      <br />
      <TextField
        inputRef={descriptionRef}
        id="outlined-multiline-static"
        label="Your Note"
        multiline
        rows={6}
        fullWidth
      />
      <br />
      <br />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker inputRef={dateRef} label="Note Date" />
      </LocalizationProvider>

      <br />
      <br />
      <Button onClick={takeInput} variant="contained" color="success">
        {params.operationName} a Note
      </Button>
      <br />
      <br />
      {message ? <Alert severity="success">{message}</Alert> : <p></p>}
    </div>
  );
};

export default Add;
