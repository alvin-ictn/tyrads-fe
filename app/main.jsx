import Image from "next/image";
import "remixicon/fonts/remixicon.css";

import BalanceStatistic from "./components/balance-statistic";
import Card from "@/components/card";
import visa from "@/public/assets/images/visa.jpg";
import Transaction from "./components/transaction";
import Analytic from "./components/analytic";
import Info from "./components/info";

export default function Home() {
  return (
    <section className="flex">
      <section className="flex flex-col gap-10 flex-1 bg-[#fedfc0] p-10">
        <div>
          <p className="text-4xl font-semibold">Hello, Jhon .D</p>
        </div>
        <div className="flex gap-10">
          <BalanceStatistic />
          <Card>
            <Image src={visa} alt="visa" height={200} />
          </Card>
        </div>
        <div styles={{ height: "100%" }}>
          <Card>
            <div className="dummy"></div>
          </Card>
        </div>
        <div className="flex gap-10">
          <Card className="transaction-card flex-1">
            <div className="flex justify-between pb-7 border-b border-[#ebebeb]">
              <p>Last transactions</p>
              <div className="flex gap-7">
                <div>
                  <span>Newest</span>
                </div>
                <div>
                  <span>Oldest</span>
                </div>
              </div>
            </div>
            <Transaction />
          </Card>
          <Card style={{ position: "relative" }}>
            <header>
              <p className="card-title">Analytics</p>
            </header>
            <Analytic />
          </Card>
        </div>
      </section>
      <Info />
    </section>
  );
}
