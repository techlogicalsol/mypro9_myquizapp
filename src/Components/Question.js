import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMsg from "./ErrorMsg";

function Question({currQues, setCurrQues, questions, options, correct, score, setScore}){
    
    const [selected, setSelected] = useState()
    const [error, setError] = useState(false)

   
    const navigate = useNavigate()

    const handleSelect = (i)=>{
        if(selected === i && selected === correct){
            return "select";
        
        }else if(selected === i && selected !== correct){
            return "wrong"
        
        }else if(i === correct){
            return "select"
        }
    }


    const handleCheck = (i)=>{
        setSelected(i);
        if(i === correct) setScore(score + 1);
        setError(false)
    }

    const handleNext = () =>{
        if(currQues > 8){
            navigate("/result")
        
        }else if(selected){
            setCurrQues(currQues + 1)
            setSelected()
        
        }else{
            setError("Please select an option first");
        }
    }

    const handleQuit =()=>{
        navigate("/")
    }
   
    return(
        <>
                    <div className="mt-5">
                        <div className="questionNum">
                            <h3>Questions: {currQues + 1}</h3>
                            <h6> {questions[currQues]?.question} </h6> 
                        </div>
                        
                        
                        {error && <ErrorMsg>{error}</ErrorMsg> }

                        <div className="options">
                            {options && options.map((i)=>(
                                <button
                                    onClick={()=> handleCheck(i)}
                                    className={`singleOption ${selected && handleSelect(i)}` } 
                                    disabled={selected}
                                >
                                    {i}
                                </button>
                            ))}
                        </div>
                        
                        <div className="buttons">  
                        <button 
                        className="btn btn-danger quit" 
                        onClick={handleQuit}>
                            Quit
                        </button>

                        <button 
                        className="btn btn-primary next"
                        onClick={handleNext}>
                            Next
                        </button>

                        </div>
                        </div>
        
        
        </>
    )
}

export default Question