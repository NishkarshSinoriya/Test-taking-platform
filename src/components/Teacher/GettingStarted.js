import { useState } from "react";
import TeacherSection from "./TeacherSection";
import { teacherTestData } from "../../utils/TeacherDashboardUtils";
function GettingStarted(){
    
    const [noOfSections, setNoOfSections] = useState(0);

    const noOfSectionsHandler = (num) =>{
        setNoOfSections(num);
    }
    
    const showSectionButtons = () =>{
        let sectionsList = [];
        for(let i=0; i<noOfSections; i++){
            sectionsList.push(<button onClick ={() => setClickedSectionHandler(i+1)} key={i+1} className="button">section{i+1}</button>);
        }
        return sectionsList;
    }

    const [clickedSection, setClickedSection] = useState(0);

    const setClickedSectionHandler = (index) => {
        setClickedSection(index);
    }

    const showCurrentClickedSection = () =>{
        if(clickedSection !== 0){
            return <TeacherSection key={clickedSection} sectionId = {clickedSection} />;
        }
    }

    const saveTestName = (name) =>{
        teacherTestData.testName = name;
        localStorage.setItem('testName',JSON.stringify(name));
    }

    

    return (
        <>
            <div className="main">
                <div className="header">Basic criteria for creating test</div>
            </div>

            <div>Test Name: <input id="name" onChange={()=>saveTestName(document.getElementById("name").value)} 
                placeholder="write test name...." value={JSON.parse(localStorage.getItem('testName'))}/>
            </div>
            <div>Number of sections: <input id="num" 
                onChange={() => noOfSectionsHandler(document.getElementById("num").value)} type="number"/>
            </div>
            <div>{showSectionButtons()}</div>
            <div>{showCurrentClickedSection()}</div> 

        </>
    );
};

export default GettingStarted;