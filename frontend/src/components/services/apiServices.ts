import axios from "axios";

export function fetchAllTasks(){
    return axios.get('https://localhost:8080/api/kanban')
}