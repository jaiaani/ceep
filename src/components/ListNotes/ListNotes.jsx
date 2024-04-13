import React, { Component } from "react";
import CardNote from "../CardNote";
import './style.css'


class ListNotes extends Component {
  render() {
    return (
      <ul className="list-notes">
        {this.props.notes.map((note, index) => {
          return (
            <li className="item-notes" key={index}>
              <CardNote title={note.title} text={note.text}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListNotes;
 