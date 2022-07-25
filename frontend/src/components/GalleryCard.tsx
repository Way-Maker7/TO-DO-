import React from "react";
import {Task} from "./services/model";
import {deleteTask, demoteTask, promoteTask} from "./services/apiServices";

interface GalleryCardProps{

    task: Task;
    onTaskManipulation: () => void;
}

export default function GalleryCard(props: GalleryCardProps){
    const deleteCard = () =>{
      deleteTask(props.task.id!)
          .then(() => (props.onTaskManipulation))
    }

    const next = () => {
        promoteTask(props.task)
            .then(props.onTaskManipulation)
    }

    const prev = () => {
        demoteTask(props.task)
            .then(props.onTaskManipulation)
    }

    return(
        <div className={'galleryCard'}>
            <p>{props.task.task}</p>
            <p>{props.task.description}</p>
            {props.task.status === 'OPEN' ? <button onClick={deleteCard}>Delete</button> : <button onClick={prev}>Prev</button>}
            {props.task.status === 'DONE' ? <button onClick={deleteCard}>Delete</button> : <button onClick={next}>Next</button>}


        </div>
    )
}