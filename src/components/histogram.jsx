import { observer } from "mobx-react";
import { useState } from "react";
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const Histogram = observer((props) => {
  const [isOpen, setOpen] = useState(false);

  const arrRegistration = [];
  const arrLastActivity = [];

  const data = props.data.map((el, i) => {
    arrRegistration.push(el.registration.split("-").splice(1, 2));
    arrLastActivity.push(el.lastActivity);

    const obj = {
      name: `${el.lastActivity}`,
    };
    return obj;
  });

  const result = arrLastActivity.reduce((el, i) => {
    el[i] = (el[i] || 0) + 1;
    return el;
  }, {});

  console.log('arrLastActivity', arrLastActivity);
  console.log('result', result);

  const countLastActivity = [];

  Object.keys(result).forEach((el) => {
    countLastActivity.push(Date.parse(el));
  });

  const u = countLastActivity.sort(function (a, b) {
    return (+a - +b);
  });

  console.log("countLastActivity", u);

  // const data = [
  //   {
  //     name: "Jan 2019",
  //     "Product A": 3432,
  //     "Procuct B": 2342,
  //   },
  //   {
  //     name: "Feb 2019",
  //     "Product A": 2342,
  //     "Procuct B": 3246,
  //   },
  //   {
  //     name: "Mar 2019",
  //     "Product A": 4565,
  //     "Procuct B": 4556,
  //   },
  //   {
  //     name: "Apr 2019",
  //     "Product A": 6654,
  //     "Procuct B": 4465,
  //   },
  //   {
  //     name: "May 2019",
  //     "Product A": 8765,
  //     "Procuct B": 4553,
  //   },
  //   {
  //     name: "Jan 2019",
  //     "Product A": 3432,
  //     "Procuct B": 2342,
  //   },
  //   {
  //     name: "Feb 2019",
  //     "Product A": 2342,
  //     "Procuct B": 3246,
  //   },
  //   {
  //     name: "Mar 2019",
  //     "Product A": 4565,
  //     "Procuct B": 4556,
  //   },
  //   {
  //     name: "Apr 2019",
  //     "Product A": 6654,
  //     "Procuct B": 4465,
  //   },
  //   {
  //     name: "May 2019",
  //     "Product A": 8765,
  //     "Procuct B": 4553,
  //   },
  // ];

  const toggle = () => {
    setOpen(true);
  };

  let content = isOpen ? (
    <LineChart
      width={1000}
      height={550}
      data={data}
      margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="Product A" stroke="#0095FF" />
    </LineChart>
  ) : (
    <button onClick={toggle}>Calculate</button>
  );

  return <>{content}</>;
});
