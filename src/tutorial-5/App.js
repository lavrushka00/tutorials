import * as React from "react";
import Comments from "./Comments/Comments";
import { useEffect } from "react";

import { Button } from "@mui/material";
import "./App.css";
import TextField from "@mui/material/TextField";

function App() {
  const [comments, setComments] = React.useState([]);
  const [fields, setFields] = React.useState({
    fullName: " ",
    email: " ",
    text: " ",
  });

  useEffect(() => {
    setComments(JSON.parse(localStorage.getItem("comments")));
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  function montoToStr(num) {
    return num > 12 || num < 1
      ? null
      : "января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря".split(
          ","
        )[num - 1];
  }

  const AddFeedBack = () => {
    if (fields.email === " " || fields.text === " " || fields.fullName === " ") {
      alert("Введите корректные поля!");
    } else {
      let date = new Date();
      date =
        date.getDate() +
        " " +
        montoToStr(date.getMonth()) +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes();
      setComments([
        ...comments,
        {
          fullName: fields.fullName,
          email: fields.email,
          createdAt: date,
          text: fields.text,
        },
      ]);

      setFields({
        fullName: "",
        email: "",
        text: "",
      });
    }
  };

  const deleteItem = (index) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="comments">
        <Comments comments={comments} deleteItem={deleteItem} />
      </div>

      <div className="feedBack">
        <TextField
          id="outlined-multiline-flexible"
          label="Имя"
          multiline
          maxRows={4}
          value={fields.fullName}
          onChange={(e) => setFields({ ...fields, fullName: e.target.value })}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Почта"
          multiline
          maxRows={4}
          value={fields.email}
          onChange={(e) => setFields({ ...fields, email: e.target.value })}
        />

        <TextField
          id="outlined-multiline-static"
          label="Текст"
          multiline
          rows={4}
          value={fields.text}
          onChange={(e) => setFields({ ...fields, text: e.target.value })}
        />

        <Button onClick={AddFeedBack} variant="contained">
          Отправить
        </Button>
      </div>
    </div>
  );
}

export default App;
