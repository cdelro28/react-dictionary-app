import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="text-center mt-5">
          <h1>dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center m-5">
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/christinedelrosario/"
            target="_blank"
            rel="noreferrer"
          >
            Christine Del Rosario
          </a>
          , is open-sourced on{" "}
          <a
            href="https://github.com/cdelro28/react-dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://cd-react-dictionary-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>{" "}
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
