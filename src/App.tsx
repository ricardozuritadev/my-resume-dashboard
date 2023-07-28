import Header from "layout/header";
import Main from "layout/main";
import Sidenav from "layout/sidenav";

const App = () => {
  return (
    <>
      <div className="l-app">
        <Sidenav />
        <div className="l-app__main">
          <Header />
          <Main />
        </div>
      </div>
    </>
  );
};

export default App;
