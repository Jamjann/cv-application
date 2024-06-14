import { useState } from "react";
import "../../styles/components/form.css";
import Field from "../Field";
import FlexibleField from "../FlexibleField";

function Form({ id, fields, data, onSubmit, onCancel }) {
  const [formData, setFormData] = useState(data);

  // flexible field
  function handleAddNewValue({ k, val }) {
    const newList = [...formData[k], val];
    setFormData({ ...formData, [k]: newList });
  }
  function handleDeleteValue({ k, val }) {
    const newList = formData[k].filter((i) => i !== val);
    setFormData({ ...formData, [k]: newList });
  }

  // general
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
        {Object.entries(fields).map(([k, v]) => {
          if (v.type === "flexible") {
            return (
              <li key={k}>
                <FlexibleField
                  id={k}
                  attr={v}
                  val={formData[k]}
                  onAdd={(val) => handleAddNewValue({ k, val })}
                  onDelete={(val) => handleDeleteValue({ k, val })}
                />
              </li>
            );
          } else {
            return (
              <li key={k}>
                <Field
                  id={k}
                  attr={v}
                  val={formData[k]}
                  onChange={(e) => handleValueChange({ e, k })}
                />
              </li>
            );
          }
        })}
        <li className="actions">
          <button className="submit-btn">submit</button>
          <button className="cancel-btn" onClick={onCancel}>
            cancel
          </button>
        </li>
      </ul>
    </form>
  );
}

export default Form;
