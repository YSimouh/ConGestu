import React,{useState} from 'react';

import '../design/CardInfo.css'


function ReadMore({children , number = 100}){
    const text = children;
    const [isShow, setIsShowLess] = useState(true);
    const result = isShow ? text.slice(0,210) : text;
    function toggleIsShow(){
        setIsShowLess(!isShow);
    }
    return (
        <div>
            {result}
            <button className='btn-read' onClick={toggleIsShow}>
            {isShow ? '>>>Read More' : '<<<Read Less'}
            </button>
        </div>
            

    )
}
function CardInfo({title,imageUrl,body}) {
  return (
    <div className='card-container'>
        <div className='image-container-info'
        style={{
            backgroundImage: 'url('+imageUrl+')',
            backgroundSize: "cover",
            }}
        >
            {/* <img src={imageUrl} alt=''/> */}
        </div>
        <div className='card-content'>
            <div className='card-title'>
                <h3 className='card-title' >{title}</h3>
            </div>
            <div className='card-body'>
                <ReadMore className="read-btn">{body}</ReadMore>
                
            </div>
            
        </div>
        
    </div>
  )
}

export default CardInfo;
