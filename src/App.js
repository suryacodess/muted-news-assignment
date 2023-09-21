import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/header/Header";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Error from "./pages/error/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<Error />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/moviesinfo/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
