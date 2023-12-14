import { useState } from "react";

const ideas = [
    "Personal Portfolio Website",
    "To-Do List App",
    "Weather App",
    "Expense Tracker",
    "Blog Platform",
    "Recipe Book",
    "Chat Application",
    "E-commerce Website",
    "Book Recommendation Website",
    "Calendar/Event Scheduler",
    "Music Player",
    "Quiz Game",
    "Fitness Tracker",
    "Job Board",
    "Real-time Collaboration Tool",
    "Currency Converter",
    "Social Media Dashboard",
    "Issue Tracker",
    "Online Code Editor",
    "Location-based Reminder App"
  ];

const tools = [
    'vanilla javascript',
    'react',
    'vue',
    'svelte',
    'angular'
];

function App() {

    const [idea, setIdea] = useState('');
    const [tool, setTool] = useState('');

    const generateProject = () => {

        // function for selecting random idea
        const createRandomIdea = () => {
            let ranIdea = Math.floor(Math.random() * ideas.length);
            setIdea(ideas[ranIdea]);
        }

        // function for selecting random tool
        const createRandomTool = () => {
            let ranTool = Math.floor(Math.random() * tools.length);
            setTool(tools[ranTool]);
        }

        // select random idea every 50 milliseconds
        const ideaAnimationInterval = setInterval(() => {
            createRandomIdea();
        }, 50);

        // select random tool every 50 milliseconds
        const toolAnimationInterval = setInterval(() => {
            createRandomTool();
        }, 50);

        // end animation for idea
        setTimeout(() => {
            clearInterval(ideaAnimationInterval);
        }, 5000);

        // end animation for tool 
        setTimeout(() => {
            clearInterval(toolAnimationInterval);
        }, 10000);
        
    }

    return (
        <div className="container">
            <p>{idea}</p>
            <p>{tool}</p>
            <button onClick={generateProject}>generate</button>
        </div>
    )
}

export default App;