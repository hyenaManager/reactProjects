import { useState } from "react";

export default function Add({ onAdd }) {
  const [todo, setTodo] = useState("");
  return (
    <>
      <div className="input-group mb-3 Add">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Your todo...."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          onClick={() => {
            onAdd(todo);
          }}
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Add
        </button>
      </div>
    </>
  );
}
