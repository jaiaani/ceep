import React, { Component } from 'react';
import ListNotes from "./components/ListNotes/ListNotes.jsx";
import FormNote from "./components/FormNote";
import './style.css'

class App extends Component {

  constructor(){
    super()
    this.notes = []
    this.state = {
      notes:[]
    }
  }

  createNote(title, text){
    const newNote = {title, text}
    const newNotesArray = [...this.state.notes, newNote]
    const newState = {
      notes:newNotesArray }
    
    this.notes.push(newNote)
    this.setState(newState)
    console.log(newState)
  }
  render() { 
    console.log('render')
    return ( 
    <section className='content'>
      <FormNote createNote={this.createNote.bind(this)}/>
      <ListNotes notes={this.state.notes}/>
    </section>);
  }
}

export default App;
