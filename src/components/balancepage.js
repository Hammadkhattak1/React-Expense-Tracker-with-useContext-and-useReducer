import { Fragment } from "react";
import { GetexpenseTrackerData } from "./context/trackercontext";

const BalancePage = () => {
  const { state } = GetexpenseTrackerData();

  console.log("and so this is our state:",state)
  return (
    <Fragment>
      <div className="container">
        <div className="your-blalance">
          <h3 className="balance-heading">Your Balance</h3>
          <h4 className="text-secondary text-muted shadow p-1 fs-4 d-inline-block">
            $ {state.currentBalance}
          </h4>
        </div>

        <div className="inc-exp shadow">
          <div className="income-class">
            <p className="heading">Income</p>
            <p className="p inc">${state.income}</p>
          </div>
          <div className="hr"></div>
          <div className="expense-class">
            <p className="heading">Expense</p>
            <p className="p ex">${state.expense}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BalancePage;
