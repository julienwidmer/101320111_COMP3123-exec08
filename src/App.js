import logo from './logo.svg';
import './App.css';
import EntryForm from "./EntryForm";

function App() {
  return (
    <div className="App">
        <div className="container">
            <h1 className="p-2 pt-4">Data Entry Form</h1>
            <EntryForm/>
        </div>
    </div>
  );
}

export default App;
