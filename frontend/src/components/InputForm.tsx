import React, {FormEvent, useState} from "react";

import {createTask} from "./services/apiServices";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;

interface InputFormProps{
    onTaskCreation: () => void;
}

export default function InputForm(props: InputFormProps) {

    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    {/*const create = () => {
        createTask({
            task: task,
            description: description,
            status: 'OPEN'
        })
        .then(() => {
            setTask('');
            setDescription('');
            props.onTaskCreation();
        })
    }*/}
    const submitForm = (ev: FormEvent) => {
        ev.preventDefault();

        createTask({
            task: task,
            description: description,
            status: 'OPEN'
        })
        .then(() => {
            setTask('');
            setDescription('');
            props.onTaskCreation();
        })
    }

    return (
        <div className={'inputForm'}>
            <form onSubmit={submitForm}>
                <input type="text" placeholder={'Task'} value={task} onChange={ev => setTask(ev.target.value)}/>
                <input type="text" placeholder={'Description'} value={description}
                       onChange={ev => setDescription(ev.target.value)}/>
                <input type="submit" value="Save"/>

            </form>


            {/*<div>{task}</div>
            <div>{description}</div>*/}
        </div>
    )
}