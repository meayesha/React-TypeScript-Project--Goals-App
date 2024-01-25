import CourseGoal from "./CourseGoals";
import InfoBox from "./InfoBox";
import { type ReactNode } from "react";
import { type CourseGoal as CGoal } from "../App";
type CourseGoalListProps = {
    goals: CGoal[];
    onDeleteGoal: (id: number) => void;
};
export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps){
    if(goals.length === 0)
    { 
        return (
        <InfoBox mode="hint">You gave no course goals yet. Start adding some!!</InfoBox>
        );
    }
    let warningBox: ReactNode;

    if (goals.length >= 5){
        warningBox = (
            <InfoBox mode="warning" severity="high">
                You're collecting too many goals.. Dont put too much on your plate...
            </InfoBox>
        )
    } 
    return (
        <>
        {warningBox}
        <ul>
        {goals.map((goal)=>(
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
          <p>{goal.description}</p>
          </CourseGoal>
          </li>
        ))}
          </ul>
        </>
      )
}