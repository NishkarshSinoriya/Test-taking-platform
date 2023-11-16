import {useState} from "react";
import Question from "./Question";
function Section(props){
    
    const [currentQuestion, setCurrentQuestion] = useState(1);
    
    const setCurrentQuestionHandler = (i) =>{
        setCurrentQuestion(i);
    };
    
    const createQuestionButtonList = (questionList) => {
        let questionButtonList = [];
        for(const i in questionList){
                 questionButtonList.push(<button className="button" key={i} onClick={() => setCurrentQuestionHandler(i)}>{i}</button>);
        }
        return questionButtonList;
    }

    const showCurrentQuestion = ()=>{
        let questionInfo = props.questionList[currentQuestion];

        let questionProps ={
            number: currentQuestion,
            desc: questionInfo.content,
            optionA: questionInfo.optionA,
            optionB: questionInfo.optionB,
            optionC: questionInfo.optionC,
            optionD: questionInfo.optionD
        }
        
        return <Question {...questionProps}/>
    }
    return(
        <>
            <div>{createQuestionButtonList(props.questionList)}</div>
            <div>{showCurrentQuestion()}</div>
        </>
    );
}

export default Section;