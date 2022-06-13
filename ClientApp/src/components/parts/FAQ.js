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
            <h1 className="title-Q">Veelgestelde vragen</h1>
                {Data.map((item, i)=>(
                    <div key={i} className="item">
                        <div className="title-faq" onClick={()=>toggle(i)}>
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
        Q:'Kan iedereen gebarentaal leren?',
        A: 'Jazeker! Zoals iedere andere taal, is Nederlandse Gebarentaal aan te leren. Het ligt er alleen vooral aan hoe, en of je het jezelf leuk kan houden. Op onze site vind je een leuke interactieve cursus om gebarentaal te leren en te oefenen.',
    },
    {
        Q:'Hoelang duurt het om gebarentaal te leren?',
        A: 'Dat verschilt enorm per persoon. De één zal het sneller oppikken dan de ander, maar uiteindelijk draait het er voornamelijk om dat je plezier houdt in het leren',
    },
    {
        Q:'Is de cursus op ConGestu gratis?',
        A: 'Ja, de cursus alsmede de vertaalmachine zijn volledig kosteloos.',
    },
    {
        Q:'Door wie is ConGestu gemaakt?',
        A: 'Door een groep enthousiaste studenten op de Hogeschool Rotterdam, in opdracht van Sogeti ten behoeve van "Project B".',
}]


