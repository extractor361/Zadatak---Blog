import Blogovi from "./komponente/blogovi/blogovi";
import Unos from "./komponente/unos/unos";
import "./App.css";

import React, { Component } from 'react'

export default class Blog extends Component {
  constructor(props){
super(props);
this.state={
  blogovi:[{naziv:"Inicijalni1",tekst:'"At vero eos nditiis prri sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."',autor:'Darko'},
  {naziv:"Inicijalni2",tekst:'"At vero eos et accustque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."',autor:'Janko'},{
  naziv:"Inicijalni3",tekst:'"At vero eos et accusamus m delias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."',autor:'Marko'}],
naziv:"",
tekst:"",
autor:""}
  }

  //event listeneri za polja
  promjena1=(event)=>{
    let x=event.target.value;
    this.setState({naziv:x});}
      //event listeneri za polja

promjena2=(event)=>{
    let x=event.target.value;
    this.setState({tekst:x});}
      //event listeneri za polja

  promjena3=(event)=>{
    let x=event.target.value;
    this.setState({autor:x});
    }
    //Event na dugme za brisanje pojedinacnih clanaka
   brisi=(event)=>{
   let kljuc=event.target.parentElement.getAttribute("kljuc");
   let niz=[...this.state.blogovi];
   console.log(niz)
for(let i=0;i<niz.length;i++){
if(i==kljuc){
  console.log(niz.splice(i,1))
  break;};};
this.setState({blogovi:niz});
   }
    submit=()=>{
      if(this.state.naziv=='' || this.state.tekst=='' || this.state.autor==''){
        alert('molimo vas popunite sva polja');
      }
      else{
      let noviniz=[...this.state.blogovi];
      noviniz.push({naziv:this.state.naziv,tekst:this.state.tekst,autor:this.state.autor,id:this.state.blogovi.length+1});
      this.setState({blogovi:noviniz});
    }}
  render() {
    return (
      <div style={{display:'flex',justifyContent:'center'}}>
        <div className="glavnidiv">
        <Unos  submit={this.submit} promjena1={this.promjena1} promjena2={this.promjena2}  promjena3={this.promjena3}
        title={this.state.naziv} text={this.state.tekst} author={this.state.autor}
        />
        <div className="vju">
        <Blogovi brisi={this.brisi} niz={this.state.blogovi} />

        </div></div>

      </div>
    )
  }
}
