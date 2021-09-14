interface IRecipeFilters {
  id: number;
  title: string;
}

function Filters(props: IRecipeFilters) {
  return (
    <div className="filters-container">
      <div className="box-of-filters">
        <h4>{props.title}</h4>
        <ul>
          <li>
            <button className="clicked-filter-btn">Middag</button>
          </li>
          <li>
            <button className="filter-btn">Lunch</button>
          </li>
          <li>
            <button className="filter-btn">Efterrätt</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Filters;
