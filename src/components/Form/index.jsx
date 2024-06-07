import { useState } from "react";
import "../../styles/components/form.css";

function Field({ id, attr, val, onChange }) {
  const title = attr.title;
  const type = attr.type;
  return (
    <li>
      <label htmlFor={id}>{title}</label>
      <input type={type} name={id} id={id} onChange={onChange} value={val} />
    </li>
  );
}

function Form({ id, fields, data, onSubmit, onCancel }) {
  const initialFormData = data;
  const [formData, setFormData] = useState(initialFormData);

  function handleValueChange({ e, k }) {
    setFormData({ ...formData, [k]: e.target.value });
  }

  function handleSubmitBtn(e) {
    e.preventDefault();
    onSubmit(formData);
  }
  function handleCancelBtn(e) {
    e.preventDefault();
    setFormData(initialFormData);
    onCancel();
  }

  return (
    <form id={id}>
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
        <button className="submit-btn" onClick={(e) => handleSubmitBtn(e)}>
          submit
        </button>
        <button className="cancel-btn" onClick={(e) => handleCancelBtn(e)}>
          cancel
        </button>
      </ul>
    </form>
  );
}

export default Form;
