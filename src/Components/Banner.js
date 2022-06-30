import React from "react";
import Header from "./Header";
import Categories from './Categories';


function Banner(){
    return(
        <>

<div className="container-fluid main_Container">
  
    <div className="bg_img">
    <Header />
      <form className="container">
     
    <input 
      type="text" 
      id="fname" 
      name="firstname" 
      placeholder="Enter your name" 
    />


    <label htmlFor="Select Category">Select Category</label>
   
    <select id="country" name="country">
    {Categories && Categories.map((cat)=>(
      <option key={cat.category} value={cat.value}>
        {cat.category}
      </option>
      ))}

    </select>


    <label htmlFor="Select Difficulty">Select Difficulty</label>
    <select id="difficulty" name="difficulty">
      <option value="australia"></option>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
      
    <input type="submit" className="btn" value="Start Quiz" />
      
    </form>
    
</div>
</div>
        
        </>
    )
}

export default Banner