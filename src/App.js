import { Fragment } from "react";
import "./App.css";
import AddNewTransaction from "./components/addnewTransaction";
import BalancePage from "./components/balancepage";
import Header from "./components/header";
import { TrackerContextComponent } from "./components/context/trackercontext";
import TransactionHistory from "./components/transactionHistroy";
function App() {
  return (
    <Fragment>
      <TrackerContextComponent>
        <header className="main-header">
          <div className="container">
            <Header />
          </div>
        </header>
        <section className="balance-class">
          <BalancePage />
        </section>
        <section className="add-transaction">
          <AddNewTransaction />
        </section>

      
      </TrackerContextComponent>
    </Fragment>
  );
}

export default App;
