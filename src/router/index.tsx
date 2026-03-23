import { Route, Routes } from "react-router-dom";
import Layout from "../layouts";
import Main from "../components/main/Main";
import Exhibition from "../components/exhibition/Exhibition";
import "./assets/css/index.css";
import Program from "../components/program/Program";
import TheWorks from "../components/theWorks/TheWorks";
import Information from "../components/Information/Information";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />}></Route>
        <Route path="/exhibition" element={<Exhibition />}></Route>
        <Route path="/program" element={<Program />}></Route>
        <Route path="/theWorks" element={<TheWorks />}></Route>
        <Route path="/Information" element={<Information />}></Route>
      </Route>
    </Routes>
  );
};

export default Router;
