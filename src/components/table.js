import { useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";
import useHttp from "./../hooks/hooks";
import { Histogram } from "./histogram";

const Table = observer(() => {
  const [users, setUsers] = useState([]);
  const { request } = useHttp();

  const getData = useCallback(async () => {
    try {
      const fetched = await request("/api", "GET", null);
      setUsers(fetched);
    } catch (error) {}
  });

  let table = users.map((user, i) => (
    <div key={user.id} className="stroke">
      <div>{i + 1}</div>
      <div>{user.registration}</div>
      <div>{user.lastActivity}</div>
    </div>
  ));

  console.log(users);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="table">
      <div className="stroke">
        <strong>UserID</strong>
        <strong>Date Registration</strong>
        <strong>Date Last Activity</strong>
      </div>
      {table}
      <Histogram data={users} />
    </div>
  );
});

export default Table;
