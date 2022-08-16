import React from "react"

// export const Button = (props)=>{
    export const Button = ({color, label, callme})=>{
    const myColor = `btn btn-${color}`;
    return (<button onClick={callme} className={myColor}>{label}</button>)
    // return React.createElement('button',{
    //     className:'btn btn-primary'
    // },obj.label);
}