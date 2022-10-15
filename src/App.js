import { useState } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen(!open)} className="container">
      <div className={`btn-container ${open ? "btn-open" : "btn-close"}`}>
        <button className="btn"> Search</button>
      </div>
    </div>
  );
}

export default App;
