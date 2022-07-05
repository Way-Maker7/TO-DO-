import React, {useEffect, useState} from 'react'
import './App.css'
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Gallery from "./components/Gallery";
import axios, {AxiosResponse} from "axios";
import {Task} from "./components/services/model";
import {fetchAllTasks} from "./components/services/apiServices";

export default function App() {
    const [tasks, setTasks] = useState<Array<Task>>([])

        useEffect(() => {
            axios.get('https://localhost:8080/api/kanban')
                .then((response: AxiosResponse<Array<Task>, any>) => setTasks(response.data))
        }, [])

            return (
            <div>

            <Header/>
            <InputForm/>
            <Gallery tasks={tasks}/>

            </div>
            );
        }



