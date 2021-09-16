import { RecipeFilters } from "myTypes";

function Filters(props: RecipeFilters) {
  let i = 0;
  return (
    <div className="filters-container">
      <div className="box-of-filters">
        <h4>{props.title}</h4>
        <ul>
          {props.options.map((option) => {
            i++;
            let idstring = i.toString();
            return (
              <li key={`${props.idWord}${idstring}`}>
                <button
                  id={`${props.idWord}`}
                  className="filter-btn"
                  onClick={props.handleClick}>
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
