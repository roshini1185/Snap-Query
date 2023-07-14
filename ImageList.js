import React from 'react';
import './Global.css';

const ImageList=(props)=>{
  const images=  props.list.map((image)=>{
        return <div className="image-wrapper" key={image.id}><img className="ui small image "  src={image.webformatURL} alt="roshini"/></div>
  })
   return( 
    <div className="image-container">
       { images}
    </div>
   )
}
export default ImageList;