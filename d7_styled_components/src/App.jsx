import "./App.css";
import { Button } from "./component/Button";

function App() {
  return (
    <div className="App">
      <h3>Count : 0</h3>

      <Button
        onClick={() => {
          alert("Clicked Click Me");
        }}
      >
        Click Me
      </Button>

      <Button>Login</Button>

      <Button>Sign Out</Button>
    </div>
  );
}

export default App;
