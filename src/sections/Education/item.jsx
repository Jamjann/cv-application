import { formatDate } from "../../utils";

function EducationItem({ item, onEdit }) {
  const { id, school, degree, field, startDate, endDate, description } = item;
  const study =
    (degree && degree) + (degree && field && ", ") + (field && field);
  const date =
    formatDate(startDate, "yyyy-MM", "MMM yyyy") +
    " - " +
    formatDate(endDate, "yyyy-MM", "MMM yyyy");

  return (
    <div className="item">
      <div className="block-header">
        <div>
          <h3 className="topic">{school}</h3>
          <div className="sub-topic">
            <h4>{study}</h4>
            <p>{date}</p>
          </div>
        </div>
        <button type="button" onClick={() => onEdit(id)}>
          Edit
        </button>
      </div>
      <div className="block-detail">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default EducationItem;
