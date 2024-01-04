import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from "recharts";
import styles from "./balance.module.css";
export default function BalanceStatisic() {
  const barData = [
    {
      month: "Oct",
      earn: 60,
      out: 50,
    },
    {
      month: "Nov",
      earn: 30,
      out: 25,
    },
    {
      month: "Dec",
      earn: 30,
      out: 20,
    },
    {
      month: "Jan",
      earn: 25,
      out: 18,
    },
    {
      month: "Feb",
      earn: 20,
      out: 10,
    },
  ];

  const lineData = [
    {
      month: "Oct",
      balance: 10,
    },
    {
      month: "Nov",
      balance: 17,
    },
    {
      month: "Dec",
      balance: 15,
    },
    {
      month: "Jan",
      balance: 50,
    },
    {
      month: "Feb",
      balance: 10,
    },
    {
      month: "Mar",
      balance: 15,
    },
  ];

  return (
    <div className={styles["balance-statistic"]}>
      <div>
        <p>Balance Statistics</p>
        <p className={styles.balance}>$564</p>
        <p>Your total balance</p>
        <LineChart width={95} height={40} data={lineData}>
          <Line
            type="monotone"
            stroke="#636dc5"
            dataKey="balance"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
        <p>Always see your earnings udpates</p>
      </div>

      <BarChart width={300} height={200} data={barData}>
        <XAxis dataKey="month" axisLine={false} tickLine={false} />
        <YAxis
          axisLine={false}
          tickLine={false}
          ticks={[0, 20, 40, 60]}
          tickFormatter={(v) => `$${v}`}
        />
        <Bar dataKey="earn" fill="#545ee3" />
        <Bar dataKey="out" fill="#c7caff" />
      </BarChart>
    </div>
  );
}
