import "../../styles/components/field.css";

function Field({ id, attr, val, onChange }) {
  const title = attr.title;
  const type = attr.type;
  const isRequired = attr.isRequired;

  function renderField(type) {
    switch (type) {
      case "textarea":
        return (
          <textarea
            name={id}
            id={id}
            onChange={onChange}
            required={isRequired}
            value={val}
            rows={10}
          />
        );
      default:
        return (
          <input
            type={type}
            name={id}
            id={id}
            onChange={onChange}
            value={val}
            required={isRequired}
          />
        );
    }
  }

  return (
    <>
      <label htmlFor={id}>{title}</label>
      {isRequired && <span className="required-icon">*</span>}
      {renderField(type)}
    </>
  );
}
export default Field;
