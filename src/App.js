import Header from "./components/header/header";
import Info from "./components/info/Info";
import Main from "./components/main/Main";
import Topbar from "./components/topbar/topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Header />
      <Info />
      <Main />
    </div>
  );
}

export default App;


