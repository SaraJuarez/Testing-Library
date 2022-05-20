import React, { useState } from "react";
import "../../styles/summaryForm.css";
function SummaryForm() {
  const [checked, setChecked] = useState(false);

  let backgroundColor = checked === true ? "orange" : "gray";

  return (
    <div className="summaryForm-container">
      <button
        style={{ backgroundColor: backgroundColor }}
        disabled={checked === true ? false : true}
      >
        Confirm order
      </button>
      <div className="inputContainer">
        <input
          onClick={() => setChecked(!checked)}
          id="terms"
          type="checkbox"
          className="input"
        />
        <label htmlFor="terms">I agree on terms and conditions</label>
        <div className="popOver">No ice cream will actually be delivered</div>
      </div>
    </div>
  );
}

export default SummaryForm;
