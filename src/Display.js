import React from "react";


export default function Display(props) {
    const {children} = props;
    return (
        <h3 className="displayInput">{children}</h3>
    )
}