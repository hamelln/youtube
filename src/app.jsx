import React, { Component } from 'react';
import './app.css';
import Contents from './components/contents';
import Frame from './components/frame';
import Header from './components/header';
import axios from "axios";

class App extends Component {
  
  state = {
    
    contents: [
      {id: 1, name: "test__1", desc: "desc__test", title: "title__test", link: "link__test", img: "img__test"},
      {id: 2, name: "test__2", desc: "desc__test", title: "title__test", link: "link__test", img: "img__test"},
      {id: 3, name: "test__3", desc: "desc__test", title: "title__test", link: "link__test", img: "img__test"},
      {id: 4, name: "test__4", desc: "desc__test", title: "title__test", link: "link__test", img: "img__test"},
    ],
  };  


  
render() {
  return (
  <>
  <Header/>
  <Frame><Contents contents={this.state.contents}/></Frame>
  </>
  );
}
}

export default App;
