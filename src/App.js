import "./App.css";
import React from "react";

const FunctComponent = (props) => {
  let registredDate =
    props.registredAt.getDate() +
    " " +
    montoToStr(props.registredAt.getMonth()) +
    " " +
    props.registredAt.getFullYear();

  return (
    <div className="profile">
      <h1>
        Привет, <b>{props.name}</b>{" "}
      </h1>
      <h2>дата регистрации: {registredDate}</h2>
    </div>
  );
};

class ClassComponent extends React.Component {
  render() {
    let registredDate =
      this.props.registredAt.getDate() +
      " " +
      montoToStr(this.props.registredAt.getMonth()) +
      " " +
      this.props.registredAt.getFullYear();

    return (
      <div className="profile">
        <h1>
          Привет, <b>{this.props.name}</b>{" "}
        </h1>

        <h2>дата регистрации: {registredDate}</h2>
      </div>
    );
  }
}

function montoToStr(num) {
  return num > 12 || num < 1
    ? null
    : "января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря".split(
        ","
      )[num - 1];
}


function App() {
  return (
    <div className="body">
      <ClassComponent name="Вася" registredAt={new Date(2021, 5, 22)} />

      <FunctComponent name="Вася" registredAt={new Date(2021, 5, 22)} />
    </div>
  );
}

export default App;
