import { useState } from "react";
import "../../styles/components/form.css";

function Field({ id, attr, val, onChange }) {
  const title = attr.title;
  const type = attr.type;
  const isRequired = attr.isRequired;

  return (
    <li>
      <label htmlFor={id}>{title}</label>
      {isRequired && <span className="required-icon">*</span>}
      {type != "textarea" ? (
        <input
          type={type}
          name={id}
          id={id}
          onChange={onChange}
          value={val}
          required={isRequired}
        />
      ) : (
        <textarea
          name={id}
          id={id}
          onChange={onChange}
          required={isRequired}
          value={val}
          rows={10}
        />
      )}
    </li>
  );
}

function Form({ id, fields, data, onSubmit, onCancel }) {
  const [formData, setFormData] = useState(data);

  function handleValueChange({ e, k }) {
    setFormData({ ...formData, [k]: e.target.value });
  }

  function handleSubmitBtn(e) {
    e.preventDefault();
    const submittedData = {
      ...formData,
      id: formData.id ? formData.id : crypto.randomUUID(),
    };
    onSubmit(submittedData);
    setFormData(data);
  }

  return (
    <form id={id} onSubmit={handleSubmitBtn}>
      <ul>
        {Object.entries(fields).map(([k, v]) => (
          <Field
            key={k}
            id={k}
            attr={v}
            val={formData[k]}
            onChange={(e) => handleValueChange({ e, k })}
          />
        ))}
        <button className="submit-btn">submit</button>
        <button className="cancel-btn" onClick={onCancel}>
          cancel
        </button>
      </ul>
    </form>
  );
}

export default Form;
