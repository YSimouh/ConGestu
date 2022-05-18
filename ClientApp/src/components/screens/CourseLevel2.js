import React from 'react';
import a from '../afbeeldingen/a.png';
import b from '../afbeeldingen/b.png';
import c from '../afbeeldingen/c.png';
import d from '../afbeeldingen/d.png';

const afbeeldingList = [
    { key: 'a', img: a },
    { key: 'b', img: b },
    { key: 'c', img: c },
    { key: 'd', img: d }
    ];
let saveTemp = '';

const RandomImage = () => {
    const random = Math.floor(Math.random() * afbeeldingList.length);
    const temp = afbeeldingList[random];
    saveTemp = temp.key;
    const image = React.useRef(temp.img);
    return <img src={image.current} alt={temp.key} />;
}

class CourseLevel2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        antwoord: '',
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({ antwoord: event.target.value });
    }

    handleSubmit(event) {
        if (this.state.antwoord === saveTemp) {
            alert('A answer was submitted: ' + this.state.antwoord + ' is correct!');
        }
        else {
            alert('A answer was submitted: ' + this.state.antwoord + ' is wrong!');
        }
      event.preventDefault();
    }

    render() {

        return (
        <>
            <div className="afbeelding">
                    <RandomImage />
            </div>

            <div>
              <form onSubmit={this.handleSubmit}>
                <label>
                  Enter the correct answer:
                  <input type="text" value={this.state.antwoord} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
              </form>
            </div>
        </>
    )
    }

}

export default CourseLevel2;
