import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";
import bills from "../data/bills";
import expensesBreakdowns from "../data/expenses";
import transactions from "../data/trasactions";
import { Icon } from "../components/Elements/Icons";
import { useState } from "react";
import CardBalance from "../components/Fragments/Dashboard/CardBalance";
import CardStatistic from "../components/Fragments/Dashboard/CardStatistic";
import CardGoal from "../components/Fragments/Dashboard/CardGoal";
import CardBill from "../components/Fragments/Dashboard/CardBills";


const DashboardPage = () => {

  const tabs = ["All", "Revenue", "Expense"];

  const [trxs, setTrx] = useState(transactions);
  const [activeTab, setActiveTab] = useState("All");

  function handleClick(e) {

    const transactionFiltered = 
      e.target.value != "All"
        ? transactions.filter(({type}) => type == e.target.value)
        : transactions;

    setActiveTab(e.target.value);
    setTrx(transactionFiltered);
  }

  const expenseCard = expensesBreakdowns.map((expensesBreakdown) => (
    <div key={expensesBreakdown.id} className="flex pb-4 justify-between">
      <div className="flex">
        <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
          {expensesBreakdown.icon}
        </div>
        <div className="ms-4">
          <span className="text-gray-02">{expensesBreakdown.category}</span>
          <br />
          <span className="font-bold text-lg">${expensesBreakdown.amount}</span>
          <div className="flex">
            <span className="text-gray-02">
              {expensesBreakdown.percentage}%*
            </span>{" "}
            {expensesBreakdown.arrow}
          </div>
        </div>
      </div>
      <div className="flex place-content-center flex-col me-8">
        <Icon.ArrowRight />
      </div>
    </div>
  ));
  const transactionCard = trxs.map((transaction) => (
    <div key={transaction.id} className="flex justify-between my-6">
      <div className="flex">
        <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
          {transaction.icon}
        </div>
        <div className="ms-4">
          <span className="text-xl font-bold">
            {transaction.transactionName}
          </span>
          <br />
          <span className="text-gray-02">{transaction.shopName}</span>
        </div>
      </div>
      <div className="text-right">
        <span className="text-xl font-bold text-gray-02">
          ${transaction.amount}
        </span>
        <br />
        <span className="text-gray-02">{transaction.date}</span>
      </div>
    </div>
  ));

  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <CardBalance/>
        <CardGoal/>
        <CardBill/>
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-6">

        <div className="md:col-span-1">
          <Card 
            title="Recent Transaction"
            desc={
              <div>
                <div className="mb-4">
                  {tabs.map((tab) => (
                    <button 
                      key={tab} 
                      className = {
                        activeTab == tab
                          ? "px-4 font-bold border-b-4 border-primary text-primary"
                          : "px-4 font-bold text-gray-01"
                      }
                      value={tab}
                      onClick={handleClick}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                {transactionCard}
              </div>
            }
         />
         
        </div>
        <div className="md:col-span-2 flex flex-col flex-1">
        <CardStatistic/>
          <Card title="Expenses Breakdown" 
          desc={<div className="lg:grid lg:grid-cols-3">{expenseCard}</div>}/>
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;