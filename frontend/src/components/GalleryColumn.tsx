import React from "react";
import GalleryCard from "./GalleryCard";
import {Task} from "./services/model";

interface GalleryColumnProps{
    headline: string;
    tasks: Array<Task>
}
export default function GalleryColumn(props: GalleryColumnProps) {

    return (
        <div className={'GalleryColumn'}>
           <h3>{props.headline}</h3>
            <div>
                <p>Task</p>
                <p>Beschreibung</p>
                <button>ok</button>
                <button>ok</button>
                <button>ok</button>

            </div>
        </div>

)

}