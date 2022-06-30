import React, { useState } from "react";
import Header from "./Header";
import Categories from './Categories';
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import ErrorMsg from "./ErrorMsg";

function Home({name, setName, fetchQuestions}){

    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [error, setError] = useState(false)

    const navigate = useNavigate() 

    const handleSubmit = () =>{
      if(!category || !difficulty || !name){
        setError(true)
        return;
      
      }else{
        setError(false)
        fetchQuestions(category, difficulty)
        navigate('/quiz')
      }
    }

    return(
        <>

<div className="container-fluid main_Container">
  
  <div className="bg_img">
  <Header />
    <div className="myform">
   
    {error && <ErrorMsg>Please Fill all the fields</ErrorMsg> }

  <input 
    type="text" 
    id="fname" 
    name="firstname" 
    placeholder="Enter your name" 
    onChange={(e)=> setName(e.target.value)}
  />


  <label htmlFor="Select Category">Select Category</label>
 
  <select
    value={category}
    onChange={(e)=> setCategory(e.target.value)}
  >
  {Categories.map((cat)=>(
    <option key={cat.category} value={cat.value}>
      {cat.category}
    </option>
    ))}

  </select>


  <label htmlFor="Select Difficulty">Select Difficulty</label>
  <select
    value="difficulty"
    onChange={(e)=> setDifficulty(e.target.value)}
  >
    <option value=""></option>
    <option value="easy">Easy</option>
    <option value="medium">Medium</option>
    <option value="hard">Hard</option>
  </select>

  
  <button 
    className="submitBtn" 
    onClick={handleSubmit}
  >
    Start Quiz
  </button>

  </div>
  
</div>
</div>
            
            

<Footer />
        
        
        </>
    )
}

export default Home