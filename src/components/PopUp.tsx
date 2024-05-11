import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./PopUp.css";

function PopUp() {
  return (
    <Popup
      className="popupbutton"
      trigger={<button> Enter Username</button>}
      position="right bottom"
    >
      <div>
        {" "}
        <div className="prompt">
          <form name="myPrombt">
            <input type="test" name="name" id="name" required></input>
            <input type="submit" id="submitPrompt" value="Sumbit"></input>
          </form>
        </div>
      </div>
    </Popup>
  );
}

export default PopUp;
