import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from './PhotoCard';
import "./App.css";

const appStyle = {background: 'lightBlue', minHeight: '1vh'};

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=k4Ry45UE6rauu42Ecg0ZdmhXul7QBtQCntdwPX3c')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  return (
    <div className="App" style={appStyle}>
      <PhotoCard  title={data.title}
                  url={data.url}
                  explanation={data.explanation}/>
    </div>
  );
}


export default App;
