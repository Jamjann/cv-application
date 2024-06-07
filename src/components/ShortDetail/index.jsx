function ShortDetail({ title, val, link }) {
  return (
    <div className="short-detail">
      <span>
        <b>{title}: </b>
        {val}
        {link && (
          <a href={link} target="_blank">
            {link}
          </a>
        )}
      </span>
    </div>
  );
}

export default ShortDetail;
