import React, { useEffect, useState } from "react";
import Question from "./Question";
import { CircularProgress } from '@material-ui/core'

function Quiz({name, questions, setQuestions, score, setScore}){


    const [options, setOptions] = useState()
    const [currQues, setCurrQues] = useState(0)

    useEffect(()=>{
        console.log(questions)

        setOptions(questions && handleShuffle([
            questions[currQues]?.correct_answer,
            ...questions[currQues]?.incorrect_answers,
        ]))

    },[questions, currQues])

    const handleShuffle = (optionss) =>{
        return optionss.sort(()=> Math.random() - 0.5);
    }

    console.log(options)

    return(
        <>
         <div className="container mt-5">
            <div className="row">
                <div className="col-md-12 bg-light">
                    <div className="subtitle">
                         <span>Welcome, {name}</span> 
                    </div>

                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            {questions ? (
                                <>
                                    <div className="mainQuiz">
                                    <div className="quizinfo">
                                        <span>Category: {questions[currQues].category}</span>
                                        <span>Score: {score}</span>
                                    </div>
                                    </div>

                                    <Question 
                                        currQues={currQues}
                                        setCurrQues={setCurrQues}
                                        questions={questions}
                                        options={options}
                                        correct={questions[currQues]?.correct_answer}
                                        score={score}
                                        setScore={setScore}
                                        setQuestions={setQuestions}

                                    />
                                </>
                            ) : (
                                <CircularProgress 
                                    style={{margin: 100}}
                                    size={150} 
                                    color="inherit"
                                    thickness={1}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>   

        
        
        </>
    )
}

export default Quiz