import React, {useState} from "react";

import {createTask} from "./services/apiServices";



export default function InputForm() {

    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const create = () => {
        createTask({
            task: task,
            description: description,
            status: 'OPEN'
        })
        .then(() => {
            setTask('');
            setDescription('')
        })
    }

    return (
        <div className={'inputForm'}>
            <input type="text" placeholder={'Task'} value={task} onChange={ev => setTask(ev.target.value)}/>
            <input type="text" placeholder={'Description'} value={description}
                   onChange={ev => setDescription(ev.target.value)}/>
            <button onClick={create}>Save</button>
            {/*<div>{task}</div>
            <div>{description}</div>*/}
        </div>
    )
}