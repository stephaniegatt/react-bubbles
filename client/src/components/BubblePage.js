import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const { location } = useHistory();
  // fetch your colors data from the server when the component mounts
  useEffect(() => {
    axiosWithAuth()
    .get("http://localhost:5000/api/colors")
    .then(res => {
      // set that data to the colorList state property
      setColorList(res.data)
    })
    .catch(err => console.log(err))
  }, [location])
    

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
