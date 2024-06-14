import "../../styles/components/confirmDialog.css";

function ConfirmDialog({ msg, onSubmit, onCancel }) {
  return (
    <div className="confirm-dialog">
      <h4>{msg}</h4>
      <div className="actions">
        <button className="submit-btn" onClick={onSubmit}>
          submit
        </button>
        <button className="cancel-btn" onClick={onCancel}>
          cancel
        </button>
      </div>
    </div>
  );
}

export default ConfirmDialog;
