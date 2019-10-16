import React from "react";

function FilterBar({
  search,
  order,
  perPage,
  layout = "grid",
  handleLayout,
  onChange,
  ...other
}) {
  return (
    <div className="uk-margin-medium-bottom uk-flex">
      <form className="uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right">
        <span data-uk-search-icon />
        <input
          className="uk-search-input"
          type="search"
          name="search"
          value={search}
          onChange={onChange}
          placeholder="Search..."
        />
      </form>
      <select
        className="uk-select uk-width-small uk-margin-auto-left"
        value={order}
        onChange={onChange}
        name="order"
      >
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>
      <select
        className="uk-select uk-width-small uk-margin-left"
        value={perPage}
        onChange={onChange}
        name="perPage"
      >
        <option value={6}>6</option>
        <option value={12}>12</option>
        <option value={24}>24</option>
      </select>
      <div className="uk-button-group uk-margin-left">
        <button
          type="button"
          onClick={() => handleLayout("grid")}
          className={`uk-button uk-button-default ${
            "grid" === layout ? "uk-active" : ""
          }`}
        >
          <span data-uk-icon="icon:  grid" />
        </button>
        <button
          type="button"
          onClick={() => handleLayout("list")}
          className={`uk-button uk-button-default ${
            "list" === layout ? "uk-active" : ""
          }`}
        >
          <span data-uk-icon="icon:  list" />
        </button>
      </div>
    </div>
  );
}

export default FilterBar;
