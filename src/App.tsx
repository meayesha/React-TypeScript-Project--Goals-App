// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react';
import CourseGoalList from './components/CourseGoalList.tsx';
import Header from './components/Header.tsx';
import goalsImg from './assets/goals.jpg';
import NewGoal from './components/NewGoal.tsx';
import { StringKeyframeTrack } from 'three/src/Three.js';

export type CourseGoal ={
  title: string;
  description:string;
  id: number;
}
function App() {
  // const [count, setCount] = useState(0)
const [goals, setGoals] = useState<CourseGoal[]>([])
function handleAddGoal(goal: string, summary: string){
setGoals(prevGoals =>{
  const newGoal: CourseGoal ={
    id: Math.random(),
    title : goal,
    description: summary,
  };
  return[...prevGoals, newGoal ]
});
}

//function to delete a to do
function handleDeleteGoal(id: number){
setGoals(prevGoals => prevGoals.filter((goal)=> goal.id !== id));
}
return (
  <main>
  <Header image={{src: goalsImg, alt: 'A list of goals'}}>
    <h1>Your Course Goals</h1>
  </Header>
  {/* <button onClick={handleAddGoal}> Add Goal </button> */}
  <NewGoal onAddGoal={handleAddGoal}/>
  <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
  </main>
)
}
export default App
