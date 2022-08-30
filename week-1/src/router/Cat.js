import React from "react";
import { Navigate, useParams, Outlet } from "react-router-dom";

const Cat = (props) => {
    const params = useParams();
    console.log(params);
    return (
        <>
            <div>고양이 화면이에요.</div>
            <Outlet />
        </>
    );
};

export default Cat;
