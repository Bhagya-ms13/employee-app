import Button from "../Button/Button";
import "./Delete.css";


function Delete({ onClose,onConfirm }: { onClose: () => void , onConfirm: () => void}) {
  return (
    <div className="modal">
      <div className="outer-container">
        <div className="x-div">
          <button onClick={onClose}>&times;</button>
        </div>
        <p style={{ maxWidth: "50%", fontSize: "20px" }}>Are you sure?</p>
        <p style={{ maxWidth: "50%", color: "grey" }}>
          Do you really want to delete employee?
        </p>
        <div className="button-container">
          <Button label="Confirm" onClick={onConfirm}   style={{
    backgroundColor: "#007bff", 
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
  }}/>
          <Button
            label="Cancel"
            onClick={onClose}
            variant="secondary"
            style={{ border: "1px solid rgba(0, 0, 0, 0.2)" }}
          />
        </div>
      </div>
    </div>
  );
}
export default Delete;
