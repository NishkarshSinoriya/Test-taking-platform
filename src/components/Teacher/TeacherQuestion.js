function TeacherQuestion(props){
    
    return (
        <>
            <div className="question">
                <div className="description">
                    {props.questionId}.Question description 
                    <textarea className="textarea"></textarea>
                </div>
                <div className="options">
                    <div className="option">Option A <input className="input"></input></div>
                    <div className="option">Option B <input className="input"></input></div>
                    <div className="option">Option C <input className="input"></input></div>
                    <div className="option">Option D <input className="input"></input></div>
                    <div className="option"> Correct answer <input className="input"></input></div>
                </div>
                <button className="button">save</button>
            </div>
        </>
    );
}

export default TeacherQuestion;
