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
    'angular',
    'react & tailwind',
    'vanilla javascript & tailwind'
];

function App() {

    // updates the idea copy (you're going to build a...)
    const [ideaCopyStatus, setIdeaCopyStatus] = useState(false);
    const [idea, setIdea] = useState('');

    // updates the tool copy (and you're going to build it with...)
    const [toolCopyStatus, setToolCopyStatus] = useState(false);
    const [tool, setTool] = useState('');

    // generate random project btn
    const [btn, setBtn] = useState(true)

    const generateProject = () => {
        // removes button from UI
        setBtn(false);

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
            setIdeaCopyStatus(true)
            createRandomIdea();
        }, 100); //interval for switching options

        setTimeout(() => {
            clearInterval(ideaAnimationInterval);
            // select random tool every 50 milliseconds
            const toolAnimationInterval = setInterval(() => {
                setTimeout(() => {
                    setToolCopyStatus(true)
                    createRandomTool();
                }, 1500) // duration until starting to choose tool
            }, 100); //interval for random switching options

            // end animation for tool 
            setTimeout(() => {
                clearInterval(toolAnimationInterval);
            }, 6000); // how long you search for a tool
        }, 6000); // time for duration of choosing an idea

        
        
    }

    return (
        <div className="container">
            { ideaCopyStatus && <p className="idea-copy">You&apos;re going to build a...</p> }
            { idea !== '' && <p className="idea">{idea}</p> }
            { toolCopyStatus && <p className="tool-copy">and you&apos;re going to build it with...</p> }
            { tool !== '' && <p className="tool">{tool}</p> }
            { btn && <button onClick={generateProject}>Generate Random Project</button> }
        </div>
    )
}

export default App;