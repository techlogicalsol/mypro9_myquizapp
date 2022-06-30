import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Quiz from './Components/Quiz';
import Result from './Components/Result';

function App() {

  const [name, setName] = useState("")
  const [score, setScore] = useState(0)
  const [questions, setQuestions] = useState()


  const fetchQuestions = async (category = "", difficulty = "" )=>{
    const {data} = await axios.get(
      `https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    console.log(data)
    setQuestions(data.results)
  }

  return (
    <BrowserRouter>
        <NavBar />
  
    <Routes>

      <Route path="/" element={
      <Home 
        name={name}
        setName={setName}
        fetchQuestions={fetchQuestions}
      />
      
      } />

      <Route path="/quiz" element={
      
      <Quiz 
        name={name}
        questions={questions}
        setQuestions={setQuestions}
        score={score}
        setScore={setScore}
      />
      
      } />

      <Route path="/result" element={
      
      <Result 
        score={score}
        name={name}
      />
      
      } />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
