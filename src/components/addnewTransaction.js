import { Fragment, useState } from "react";
import { GetexpenseTrackerData } from "./context/trackercontext";
import TransactionHistory from "./transactionHistroy";

const AddNewTransaction = () => {
  const [transactionTitle, setTransactionTitle] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("");
  const { dispatch } = GetexpenseTrackerData();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      transactionTitle !== "" &&
      transactionAmount !== 0 &&
      transactionType !== ""
    ) {
      setTransactionAmount(0);
      setTransactionTitle("");
      setTransactionType("");
      dispatch({
        type: transactionType,
        amount: parseInt(transactionAmount),
        title: transactionTitle,
      });

      return;
    }

    alert("Please Fill in all  the fields!");
  };

  return (
    <Fragment>
      <div className="container">
        <TransactionHistory />
        <form
          className="form"
          onSubmit={(e) => {
            handleFormSubmit(e);
          }}
        >
          <div>
            <label htmlFor="text">Text</label>
            <input
              className="form-control"
              type={"text"}
              placeholder="e.g Salary"
              value={transactionTitle}
              onChange={(e) => {
                setTransactionTitle(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="text">Amount</label>
            <input
              className="form-control"
              type="number"
              placeholder="e.g Gas Bill"
              value={transactionAmount}
              onChange={(e) => {
                setTransactionAmount(e.target.value);
              }}
            />
          </div>
          <div className="mt-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onClick={(e) => {
                  setTransactionType("income");
                }}
              />
              <label
                class="form-check-label text-success"
                for="flexRadioDefault1"
              >
                Income
              </label>
            </div>
            <div class="form-check mb-4">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                onClick={(e) => {
                  setTransactionType("expense");
                }}
              />
              <label
                class="form-check-label text-danger"
                for="flexRadioDefault2"
              >
                Expense
              </label>
            </div>

            <p className="text-muted ">
              ------warning all data will be lost -------
            </p>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                onClick={(e) => {
                  dispatch({ type: "reset" });
                }}
              />

              <label
                class="form-check-label text-warning"
                for="flexRadioDefault2"
              >
                Reset All Data
              </label>
            </div>
          </div>
          <button className="btn-sm btn-primary mt-3" type="submmit">
            Add Transaction
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default AddNewTransaction;
