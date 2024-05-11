import "./PokerTable.css";
import { Fragment } from "react/jsx-runtime";

function Table() {
  return (
    <div className="poker-container">
      <div className="poker-table">
        <div className="outside-ring"></div>
        <div className="inside-ring"></div>
      </div>
    </div>
  );
}

export default Table;
