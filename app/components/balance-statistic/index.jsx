'use client'
import Card from "@/components/card";
import {Bar, BarChart, Line, LineChart, XAxis, YAxis} from "recharts";
import {barData, lineData} from "./data";

export default function BalanceStatistic() {
  return (
    <Card className="flex-1">
      <div className="flex">
        <div>
          <p>Balance Statistics</p>
          <p className="text-2xl font-semibold">$564</p>
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
    </Card>
  );
}
