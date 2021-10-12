import { makeObservable, observable, action, computed } from "mobx";

export default function Store() {
  return makeObservable(
    {
      count: 0,
      users: [],
      histogram: false,
      setUsers(data) {
        this.users = data;
      },
      isOpen() {
        this.histogram = true;
        this.count++
      },
    },
    {
      count: observable,
      users: observable,
      histogram: observable,
      setUsers: action.bound,
      isOpen: action.bound,
    }
  );
}