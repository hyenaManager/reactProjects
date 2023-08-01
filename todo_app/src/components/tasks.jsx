export default function Task({ initialData, onCheckChange, onDelete }) {
  return (
    <>
      <ul className="list-group">
        {initialData.map((data) => (
          <li className="taskList list-group-item " key={data.id}>
            <p>{data.todo}</p>
            {data.done ? (
              <i className="material-icons " style={{ color: "blue" }}>
                done
              </i>
            ) : (
              <input
                type="checkBox"
                className="form-check-input checkBox "
                checked={data.done}
                onChange={(e) => onCheckChange(e.target.checked, data.id)}
              />
            )}
            <button
              className="btn btn-outline-danger "
              onClick={() => onDelete(data.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
