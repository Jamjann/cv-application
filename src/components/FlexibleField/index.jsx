import "../../styles/components/flexibleField.css";

function FlexibleField({ id, attr, tempVal, val, onAdd, onChange, onDelete }) {
  const title = attr.title;
  const isRequired = attr.isRequired;

  return (
    <>
      <label htmlFor={id}>{title}</label>
      {isRequired && <span className="required-icon">*</span>}
      <div className="flexible-input">
        <input
          type="text"
          name={id}
          id={id}
          onChange={onChange}
          value={tempVal}
          required={isRequired}
        />
        <button type="button" className="add-btn" onClick={onAdd}>
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
