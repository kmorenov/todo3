import React from "react";

const Pagination = ({ page, perPage, total, handlePage }) => {
  const pages = Array.from(
    { length: Math.ceil(total / perPage) },
    (v, k) => k + 1
  );
  const prev = 1 === page ? page : page - 1;
  const next = pages.length === page ? page : page + 1;

  return (
    <ul className="uk-pagination uk-flex-center uk-flex-middle" data-uk-margin>
      <li>
        <a
          href="/"
          onClick={e => {
            e.preventDefault();
            handlePage(prev);
          }}
        >
          <span data-uk-pagination-previous />
        </a>
      </li>
      {pages.map(itemPage => {
        const isActive = itemPage === page;
        return (
          <li key={itemPage} className={isActive ? "uk-active" : ""}>
            {isActive ? (
              <span>{itemPage}</span>
            ) : (
              <a
                href="/"
                onClick={e => {
                  e.preventDefault();
                  handlePage(itemPage);
                }}
              >
                {itemPage}
              </a>
            )}
          </li>
        );
      })}

      <li>
        <a
          href="/"
          onClick={e => {
            e.preventDefault();
            handlePage(next);
          }}
        >
          <span data-uk-pagination-next />
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
