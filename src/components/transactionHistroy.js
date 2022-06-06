import { Fragment } from "react";
import { GetexpenseTrackerData } from "./context/trackercontext";

const TransactionHistory = () => {
  const { state } = GetexpenseTrackerData();

  return (
    <Fragment>
      <div className="container">
        {state.transactionHistory.length > 0 ? (
          <p> Transactions History</p>
        ) : (
          <p>No Transactions added yet.</p>
        )}
        <ol className="list-group list-group-numbered my-3">
          {state.transactionHistory.map((eachTransaction, index) => {
            return (
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{eachTransaction.title}</div>${" "}
                  {eachTransaction.amount}
                </div>
                <span
                  className={
                    eachTransaction.type === "income"
                      ? "badge bg-primary rounded-pill"
                      : "badge bg-danger rounded-pill"
                  }
                >
                  {eachTransaction.type}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </Fragment>
  );
};

export default TransactionHistory;
