import './App.css'
import Nav from './Components/Nav/Nav';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import axios from "axios";
import { useEffect,useState } from "react";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params ={
  api_key : '1e0a1a7d5843b2eb137aa86ec3b3c5b8'
};


const App= () => {
  return <div className='a'>
    <Nav className='n'></Nav>
    <Header className='h' ></Header>
    <Content className='c'></Content>
  </div>
};

export default App;

