import { useState } from "react";
import "../../styles/components/form.css";
import Field from "../Field";
import FlexibleField from "../FlexibleField";

function Form({ id, fields, data, onSubmit, onCancel }) {
  const [formData, setFormData] = useState(data);

  // flexible field
  function handleAddNewValue({ k, tempField }) {
    if (!formData[k].includes(formData[tempField])) {
      const newList = [...formData[k], formData[tempField]];
      setFormData({ ...formData, [k]: newList, [tempField]: "" });
    }
  }
  function handleDeleteValue({ k, id }) {
    const newList = formData[k].filter((i) => i !== id);
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
            const tempField = k + "Temp";
            return (
              <li key={k}>
                <FlexibleField
                  id={tempField}
                  attr={v}
                  tempVal={formData[tempField]}
                  val={formData[k]}
                  onChange={(e) => handleValueChange({ e, k: tempField })}
                  onAdd={() => handleAddNewValue({ k, tempField })}
                  onDelete={(id) => handleDeleteValue({ k, id })}
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
