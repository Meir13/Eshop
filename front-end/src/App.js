import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
