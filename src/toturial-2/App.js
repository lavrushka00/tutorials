import React from "react";
import "../App.css"

function App() {
    let email = ''
    let password = ''
    function handleSubmit(e){
        email = e.target[0].value.trim()
        password = e.target[1].value.trim()

       if(email === '' || password === '')
       {
           alert("Заполните поля!")
       }else
       {
           console.log({email, password})
           e.target[0].value = ''
           e.target[1].value = ''
       }
       e.preventDefault();
    }   


    return(
        <div>
            <form  className="form" onSubmit ={(e) =>handleSubmit(e)}>
                <input  type = "text" placeholder="E-Mail"/>
                <input  type = "password" placeholder="Пароль"/>
                <button type = "reset submit">Войти</button>
            </form>
        </div>
    )
}



export default App;
