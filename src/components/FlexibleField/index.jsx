import { useState } from "react";
import "../../styles/components/flexibleField.css";

function FlexibleField({ id, attr, val, onAdd, onDelete }) {
  const title = attr.title;
  const isRequired = attr.isRequired;

  const [tempVal, setTempVal] = useState("");

  function handleAddValueToList() {
    if (!val.includes(tempVal) && tempVal) {
      onAdd(tempVal);
      setTempVal("");
    }
  }

  return (
    <>
      <label htmlFor={id}>{title}</label>
      {isRequired && <span className="required-icon">*</span>}
      <div className="flexible-input">
        <input
          type="text"
          name={id}
          id={id}
          onChange={(e) => setTempVal(e.target.value)}
          value={tempVal}
          required={isRequired}
        />
        <button
          type="button"
          className="add-btn"
          onClick={handleAddValueToList}
        >
          Add
        </button>
      </div>
      <div className="value-list">
        {val.map((v) => (
          <div key={v} className="each-value">
            {v}
            <button
              type="button"
              className="del-icon"
              onClick={() => onDelete(v)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default FlexibleField;
