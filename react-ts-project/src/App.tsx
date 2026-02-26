import Button from "./component/Button";
import greet from "./utils/greet";

function App() {
  const val = greet("hello");

  const handleClick = () => {
    console.log("clicked");
  }

  return (
    <div>
      <h1>Task Manager = {val}</h1>
      <Button label={"Add Task"} onClick={handleClick} />
    </div>
  )
}

export default App