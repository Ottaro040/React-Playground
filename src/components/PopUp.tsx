import { Fragment } from "react/jsx-runtime";
import "./PopUp.css";
import { useEffect, useState } from "react";

function PopUp() {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="outer">
      <h1 className="username">Enter Username</h1>
      <div className="prompt">
        <form name="myPrombt">
          <input type="test" name="name" id="name" required></input>
          <input
            type="submit"
            id="submitPrompt"
            value="Sumbit"
            onClick={() =>
              setShowDescription((showDescription) => !showDescription)
            }
          ></input>
        </form>
      </div>
    </div>
  );
}

export default PopUp;
