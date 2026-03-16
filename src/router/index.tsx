import { Route, Routes } from "react-router-dom";
import Layout from "../layouts";
import Main from "../components/main/Main";
import "./assets/css/index.css";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />}></Route>
      </Route>
    </Routes>
  );
};

export default Router;
