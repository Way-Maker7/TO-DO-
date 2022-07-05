import React from "react";
import GalleryColumn from "./GalleryColumn";
import {Task} from "./services/model";

interface GalleryProps{
    tasks: Array<Task>
}

export default function Gallery(props: GalleryProps) {

    return (
        <div className={'gallery'}>


           <GalleryColumn/>


        </div>
    )
}