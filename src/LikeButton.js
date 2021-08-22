import React, { useState } from 'react'
import './LikeButton.css'

export default function LikeButton() {

    const [count, setCount] = useState(0)

    function onLikeNote (){
        setCount(count+1);
    }
    return (
        <div>
           <button  className="btn-like" onClick={onLikeNote} >
          <i className="fas fa-heart"></i>Like{count}
          </button>
        </div>
    )
}
