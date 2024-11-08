import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Main = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
