import { useState } from "react";

export default function Cities({ cityList, cityClick, selectedId }) {
  const [filterText, setFilterText] = useState("");
  const validCity = [];
  cityList.map((city, index) => {
    if (city.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    } else {
      validCity.push(
        <li
          className={
            "list-group-item " + (selectedId === index ? " active" : null)
          }
          onClick={() => cityClick(city, index)}
          key={index}
        >
          {city}
        </li>
      );
    }
  });

  return (
    <>
      <div className="aside">
        <input
          placeholder="search city.."
          className="form-control"
          onChange={(e) => setFilterText(e.target.value)}
        />
        <ul className="list-group cityList">{validCity}</ul>
      </div>
    </>
  );
}
