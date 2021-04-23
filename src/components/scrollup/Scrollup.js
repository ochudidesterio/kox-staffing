import React,{useState} from 'react'
import {FaArrowCircleUp} from 'react-icons/fa'
import './scroll.css'

const Scrollup=()=> {
  const[showScroll,setShowScroll] = useState(false)
  const checkScrollTop =()=>{
    if(!showScroll && window.pageYOffset>400){
      setShowScroll(true)
    }else if(showScroll && window.pageYOffset<=400){
      setShowScroll(false)
    }
  }
  const scrollToTop=()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  }
  window.addEventListener('scroll',checkScrollTop)
  return (
    <div className="up-btn">
      <FaArrowCircleUp className="scrollTop" onClick={scrollToTop} style={{height:40, display: showScroll ? 'flex' : 'none'}} />
    </div>
    
  )
}

export default Scrollup
