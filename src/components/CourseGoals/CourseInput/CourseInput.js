import React, { useState } from "react";
import './CourseInput.css';

const CourseInput = props=>{
    const [enteredValue,setEnteredValue]=useState('');
    const[isValid,setIsValid]=useState('true');

    const goalInputChangeHandler = event=>{
         setEnteredValue(event.target.value);
    };
    const formsubmitHandler=event=>{
        event.preventDefault();
        if(enteredValue.trim().length===0)
        {
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
    };
    return(
        <form onSubmit={formsubmitHandler}>
            <div className ={`form-control ${!isValid? 'invalid' :''}`}>
                <label>Course Goal</label>
                <input type ="text" onChange={goalInputChangeHandler}/>

            </div>
            <button type="Submit">Add Goal</button>
        </form>
    );
};
export default CourseInput;