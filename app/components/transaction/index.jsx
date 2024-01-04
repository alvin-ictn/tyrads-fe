'use client'
import { useState } from "react";
import ava1 from "@/public/assets/images/avatar_1.svg";
import ava2 from "@/public/assets/images/avatar_2.svg";
import ava3 from "@/public/assets/images/avatar_3.svg";
import ava4 from "@/public/assets/images/avatar_4.svg";
import Row from "./Row";

const initTransaction = [
  {
    id: 1,
    name: "Bessie Cooper",
    picture: ava1,
    record_date: "02 July, 2023",
    balance: "-$3,000",
  },
  {
    id: 2,
    name: "Anya Happer",
    picture: ava2,
    record_date: "04 July, 2023",
    balance: "+$1,970",
  },
  {
    id: 3,
    name: "Guy Hawskins",
    picture: ava3,
    record_date: "06 July, 2023",
    balance: "+$5,000",
  },
  {
    id: 4,
    name: "Robert Hayes",
    picture: ava4,
    record_date: "08 July, 2023",
    balance: "+$15,000",
  },
];

export default function Transaction() {
  const [transactions, setTransactions] = useState(initTransaction);

  return (
    <div className="overflow-y-scroll h-[calc(100% - 24px)]">
      {transactions.map((transaction) => (
        <Row
          key={transaction.id}
          history={transaction}
          setTransactions={setTransactions}
        />
      ))}
    </div>
  );
}
