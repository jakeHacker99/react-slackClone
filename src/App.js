import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    // BEM naming convention

    <div className="App">
      <h1>slack clone</h1>

      <Header />

      {/* Sidebar */}
      <Sidebar />

      {/* Router -> chat Screen */}
    </div>
  );
}

export default App;
