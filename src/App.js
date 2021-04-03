import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import actions from "./api/actions";
import Display from "./Components/Display";
import Filters from "./Components/Filters";
import { setData } from "./redux/mainSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchInitial = async () => {
      const data = await actions.initial();
      dispatch(setData(data ? data : []));
    };
    fetchInitial();
  }, [dispatch]);

  const scrollToBottom = () => {
    document
      .querySelector(".bottomHere")
      .scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTop = () => {
    document.querySelector(".topHere").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="scroll bottom" onClick={scrollToBottom}>
        ^
      </div>
      <div className="scroll top" onClick={scrollToTop}>
        ^
      </div>
      <h2 className="heading">SpaceX Launch Programs</h2>
      <div className="app">
        <Filters />
        <Display />
      </div>
      <h2 className="heading footer">Developed by: Kashish Jain</h2>
    </div>
  );
}

export default App;
