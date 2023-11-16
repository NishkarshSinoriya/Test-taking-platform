import { testData } from "../utils/OnlineTestPlatformUtils";
function Question(props){
    console.log(props);
    return(
    <>
        <div className="question">
            <div className="description"> {props.number}. {props.desc} </div>
            <div className="options">
                <div className="option"><input type="radio" value="Momentum"/>{props.optionA}</div>
                <div className="option"><input type="radio" value="Accelaration"/>{props.optionB}</div>
                <div className="option"><input type="radio" value="Inertia"/>{props.optionC}</div>
                <div className="option"><input type="radio" value="Friction"/>{props.optionD}</div>
            </div>
        </div>
    </>
    );
}

export default Question;