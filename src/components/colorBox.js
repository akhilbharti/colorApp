import React,{useState,useEffect} from 'react'
import './styles/colorBox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import {Link} from 'react-router-dom'



function ColorBox({...props}){
  const [copied, setCopied] = useState(false)

  const changecopystate=()=>{
    setCopied(true)
  }

  useEffect(() => {
    if(!copied)return
    const timer = setTimeout(() => setCopied(false), 1500)
    return () => {
      clearTimeout(timer)
    }
  }, [copied])

const {name, background} = props
  return (
    <div className="color-box" style={{background}}>
      <div style={{background}} className={`copy-overlay ${copied && 'show'}`}/>
      <div className={`copy-msg ${copied && 'show'}`}>
        <h1>copied!</h1>
        <p>{background}</p>
      </div>
      <div className="copy-continer">
        <div className="box-content">
          <span>{name}</span>
        </div>
      <CopyToClipboard text={background} onCopy={changecopystate}>
        <button className='copy-btn'>Copy</button>
    </CopyToClipboard>
      </div>
      <Link to ="/">
      <span className="see-more" onClick={(e)=>e.stopPropagation()}>More</span>
      
      </Link>
    </div>
  )

}
export default ColorBox