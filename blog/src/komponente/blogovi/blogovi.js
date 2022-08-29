import React from 'react'
import './blogovi.css';

function Blogovi(props) {
  if(props.niz.length===0){
    return(<div style={{textAlign:'center'}}>No blogs available</div>)
  }
  else{
  return (<div style={{width:'100%',display:'flex',flexWrap:'wrap',position:'relative'}}>
    
    
    {
    
    props.niz.map((blog,index)=>{
      return(
      <div key={index.toString()} kljuc={index} className='clanak'>
        <button onClick={props.brisi} style={{position:'absolute',top:'25px',right:'5px',border:'none',background:'white',cursor:'pointer',fontSize:'1.25rem'}}>✕</button>
      <h3>{blog.naziv}</h3>
      <p className='paragraf'>{blog.tekst}</p>
      <p>posted by {blog.autor}</p>
      <p>Datum {blog.datum}</p>

      </div>)})}</div>
  )
}}

export default Blogovi