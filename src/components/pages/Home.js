import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Home = () => {
  const [adventure, setAdventure] = useState([]);

  useEffect(() => {
    const data = getData();
    data.then((res) => {
      console.log(res.data);
      setAdventure(res.data);
    });
  }, []);

  const getData = () => {
    const data = axios.get(
      'http://localhost/wp-hunter/wp-json/wp/v2/wyprawy/5004'
    );
    return data;
  };

  return (
    <>
      {!adventure ? (
        <div>Loading...</div>
      ) : (
        <div
          dangerouslySetInnerHTML={{ __html: adventure.content.rendered }}
        ></div>
      )}
    </>
  );
};
