import React, {useState} from "react";
import axios from "axios";

export default function InputForm() {

    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const createTask = () => {
        axios.post('https://localhost:8080/api/kanban', {
            task: task,
            description: description,
        }).then(() => {
            setTask('');
            setDescription('')
        })
    }

    return (
        <div className={'inputForm'}>
            <input type="text" placeholder={'Task'} value={task} onChange={ev => setTask(ev.target.value)}/>
            <input type="text" placeholder={'Description'} value={description}
                   onChange={ev => setDescription(ev.target.value)}/>
            <button onClick={createTask}>Save</button>
            {/*<div>{task}</div>
            <div>{description}</div>*/}
        </div>
    )
}