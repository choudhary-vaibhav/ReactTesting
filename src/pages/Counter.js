import { useState } from "react";
import { Button } from "../components/Button"
import { Output } from "../components/Output";
// Functional Component
// Hook
export const Counter = ()=>{
    let [count, setCount] = useState(0);
    const plus = ()=> setCount(count+1);
       // ++count; // count = count + 1
        //count + 1;
        //console.log('Plus  call ', count);
    
    // const minus = ()=>{
    //    // --count;
    //     //console.log('Minus call ', count);
    // }
    const minus = ()=>setCount(count-1);

    
    return (<div className="container">
        <br/>
        <Output message="Counter App"/>
        <Button callme={plus} color='primary' label="+"/>
        
    &nbsp;
    <Button callme = {minus} color='danger' label="-"/>
    <Output message={count}/>
    </div>);
}