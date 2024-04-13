import React, { Component } from "react";
import './style.css'

class FormNote extends Component {

  constructor(props){
    super(props);
    this.title = ""
    this.note = ""

  }

  handlerNewTitle(event){
    this.title = event.target.value
    console.log(this.title)
  }

  handlerNewNote(event){
    this.note = event.target.value
    
  }

  createNote(event){
    event.preventDefault()
    event.stopPropagation()
   this.props.createNote(this.title, this.note)
  }


  render() {
    return (
      <form className="form"
      onSubmit={this.createNote.bind(this)}>
        <h3>Hello... ⋇⊶⊰❣⊱⊷⋇</h3>
        <input className="form-title-input"
               type="text" 
               placeholder="The title of your note :))"
               onChange={this.handlerNewTitle.bind(this)}
        />

        <textarea 
        rows={30}
        placeholder="Tell me..." 
        onChange={this.handlerNewNote.bind(this)} />

        <button className="form-button">Create Note</button>
      </form>
    );
  }
}

export default FormNote;
