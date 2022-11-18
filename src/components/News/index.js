<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import News from "./NewsSlider/index.js";

const Newsfetch = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/posts")
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
=======
import React, { useEffect, useState } from 'react';
import News from '../../containers/pages/NewsSlider/index.js';

const New = () => {


	const [news, setNews] = useState([]);
	useEffect(()=>{
		fetch("http://localhost:5000/posts")
		.then(res => res.json())
		.then((res) => {
			console.log(res[0].data);
			console.log('res[0].data');
			setNews( res[0].data )
		})
		.catch(console.log)
	})
	

return (
	<div>

		<News news = {news}/>
	
	</div>
);
};

export default New;
>>>>>>> 89f01699ae944ffc95e094432ea3385ecf7dc5c0
