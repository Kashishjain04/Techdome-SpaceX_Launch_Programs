import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "./api/actions";
import Display from "./Components/Display";
import Filters from "./Components/Filters";
import { selectData, setData } from "./redux/mainSlice";

function App() {
  const dispatch = useDispatch(),
    flights = useSelector(selectData);

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
      {flights?.length !== 0 && (
        <>
          <i
            className="scroll bottom bx bxs-chevron-down"
            onClick={scrollToBottom}
          />
          <i className="scroll top bx bxs-chevron-up" onClick={scrollToTop} />
        </>
      )}
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
