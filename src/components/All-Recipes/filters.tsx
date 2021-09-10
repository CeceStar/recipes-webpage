function Filters() {
  return (
    <div className="filters-container">
      <div className="box-of-filters">
        <h4>Måltid</h4>
        <ul>
          <li>
            <button className="clicked-filter-btn">Middag</button>
          </li>
          <li>
            <button className="clicked-filter-btn">Lunch</button>
          </li>
          <li>
            <button className="filter-btn">Efterrätt</button>
          </li>
          <li>
            <button className="filter-btn">Brunch</button>
          </li>
          <li>
            <button className="filter-btn">Frukost</button>
          </li>
          <li>
            <button className="filter-btn">Förrätt</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Filters;
