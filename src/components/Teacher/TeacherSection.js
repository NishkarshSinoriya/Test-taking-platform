import { useState } from "react";
import TeacherQuestion from "./TeacherQuestion";

function TeacherSection (props){
    
    const [noOfQuestions, setNoOfQuestions] = useState(0);

    const noOfQuestionsHandler = (n) =>{
        setNoOfQuestions(n);
    }
    const showQuestionButtons = (len) =>{
        let questionsButtonList = [];
        for(let i = 0; i<len;i++){
            questionsButtonList.push(<button key={i+1} onClick = {() =>{setClickedQuestionHandler(i+1)}}
                className="button">Q{i+1}</button>);
        }
        return questionsButtonList;
    }

    const [clickedQuestion, setClickedQuestion] = useState(0);

    const setClickedQuestionHandler = (question) =>{
        setClickedQuestion(question);
    }

    const showCurrentClickedQuestion = () =>{
        if(clickedQuestion !== 0){
            return <TeacherQuestion key = {clickedQuestion} questionId= {clickedQuestion} />
        }
    }

    return(
        <>
            <div className="main">
                <div>Section Number :{props.sectionId}</div>
                <div>Name of the section : <input></input></div>
                <div>Number of Questions: <input id="QNum" 
                onChange={() =>noOfQuestionsHandler(document.getElementById("QNum").value)} type="number"></input></div>
            </div>
            <div>
                {showQuestionButtons(noOfQuestions)}
                {showCurrentClickedQuestion()}
            </div>
        </>
    );
}

export default TeacherSection;