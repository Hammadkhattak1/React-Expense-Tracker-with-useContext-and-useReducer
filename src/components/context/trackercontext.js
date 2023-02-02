import { createContext, useContext, useReducer, useState } from "react";
//here we start writing context for expense tracker !
export const expenseTrackerContext = createContext({});

const initialData = {
  currentBalance: 0,
  income: 0,
  expense: 0,
  transactionHistory: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "income":
      return {
        ...state,
        currentBalance: state.currentBalance + action.amount,
        income: state.income + action.amount,
        transactionHistory: [...state.transactionHistory, action],
      };
    case "expense":
      return {
        ...state,
        currentBalance: state.currentBalance - action.amount,
        expense: state.expense + action.amount,
        transactionHistory: [...state.transactionHistory, action],
      };
    case "reset":
      return initialData;
    default:
      return state;
  }
};

const TrackerContextComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <expenseTrackerContext.Provider value={{ state, dispatch }}>
      {children}
    </expenseTrackerContext.Provider>
  );
};

export { TrackerContextComponent };

const GetexpenseTrackerData = () => {
  const data = useContext(expenseTrackerContext);

  return data;
};
export { GetexpenseTrackerData };
