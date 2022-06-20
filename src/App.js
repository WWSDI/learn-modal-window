import logo from "./logo.svg";
import "./App.css";
import Modal from "./Modal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>This app creates two modal windows:</h2>
        <p>1. login window (when clicking Learn React button)</p>
        <p>2. tooltip window (when hovering over Learn React button)</p>
        <a
          onClick={(e) => {
            e.preventDefault();
            toggleModal();
          }}
          className="App-link"
          style={{ borderRadius: "1rem", background: "plum", padding: "2rem" }}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          👉 Learn React
        </a>
      </header>
      {showModal ? (
        <Modal>
          <div style={{ textAlign: "center" }}>
            <h2>
              Do you want to sign in to your account before continue to Learn
              React Course?
            </h2>
            <div>
              <a className="button" href="https://www.apple.com">
                Sign in
              </a>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  toggleModal();
                }}
                className="button"
                href="https://www.google.com"
              >
                I'm new, I want to Sign Up
              </a>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}

export default App;
