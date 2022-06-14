import React from 'react';
import "../design/courseLevel2.css";
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


const afbeeldingList = [
    { key: 'a', img: a },
    { key: 'b', img: b },
    { key: 'c', img: c },
    { key: 'd', img: d },
    { key: 'e', img: e },
    { key: 'f', img: f },
    { key: 'g', img: g },
    { key: 'h', img: h },
    { key: 'o', img: o },
    { key: 'q', img: q },
    { key: 'r', img: r },
    { key: 's', img: s },
    { key: 'u', img: u },
    { key: 'v', img: v },
    { key: 'x', img: x },
    { key: 'y', img: y },
    { key: 'z', img: z },
];

let saveTemp = '';

const RandomImage = () => {
    const random = Math.floor(Math.random() * afbeeldingList.length);
    const temp = afbeeldingList[random];
    if (saveTemp == '') {
        saveTemp = temp.key;
    }
    else {
    }
    const image = React.useRef(temp.img);
    return <img className="img_course2 "src={image.current} alt={temp.key} />;
}

class CourseLevel2 extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          antwoord: '',
          answersCorrect: 0
      };

      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ antwoord: event.target.antwoord });
        if (this.state.antwoord === saveTemp) {
            this.setState({ answersCorrect: answersCorrect + 1})
            alert("Correct");
            
        }
        else {
            alert("False");
        }
        console.log(saveTemp);
        event.preventDefault();
    }

    render() {

        return (
            <>
                <div className="course2_container">

                    <div className="afbeelding_course2">
                        <RandomImage />
                        {console.log(saveTemp)}
                    </div>

                    <div>
                      <form onSubmit={this.handleSubmit}>
                        <label>
                          Vul het goede antwoord in:
                          <input type="answerCourse2" name="antwoord"/>
                        </label>
                        <input type="submit" value="Submit" />
                      </form>
                    </div>
                </div>
            </>

    )
    }

}

export default CourseLevel2;
