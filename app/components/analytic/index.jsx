'use client'
import { PieChart, Pie, Cell, Legend } from "recharts";

import styles from "./analytics.module.css";

const outerData = [...Array(41).keys()].map((num) => ({
  value: 10,
  number: num * 10,
  label: num % 10 === 0 ? num * 10 : ".",
}));

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  ...rest
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 25;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  console.log(rest.label);
  return (
    <text
      x={
        [100, 200].includes(rest.label)
          ? x + 10
          : [300, 400].includes(rest.label)
          ? x - 10
          : x
      }
      y={y}
      fill="black"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {rest.label}
    </text>
  );
};

const data = [
    { name: "Uncategorize", value: 60, color: "#f1f1f1" },
    { name: "To Do", value: 80, color: "#eb6252" },
    { name: "In Progress", value: 80, color: "#ffa512" },
    { name: "Done", value: 60, color: "#535ceb" },
  ];

export default function Analytics() {
  return (
    <div>
      <PieChart width={340} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="100%"
          startAngle={0}
          endAngle={180}
          cornerRadius={40}
          innerRadius={120}
          outerRadius={140}
          fill="#8884d8"
          paddingAngle={-40}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Pie
          data={outerData}
          cx="50%"
          cy="100%"
          labelLine={false}
          label={renderCustomizedLabel}
          startAngle={180}
          endAngle={0}
          cornerRadius={0}
          innerRadius={150}
          outerRadius={150}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill="red" textRendering={"s"} />
          ))}
        </Pie>
      </PieChart>

      <div className={styles.legend}>
        <p className={styles.percentage}>90%</p>
        <p className={styles.label}>Done</p>
      </div>

      <div className={styles["progress-wrapper"]}>
        <div className={styles.indicator}>
          <div className={styles["done-indicator"]}></div>
          <label className={styles["progress-label"]}>Done</label>
        </div>
        <div className={styles.indicator}>
          <div className={styles["inprogress-indicator"]}></div>
          <label className={styles["progress-label"]}>In Progress</label>
        </div>
        <div className={styles.indicator}>
          <div className={styles["todo-indicator"]}></div>
          <label className={styles["progress-label"]}>To Do</label>
        </div>
      </div>
    </div>
  );
}
