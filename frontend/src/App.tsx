import React, {useEffect, useState} from 'react'
import './App.css'
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Gallery from "./components/Gallery";
import {Task} from "./components/services/model";
import {fetchAllTasks} from "./components/services/apiServices";

export default function App() {
    const [tasks, setTasks] = useState<Array<Task>>([])

        useEffect(() => {
            fetchAllTasks()
                .then((tasksFromDB:Array<Task>) => setTasks(tasksFromDB))
        }, [])

            return (
            <div>

            <Header/>
            <InputForm/>
            <Gallery tasks={tasks}/>

            </div>
            );
        }



