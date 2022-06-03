import { HandGest,poseParameters } from 'hand-it';
//import { poseParameters } from '../parts/parameters';
import React,{useState} from 'react';
import '../design/gesture.css'


function gesturescreen() {
	const [gest,setgest] = useState('')
	
		poseParameters.pose1 ="a";
		poseParameters.pose2 = "b";
		poseParameters.pose3 = "c";
		poseParameters.pose4 = "d";
		poseParameters.pose5 = "e";
		poseParameters.pose6 = "f";
		poseParameters.pose7 = "g";
		poseParameters.pose8 = "h";
		poseParameters.pose9 = "o";
		poseParameters.pose10 = "q";
		poseParameters.pose11 = "r";
		poseParameters.pose12 = "s";
		poseParameters.pose13 = "u";
		poseParameters.pose14 = "v";
		poseParameters.pose15 = "x";
		poseParameters.pose16 = "y";
		poseParameters.pose17 = "z";
		poseParameters.classifySpeed= 300;
		poseParameters.webcamWidth= 640;
		poseParameters.webcamHeight= 480;
	
		poseParameters.pose1Action= () => {
			console.log("a is working");
			setgest('A')
		}
		poseParameters.pose2Action= () => {
			console.log("b is working");
			setgest('B')
		}
		poseParameters.pose3Action= () => {
			setgest('C')
			console.log("c is working");
		}
		poseParameters.pose4Action= () => {
			setgest('D')
			console.log("d is working");
		}
		poseParameters.pose5Action= () => {
			setgest('E')
			console.log("e is working");
		}
		poseParameters.pose6Action= () => {
			setgest('F')
			console.log("f is working");
		}
		poseParameters.pose7Action= () => {
			setgest('G')
			console.log("g is working");
		}
		poseParameters.pose8Action= () => {
			setgest('H')
			console.log("h is working");
		}
		poseParameters.pose9Action= () => {
			setgest('O')
			console.log("o is working");
		}
		poseParameters.pose10Action= () => {
			setgest('Q')
			console.log("q is working");
		}
		poseParameters.pose11Action= () => {
			setgest('R')
			console.log("r is working");
		}
		poseParameters.pose12Action= () => {
			setgest('S')
			console.log("s is working");
		}
		poseParameters.pose13Action= () => {
			setgest('U')
			console.log("u is working");
		}
		poseParameters.pose14Action= () => {
			console.log("v is working");
			setgest('v')
		}
		poseParameters.pose15Action= () => {
			setgest('X')
			console.log("x is working");
		}
		poseParameters.pose16Action= () => {
			setgest('Y')
			console.log("y is working");
		}
		poseParameters.pose17Action= () => {
			setgest('Z')
			console.log("z is working");
		};
	return (
		<div className="gesture_container">
			<HandGest poseParameters={poseParameters} />
			{!gest=='' ? <div className='transcriptbox'>
				{gest}
			</div> : <></>}
		</div>
		)
}

export default gesturescreen;