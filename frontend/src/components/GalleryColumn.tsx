import React from "react";
import GalleryCard from "./GalleryCard";
import {Task} from "./services/model";

interface GalleryColumnProps{
    headline: string;
    tasks: Array<Task>;
    onTaskManipulation: () => void;
}

export default function GalleryColumn(props: GalleryColumnProps) {

    const taskComponents = props.tasks.map(task =>
        <div key={task.id}>
            <GalleryCard task={task} onTaskManipulation={props.onTaskManipulation}/>
        </div>
    )


    return (
        <div className={'GalleryColumn'}>
           <h3>{props.headline}</h3>
            {taskComponents}
        </div>

)

}