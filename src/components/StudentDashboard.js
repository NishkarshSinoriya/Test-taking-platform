import React from "react";
import { useNavigate } from "react-router-dom";
function StudentDashboard(){
    const navigate = useNavigate();
    const navigateToOTP = () => navigate("/online-test-platform");
    return (
        <>
            <div className="main">
                <div className="header">This is Student Dashboard</div>
                <button className="button" onClick={navigateToOTP}>take me to test</button>
            </div>
        </>
    );
}

export default StudentDashboard;