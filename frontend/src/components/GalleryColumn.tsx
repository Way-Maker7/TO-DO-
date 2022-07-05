import React from "react";
import GalleryCard from "./GalleryCard";
import {Task} from "./services/model";

interface GalleryColumnProps{
    headline: string;
    tasks: Array<Task>
}
export default function GalleryColumn(props: GalleryColumnProps) {

    const taskComponents = props.tasks.map(task =>
        (<div>
            <p>{task.task}</p>
            <p>{task.description}</p>
            <button>ok</button>
            <button>ok</button>
            <button>ok</button>

        </div>)
    )


    return (
        <div className={'GalleryColumn'}>
           <h3>{props.headline}</h3>
            {taskComponents}
        </div>

)

}