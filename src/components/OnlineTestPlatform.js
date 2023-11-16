import { useState } from "react";
import { testData } from "../utils/OnlineTestPlatformUtils";
import Section from "./Section";

function OnlineTestPlatform(){

    const [currentSection, setCurrentSection] = useState(1);

    const setCurrentSectionHandler = (sectionId) =>{
        setCurrentSection(sectionId);
    }
    const createSectionButtonList = (sections) =>{
        let sectionList =[];
        for(let i = 0; i<sections.length; i++){
            sectionList.push(<button key={i+1} onClick={() => setCurrentSectionHandler(sections[i].sectionId)} 
            className="button">{sections[i].sectionName}</button>)
        }
        return sectionList;
    };

    const showCurrentSection = () =>{
        const sectionList = testData.sections;
        for(let i = 0; i<sectionList.length; i++){
            if(sectionList[i].sectionId === currentSection){
                return <Section key={i+1} {...sectionList[i]} />;
            }
        }
    }

    return (
        <>
            <div className="main">
                <div className="header">Online Test Platform</div>
                <div>{createSectionButtonList(testData.sections)}</div>
                <div>{showCurrentSection()}</div>
            </div>

            
        </>
    );
}

export default OnlineTestPlatform;