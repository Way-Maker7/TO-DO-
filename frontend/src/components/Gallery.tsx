import React from "react";
import GalleryColumn from "./GalleryColumn";
import {Task} from "./services/model";

interface GalleryProps {
    tasks: Array<Task>
}

export default function Gallery(props: GalleryProps) {

    const openTasks = props.tasks.filter(task => task.status === 'OPEN');
    const tasksInProgress = props.tasks.filter(task => task.status === 'In_PROGRESS');
    const doneTasks = props.tasks.filter(task => task.status === 'DONE');

    return (
        <div className={'gallery'}>


            <GalleryColumn headline="Open" tasks={openTasks}/>
            <GalleryColumn headline="In progress" tasks={tasksInProgress}/>
            <GalleryColumn headline="Done" tasks={doneTasks}/>


        </div>
    )
}