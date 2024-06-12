import EducationItem from "./item";

function EducationList({ list, onEdit, onDelete }) {
  return (
    <div className="list">
      {list.map((item) => {
        return (
          <EducationItem
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

export default EducationList;
