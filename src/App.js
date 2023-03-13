import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LearnHOC from "./pages/LearnHOC";
import Testing from "./pages/Testing";

function App() {
  const Button = (props) => <button style={props.style}>Click me</button>;
  const Text = (props) => <p style={props.style}>Testing</p>;

  const StyleButton = LearnHOC(Button);
  const StyleText = LearnHOC(Text);

  return (
    <div className="App">
      <StyleButton />
      <Button />
      <StyleText />
      <Routes>
        <Route path="/" element={<LearnHOC />} />
        <Route path="/home" element={<Home />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </div>
  );
}

export default App;
