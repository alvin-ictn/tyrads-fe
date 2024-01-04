"use client";
import InfoWrapper from "./InfoWrapper";
import styles from "./css/infoSection.module.css";
import shopping from "@/public/assets/images/shopping.svg";
import hospital from "@/public/assets/images/hospital.svg";
import ticket from "@/public/assets/images/ticket.svg";
import SpendingRow from "./SpendingRow";

const expenseIncomeData = {
  expense: {
    data: 7500,
    text: "7,500",
  },
  income: {
    data: 2500,
    text: "2,500",
  },
};

const spendingData = [
  {
    id: 1,
    name: "Online store",
    picture: shopping,
    record_date: "06 July, 2023 at 10:00 pm",
  },
  {
    id: 2,
    name: "Pay the hospital",
    picture: hospital,
    record_date: "04 July, 2023 at 10:00 pm",
  },
  {
    id: 3,
    name: "Tickets",
    picture: ticket,
    record_date: "03 July, 2023 at 10:00 pm",
  },
];

export default function InfoSection({ className, children }) {
  return (
    <section className="p-10 flex flex-col gap-10 bg-white">
      <InfoWrapper>
        <header>
          <h5 className="text-xl">Expense and Income</h5>
        </header>
        <div className="flex justify-between">
          <div className="flex flex-col gap-3 items-start">
            <p>Expense</p>
            <h4 className="text-xl">
              {(expenseIncomeData.expense.data /
                (expenseIncomeData.expense.data +
                  expenseIncomeData.income.data)) *
                100}
              %
            </h4>
            <p>{expenseIncomeData.expense.text}</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <div className="border border-black h-full"></div>
            <h4 className="text-xl">vs</h4>
            <div className="border border-black h-full"></div>
          </div>
          <div className="flex flex-col gap-3 items-end">
            <p>Income</p>
            <h4 className="text-xl">
              {(expenseIncomeData.income.data /
                (expenseIncomeData.expense.data +
                  expenseIncomeData.income.data)) *
                100}
              %
            </h4>
            <p>{expenseIncomeData.income.text}</p>
          </div>
        </div>
        <div>
          <div className="flex min-w-[400px] h-8 gap-1">
            <div
              style={{
                width: `${
                  (expenseIncomeData.expense.data /
                    (expenseIncomeData.expense.data +
                      expenseIncomeData.income.data)) *
                  100
                }%`,
              }}
              className="h-full rounded-md bg-[#545de6]"
            ></div>
            <div
              style={{
                width: `${
                  (expenseIncomeData.income.data /
                    (expenseIncomeData.expense.data +
                      expenseIncomeData.income.data)) *
                  100
                }%`,
              }}
              className="h-100% rounded-md bg-[#ffa70f]"
            ></div>
          </div>
        </div>
      </InfoWrapper>
      <InfoWrapper>
        <header className="flex justify-between">
          <h5>Latest spending</h5>
          <div>
            <i class="ri-more-2-fill"></i>
          </div>
        </header>
        <div className="overflow-y-hidden h-[calc(100% - 24px)]">
          {spendingData.map((spending) => (
            <SpendingRow
              key={spending.id}
              spending={spending}
              style={{ width: "100%" }}
            />
          ))}
        </div>
        <div className="flex gap-4 text-[#6363c1] justify-center cursor-pointer w-fit self-center">
          <p className="flex gap-4 text-[#6363c1] justify-center cursor-pointer w-fit self-center">View all</p>
          <i className="ri-arrow-right-line"></i>
        </div>
      </InfoWrapper>
      <InfoWrapper>
        <header>
          <h5 className="text-xl2 text-center">
            Go to preimum
          </h5>
        </header>
        <div className="flex flex-col gap-4">
          <p className="font-medium">Need more features?</p>
          <p className="text-[#afb0b6]">
            Update your account to premium to get more features
          </p>
        </div>
        <button>Get now</button>
      </InfoWrapper>
    </section>
  );
}
