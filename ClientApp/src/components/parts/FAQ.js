import React from "react";
import '../design/FAQ.css';
import { useState } from "react";





export default function FAQs(){
    const [select, setSelect]=useState(null);
    const toggle =(i)=>{
        if(select == i){
            return setSelect(null);
        }
        setSelect(i)
    }
    return(
        <div className="wrap">
            <div className="list-vragen">
            <h1 className="title-Q">FAQ</h1>
                {Data.map((item, i)=>(
                    <div key={i} className="item">
                        <div className="title" onClick={()=>toggle(i)}>
                            <h3 className="title-Q">{item.Q}</h3>
                            <span className="title-Q">{select===i?'-':'+'}</span>
                        </div>
                        <div className={select===i?'content show':'content'}>{item.A}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}



const Data=[
    {
        Q:'vraag 1',
        A: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        Q:'vraag 2',
        A: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        Q:'vraag 3',
        A: '                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        Q:'vraag 4',
        A: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}]


