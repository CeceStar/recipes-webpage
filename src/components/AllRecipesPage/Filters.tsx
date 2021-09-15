import { MouseEvent } from "react";
import { RecipeFilters } from "myTypes";

function Filters(props: RecipeFilters) {
  let i = 0;
  function handleCLickEvent(e: MouseEvent<HTMLButtonElement>): void {
    // console.log(e.currentTarget.id);
    // console.log(e.currentTarget.innerHTML);
    if (e.currentTarget.className === "filter-btn") {
      e.currentTarget.className = "clicked-filter-btn";
    } else {
      e.currentTarget.className = "filter-btn";
    }
  }

  return (
    <div className="filters-container">
      <div className="box-of-filters">
        <h4>{props.title}</h4>
        <ul>
          {props.options.map((option) => {
            i++;
            let idstring = i.toString();
            return (
              <li>
                <button
                  id={`${props.idWord}${idstring}`}
                  className="filter-btn"
                  onClick={handleCLickEvent}>
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Filters;
