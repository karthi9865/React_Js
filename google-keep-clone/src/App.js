import "./App.css";
import Header from "./components/Header/Header.js";
import CreateNote from "./components/CreateNote/CreateNote";
import Note from "./components/Note/Note";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <CreateNote />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
