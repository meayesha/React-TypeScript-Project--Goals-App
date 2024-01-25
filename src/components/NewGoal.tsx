import {useRef, type FormEvent} from 'react';

type NewGoalProps={
    onAddGoal: (goal: string, summary: string) => void;
}

export default function NewGoal({onAddGoal}:NewGoalProps){
    const goal = useRef<HTMLInputElement>(null);
    const summary = useRef<HTMLInputElement>(null);
    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
       const enteredGoal = goal.current!.value;
       const enteredsummary = summary.current!.value ; //we put the exclaimation mark because we know that initially the vlaue is going to be null.

     event.currentTarget.reset();
       onAddGoal(enteredGoal, enteredsummary)

        // new FormData(event.currentTarget);

    }
    return (
        <form onSubmit={handleSubmit}>
        <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref={goal} />
        </p>
        <p>
        <label htmlFor="summart">Short Summary</label>
        <input id="summary" type="text" ref={summary} />
        </p>
        <p>
            <button>Add Goal</button>
        </p>
        </form>
    )
}