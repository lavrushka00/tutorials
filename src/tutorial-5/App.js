import * as React from "react";
import Comments from './Comments/Comments'
import  { useEffect } from 'react';


import { Button } from "@mui/material";
import './App.css'
import TextField from '@mui/material/TextField';


function App() {
  
     const [comments, setComments] = React.useState([])

    useEffect(() => {
        setComments(JSON.parse(localStorage.getItem("comments")))
       }, []) 

    useEffect(() => {
      localStorage.setItem('comments', JSON.stringify(comments))
    }, [comments])


    const [fullName, setFullName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [text, setText] = React.useState("")

    function montoToStr(num) {
      return num > 12 || num < 1
        ? null
        : "января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря".split(
            ","
          )[num - 1];
    }

    const AddFeedBack = (e) => {
      if(fullName == "" || email == "" || text == "" )
      {
        alert("Введите корректные поля!")
      }else{
        let date = new Date()
      date = date.getDate() + ' ' + montoToStr(date.getMonth()) + " " + date.getHours() + ":" + date.getMinutes()
        setComments([...comments,
        {
            fullName: fullName,
            email: email,
            createdAt: date,
            text: text
        }])

        setFullName("")
        setEmail("")
        setText("")
      }
    }

    const deleteItem = (index) => {
      setComments(comments.filter((_, i) => i !== index)) 
    }

   

  return (
    <div>
      <div className="comments">
        <Comments comments = {comments} deleteItem = {deleteItem} />
      </div>

      <div className="feedBack">
        <TextField
          id="outlined-multiline-flexible"
          label="Имя"
          multiline
          maxRows={4}
          value={fullName}
          onChange = {(e) => setFullName(e.target.value)}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Почта"
          multiline
          maxRows={4}
          value={email}
          onChange = {(e) => setEmail(e.target.value)}
        />

        <TextField
          id="outlined-multiline-static"
          label="Текст"
          multiline
          rows={4}
          value={text}
          onChange = {(e) => setText(e.target.value)}
        />

        <Button onClick={(e) =>AddFeedBack(e)} variant="contained">Отправить</Button>

      </div>
    </div>
  );
}

export default App;
