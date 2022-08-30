import React from "react";
import {Navigate, useParams } from 'react-router-dom'


const Dog = (props) => {
    const params = useParams();
    console.log(params);
    return (
        <div>강아지 화면이에요.</div>
    )
}

export default Dog;