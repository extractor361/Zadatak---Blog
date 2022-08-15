import React from 'react'
import './unos.css';
export default function Unos(props) {
  return (<div style={{display:'flex',flexDirection:'column',padding:'20x',background:'white',padding:'10px',margin:'10px'}}>
    <div className='frame'><label className='label'>Title<input onChange={props.promjena1}
        value={props.title} input name='title'  type='text'/></label>
    <label className='label'>Blog text<input 
    onChange={props.promjena2}
    value={props.text} name='text' type='text'/></label>
    <label className='label'>Author<input
     onChange={props.promjena3}
     value={props.author} name='author'  type='text'/></label>
    
    </div>
    <div className='zadugme'>
    <button onClick={props.submit} className='submit' type='submit'>Submit</button></div>

    </div>
  )
}
