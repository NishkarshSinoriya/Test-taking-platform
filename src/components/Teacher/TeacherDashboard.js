import { useNavigate } from "react-router-dom";
function TeacherDashboard(){
    const navigate = useNavigate();
    const gettingStartedPage = () => navigate("/getting-started");
    return (
        <>
            <div className="main">
                <div className="header">Welcome to  Teacher Dashboard !!</div>
                <button className="button" onClick={gettingStartedPage}>start creating test</button>
            </div>
        </>
    );
}

export default TeacherDashboard;