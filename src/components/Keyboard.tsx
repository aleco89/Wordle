import React from "react";
import Key from "./Key";

function Keyboard() {
  const line1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const line2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const line3 = ["Z", "X", "C", "V", "B", "N", "M"];
  return (
    <div className="keyboard">
      {/*first line keyboard */}
      <div className="kLine">
        {line1.map((key) => {
          return <Key keyValue={key} />;
        })}
      </div>

      {/*second line keyboard */}
      <div className="kLine">
        {line2.map((key) => {
          return <Key keyValue={key} />;
        })}
      </div>

      {/*third line keyboard */}
      <div className="kLine">
        <Key keyValue={"ENTER"} />;
        {line3.map((key) => {
          return <Key keyValue={key} />;
        })}
        <Key keyValue={"DEL"} />;
      </div>
    </div>
  );
}

export default Keyboard;
