import React, { useEffect, useState } from "react";
import News from "./NewsSlider/index.js";
const BASE_URL = process.env.BASE_URL;

const Newsfetch = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("http://3.93.45.63:5000/posts")
      .then((res) => res.json())
      .then((res) => {
        setNews(res[0].data);
      })
      .catch((err) => console.error(err));
  });

  return (
    <div>
      <News news={news} />
    </div>
  );
};

export default Newsfetch;
