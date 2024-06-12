import "../../styles/components/confirmDialog.css";

function ConfirmDialog({ data, onSubmit, onCancel }) {
  // console.log("data", data);
  const msg = 'Are you sure you want to delete your "' + data + '" education?';

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
