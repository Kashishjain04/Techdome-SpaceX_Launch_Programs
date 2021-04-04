import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../api/actions";
import "../assets/css/Filters.css";
import {
  setCurrentFilter,
  setData,
  selectCurrentFilter,
} from "../redux/mainSlice";

const Filters = () => {
  const dispatch = useDispatch(),
    currentFilter = useSelector(selectCurrentFilter);

  const filterYears = Array(15)
    .fill()
    .map((_, index) => 2006 + index);

  const reset = async (type) => {
    let t = [...currentFilter];
    dispatch(setCurrentFilter({ type, value: null }));
    t[type] = null;
    const data = await actions.filter(t[0], t[1], t[2]);
    dispatch(setData(data));
  };

  const filterYear = async (year) => {
    const data = await actions.filter(year, currentFilter[1], currentFilter[2]);
    dispatch(setData(data));
    dispatch(setCurrentFilter({ type: 0, value: year }));
  };
  const filterLaunch = async (value) => {
    const data = await actions.filter(
      currentFilter[0],
      value,
      currentFilter[2]
    );
    dispatch(setData(data));
    dispatch(setCurrentFilter({ type: 1, value }));
  };
  const filterLand = async (value) => {
    const data = await actions.filter(
      currentFilter[0],
      currentFilter[1],
      value
    );
    dispatch(setData(data));
    dispatch(setCurrentFilter({ type: 2, value }));
  };

  return (
    <div className="filters">
      <h2>Filters</h2>
      <div className="filters__subHead">
        Launch Year
        <hr />
      </div>
      <i onClick={() => reset(0)} className="bx bx-reset" />
      <div className="filters__options">
        {filterYears.map((year) => (
          <p
            onClick={() => filterYear(year)}
            key={year}
            className={currentFilter[0] === year ? "active" : ""}
          >
            {year}
          </p>
        ))}
      </div>
      <div className="filters__subHead">
        Successful Launch
        <hr />
      </div>
      <i onClick={() => reset(1)} className="bx bx-reset" />
      <div className="filters__options">
        <p
          onClick={() => filterLaunch("true")}
          className={currentFilter[1] === "true" ? "active" : ""}
        >
          True
        </p>
        <p
          onClick={() => filterLaunch("false")}
          className={currentFilter[1] === "false" ? "active" : ""}
        >
          False
        </p>
      </div>
      <div className="filters__subHead">
        Successful Landing
        <hr />
      </div>
      <i onClick={() => reset(2)} className="bx bx-reset" />
      <div className="filters__options">
        <p
          onClick={() => filterLand("true")}
          className={currentFilter[2] === "true" ? "active" : ""}
        >
          True
        </p>
        <p
          onClick={() => filterLand("true")}
          className={currentFilter[2] === "false" ? "active" : ""}
        >
          False
        </p>
      </div>
    </div>
  );
};

export default Filters;
