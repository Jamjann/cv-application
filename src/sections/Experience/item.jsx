import { formatDate } from "../../utils";

function ExperienceItem({ item, onEdit, onDelete }) {
  const {
    id,
    company,
    position,
    startDate,
    endDate,
    responsibilities,
    skills,
  } = item;

  const date =
    formatDate(startDate, "yyyy-MM", "MMM yyyy") +
    " - " +
    formatDate(endDate, "yyyy-MM", "MMM yyyy");

  return (
    <div className="item">
      <div className="block-header">
        <div>
          <h3 className="topic">{company}</h3>
          <div className="sub-topic">
            <h4>{position}</h4>
            <p>{date}</p>
          </div>
        </div>
        <div className="actions">
          <button type="button" onClick={() => onEdit(id)}>
            Edit
          </button>
          <button type="button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>
      </div>
      <div className="block-detail">
        <p>{responsibilities}</p>
        <div className="skill-list">
          {skills.map((skill) => (
            <div key={skill} className="each-skill">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceItem;
