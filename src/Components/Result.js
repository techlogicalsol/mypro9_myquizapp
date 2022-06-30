import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Result({name, score}){

    const navigate = useNavigate()



    useEffect(()=>{
        if(!name){
            navigate.push("/")
        }
    },[name, navigate])

    return(
        <>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 mx-auto bg-light p-4">
                        <div className="score_card">
                        <div className="display-2">
                            Score Card
                        </div>
                        <span>Final Score: {score}</span>
                        </div>
                       
                       
                       <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        style={{alignSelf: "center", marginTop: 20}}
                        href="/"
                       >
                               Go To HomePage
                       </Button>
                    </div>
                </div>
            </div>
        
        
        </>
    )
}

export default Result