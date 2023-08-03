import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className="l-main">
      <Outlet />
    </main>
  );
};

export default Main;
