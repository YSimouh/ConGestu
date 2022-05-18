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
        <div className="Wrap">
            <div className="list-vragen">
                {Data.map((item, i)=>(
                    <div className="item">
                        <div className="title " onClick={()=>toggle(i)}>
                            <h3>{item.Q}</h3>
                            <span>{select===i?'-':'+'}</span>
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
        A: 'In principe heeft ieder begrip in de gebarentaal een eigen gebaar. Woorden of namen waar nog geen gebaar voor bestaat, worden gespeld met de vingers. Dat heet vingerspellen. Het spellen van een woord wordt gedaan met een handalfabet: een verzameling gebaren',
    },
    {
        Q:'vraag 2',
        A: 'In principe heeft ieder begrip in de gebarentaal een eigen gebaar. Woorden of namen waar nog geen gebaar voor bestaat, worden gespeld met de vingers. Dat heet vingerspellen. Het spellen van een woord wordt gedaan met een handalfabet: een verzameling gebaren',
    },
    {
        Q:'vraag 3',
        A: 'In principe heeft ieder begrip in de gebarentaal een eigen gebaar. Woorden of namen waar nog geen gebaar voor bestaat, worden gespeld met de vingers. Dat heet vingerspellen. Het spellen van een woord wordt gedaan met een handalfabet: een verzameling gebaren',
    },
    {
        Q:'vraag 4',
        A: 'In principe heeft ieder begrip in de gebarentaal een eigen gebaar. Woorden of namen waar nog geen gebaar voor bestaat, worden gespeld met de vingers. Dat heet vingerspellen. Het spellen van een woord wordt gedaan met een handalfabet: een verzameling gebaren',    },
]


