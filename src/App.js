import "./App.css";
import Table from "./components/table";
import AddUserForm from "./components/addUserForm";
import { Histogram } from "./components/histogram";

export const App = () => {
  return (
    <div className="App">
      <div className="content">
        <AddUserForm />
        <Table />
      </div>
    </div>
  );
};

export default App;
