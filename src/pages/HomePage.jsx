import React, { useState , useEffect } from 'react'
import { allProjects } from '../data';
import ProjectCard from '../components/ProjectCard';

function HomePage() {
const [projectList, setProjectList] = useState([]); //empty array for default

//useEffect with asnyc
useEffect( () => {
    fetch(`${import.meta.env.VITE_API_URL}projects`) //the / was already specified in .env
    .then ((results) => {
        return results.json();
    })
    .then ((data) => {
        setProjectList(data)
    });
//    setProjectList(allProjects)
}, []); //setting dependency, empty means when page first load

    return (
        <div>
            {projectList.map((projectData, key) => {
                return <ProjectCard projectData={projectData}/>
            })}
        </div>
    )
}

// function HomePage() {
//     return (
//         <div>
//             {allProjects.map((projectData, key) => {
//                 return <div key={key}>{projectData.title}{projectData.id}</div>
//             })}
//         </div>
//     )
// }

export default HomePage;