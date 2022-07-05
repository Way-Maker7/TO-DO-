import axios, {AxiosResponse} from "axios";
import {Task} from "./model";

export function fetchAllTasks(){
    return axios.get('https://localhost:8080/api/kanban')
        .then((response: AxiosResponse<Array<Task>, any>) => response.data)
}

export function createTask(task: Task){

    return axios.post('https://localhost:8080/api/kanban', task)
}