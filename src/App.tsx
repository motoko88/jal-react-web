/// <reference types="react-scripts" />
// https://stackoverflow.com/questions/44717164/unable-to-import-svg-files-in-typescript
import React from "react";
import { Header } from "./Header";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Main } from "./Main";
import { Login } from "./Login";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Header />
          <div id="headerline"></div>
        </nav>
      </div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
