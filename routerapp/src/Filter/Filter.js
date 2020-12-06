import React from "react";

import ReactStars from "react-rating-stars-component";

const Filter = ({ searchbytitle, searchbyrate }) => {
  const ratingstarts = {
    size: 40,
    count: 5,
    isHalf: false,
    value: 0,
    color: "yellow",
    activeColor: "Red",
    onChange: (newvalue) => {
      searchbyrate(newvalue);
    },
  };

  return (
    <div>
      <div style={{ backgroundColor: "Black", fontSize: 16, padding: 40 }}>
        <form className="search">
          <div className="searchingalign">
            <label className="titlelabel"> Title </label>
            <input
              className="searchingform"
              type="text"
              placeholder="Tap here"
              onChange={(e) => searchbytitle(e.target.value)}
            />
          </div>
          <div className="ratingalign">
            <label className="ratelabel"> Rate </label>
            <span className="stars">
              <ReactStars {...ratingstarts} />
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
