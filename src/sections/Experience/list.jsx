import ExperienceItem from "./item";

function ExperienceList({ list, onEdit, onDelete }) {
  return (
    <div className="list">
      {list.map((item) => {
        return (
          <ExperienceItem
            key={item.id}
            item={item}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
}

export default ExperienceList;
