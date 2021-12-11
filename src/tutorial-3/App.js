
document.addEventListener("DOMContentLoaded", render);
const todos = ["сходить", "привет", "пока"];


function render() {
  const ul = document.querySelector("ul");

  while (ul.firstChild) {
    ul.removeChild(ul.lastElementChild);
  }

  todos.forEach((value, index) => {
    const li = document.createElement("li");
    li.id = `${index}`
    
    const button = document.createElement("button");

    li.innerHTML = `${value}`;
    button.innerHTML = "X";
    button.addEventListener("click", handleClickRemove, false);
    
    
    ul.appendChild(li);
    ul.children[ul.childNodes.length - 1].appendChild(button);


  });
}

    function handleClickRemove(e) {
            todos.splice(e.target.parentNode.id, 1)
            console.log(todos)
            render();
    }
  
    const handleClickAdd = () => {
        if(document.querySelector("input[name='input']").value.trim().length !== 0)
        {
            todos.push(document.querySelector("input[name='input']").value);
            render();
            document.querySelector("input[name='input']").value = ''
        }

        
      };
    

function App() {
  return (
    <div>
      <ul></ul>

      <div className="todoForm">
        <input name="input" type="text" />
        <button type = "add" onClick={handleClickAdd}>Добавить задание</button>
      </div>
    </div>
  );
}

export default App;
