import { useState } from "react";
import { observer } from "mobx-react";
import useHttp from "./../hooks/hooks";

const AddUserForm = observer(() => {
  const { loading, request } = useHttp();
  const [form, setForm] = useState({
    registration: "",
    lastActivity: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const addNewUser = async () => {
    try {
      const data = await request("/api/register", "POST", { ...form });
    } catch (e) {}
  };

  const deleteUsers = async () => {
    try {
      const data = await request("/api/delete", "POST", null);
    } catch (e) {}
  };

  const date = new Date().toLocaleDateString();
  const dateFormat = date.split(".").reverse().join("-");

  return (
    <div className="newUser">
      <input
        type="date"
        id="registration"
        name="registration"
        max={dateFormat}
        onChange={changeHandler}
      />
      <input
        type="date"
        id="lastActivity"
        name="lastActivity"
        max={dateFormat}
        onChange={changeHandler}
      />
      <button onClick={addNewUser} disabled={loading}>
        Save
      </button>
      <button onClick={deleteUsers}>Delete All</button>
    </div>
  );
});

export default AddUserForm;
