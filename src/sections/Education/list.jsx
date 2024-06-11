import EducationItem from "./item";

function EducationList({ list, onEdit }) {
  return (
    <div className="list">
      {list.map((item) => {
        return <EducationItem key={item.id} item={item} onEdit={onEdit} />;
      })}
    </div>
  );
}

export default EducationList;
