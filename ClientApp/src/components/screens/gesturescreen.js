import testGesture from '../Functions/testGesture';
import React from 'react';
import Gallery from 'react-grid-gallery';
import a from '../pictures/sign/A.png';
import b from '../pictures/sign/B.png';
import c from '../pictures/sign/C.png';
import d from '../pictures/sign/D.png';
import e from '../pictures/sign/E.png';
import f from '../pictures/sign/F.png';
import g from '../pictures/sign/G.png';
import h from '../pictures/sign/H.png';
import o from '../pictures/sign/O.png';
import q from '../pictures/sign/Q.png';
import r from '../pictures/sign/R.png';
import s from '../pictures/sign/S.png';
import u from '../pictures/sign/U.png';
import v from '../pictures/sign/V.png';
import x from '../pictures/sign/X.png';
import y from '../pictures/sign/Y.png';
import z from '../pictures/sign/Z.png';

const IMAGES =
    [
        {
            src: a,
            thumbnail: a,
            thumbnailWidth: 320,
            thumbnailHeight: 174,
            caption: "A"
        },
        {
            src: b,
            thumbnail: b,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "B"
        },

        {
            src: c,
            thumbnail: c,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "C",
        },
        {
            src: d,
            thumbnail: d,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "D"
        },
        {
            src: e,
            thumbnail: e,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "E"
        },
        {
            src: f,
            thumbnail: f,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "F"
        },
        {
            src: g,
            thumbnail: g,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "G"
        },
        {
            src: h,
            thumbnail: h,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "H"
        },
        {
            src: o,
            thumbnail: o,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "O"
        },
        {
            src: q,
            thumbnail: q,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Q"
        },
        {
            src: r,
            thumbnail: r,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "R"
        },
        {
            src: s,
            thumbnail: s,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "S"
        },
        {
            src: u,
            thumbnail: u,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "U"
        },
        {
            src: v,
            thumbnail: v,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "V"
        },
        {
            src: x,
            thumbnail: x,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "X"
        },
        {
            src: y,
            thumbnail: y,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Y"
        },
        {
            src: z,
            thumbnail: z,
            thumbnailWidth: 320,
            thumbnailHeight: 212,
            caption: "Z"
        },
    ]

let selectedImg = 'test';
function onClickImage() {
    selectedImg = this.props.item.caption;
    return;
}
function gesturescreen() {

    return (
        <div className="oefen_screen">
            <div className="oefen_afbeeldingen" style={{"maxWidth" : "50%"}}>
                <Gallery images={IMAGES} enableLightbox={false} onClickThumbnail={onClickImage}/>
            </div>
		    <div className="gesture_container">
                {testGesture()}
                <div className="question_container">
                    {selectedImg}
                </div>
            </div>
        </div>
		)
}

export default gesturescreen;