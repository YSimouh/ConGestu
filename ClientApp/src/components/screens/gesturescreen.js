import { HandGest } from 'hand-it';
import { poseParameters } from '../parts/parameters';
import React from 'react';

function gesturescreen() {

	return (
		<div className="gesture_container">
			<HandGest poseParameters={poseParameters} />
		</div>
		)
}

export default gesturescreen;