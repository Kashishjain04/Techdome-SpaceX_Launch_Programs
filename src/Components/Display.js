import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../redux/mainSlice";
import "../assets/css/Display.css";

const Display = () => {
  const flights = useSelector(selectData);
  return (
    <div className="display">
      <p className="topHere"></p>
      <div className="display__flights">
        {flights?.map((flight) => (
          <div key={flight?.flight_number} className="display__card">
            <img src={flight?.links.mission_patch_small} alt="mission_patch" />
            <h2 className="display__name">
              {flight?.mission_name} #{flight?.flight_number}
            </h2>
            {flight?.mission_id.length !== 0 && (
              <>
                <h4 className="display__subHead">Mission Ids: </h4>
                <ul className="display__list">
                  {flight?.mission_id.map((id) => (
                    <li key={flight?.flight_number + id}>{id}</li>
                  ))}
                </ul>
              </>
            )}
            <h4 className="display__subHead">Launch Year: </h4>
            {" " + flight?.launch_year}
            <br />
            <h4 className="display__subHead">Successful Launch: </h4>
            {" " + flight?.launch_success}
            <br />
            <h4 className="display__subHead">Successful Landing: </h4>
            {" true"}
            <br />
          </div>
        ))}
      </div>
      <div className="bottomHere"></div>
    </div>
  );
};

export default Display;
