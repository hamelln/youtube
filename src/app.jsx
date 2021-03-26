import React, { useState, useEffect } from 'react';
import './app.css';
import Contents from './components/contents/contents';
import Header from './components/header';

function App() {  

  const [videos, setVideos] = useState([]);
  
  useEffect(()=> {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDBseE44a-LvZEexvGVNz-T5wROAltQbvM", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  
  return (
  <>
  <Header/>
  <Contents contents={videos} />
  </>
  );

}

export default App;
