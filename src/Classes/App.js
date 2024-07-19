import "./App.css";
import Footer from "../footer";
import Header from "../header";

function App(props) {
  let flg = props.open;
  if (flg) {
    return (
      <div className="App">
        <Header />
        <h1>Helloo</h1>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>Go Away</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
