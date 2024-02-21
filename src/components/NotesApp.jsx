import React from "react";
import NoteList from "./NoteList";
import { getData } from "../utils/data";
import NoteInput from "./NoteInput";
import ArchivedNoteList from "./ArchivedNoteList";
import NotesSearchBar from "./NoteSearchBar";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getData(),
      searchQuery: ''
    };
    
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    const result = window.confirm("Apakah Kamu Yakin Ingin Menghapus Catatan?");
    if (result) {
      const notes = this.state.notes.filter((note) => note.id !== id);
      this.setState({ notes });
      toast.success("Catatan Berhasil Dihapus!");
    } else {
      toast.success("Hapus Catatan Dibatalkan!");
    }
  }
  
  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString()
          }
        ]
      }
    });
  }

  onArchivedHandler(id) {
    const updatedNotes = this.state.notes.map(note => {
      if (note.id === id) {
        return {
          ...note,
          archived: !note.archived
        };
      }
      return note;
    });
    this.setState({ notes: updatedNotes });
  }

  onSearchHandler(event) {
    const searchQuery = event.target.value;
    this.setState({ searchQuery });
  }

  render(){
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
    );

    return (
      <div className="container py-2 my-3">
        <NoteInput addNote={this.onAddNoteHandler}/>
        <div className="my-4">
          <NotesSearchBar onSearch={this.onSearchHandler}/>
        </div>
        <div>
          <h2 style={{ fontWeight: "900", background: "linear-gradient(to right, #8158BD 0%, #D4BFFF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Catatan Anda</h2>
          {this.state.notes.length === 0 ? 
            <div className="text-light text-center">
              <p className="text-light">Tidak ada catatan</p>
            </div> :
            <NoteList notes={filteredNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchivedHandler}/>
          }
        </div>
        <div className="mt-5">
          <h2 className="text-light" style={{ fontWeight: "900", background: "linear-gradient(to right, #8158BD 0%, #D4BFFF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Arsip</h2>
          {this.state.notes.length === 0 ? 
            <div className="text-light text-center">
              <p className="text-light">Tidak ada catatan</p>
            </div> :
            <ArchivedNoteList notes={filteredNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchivedHandler}/>
          }
        </div>
      </div>
    );
  }
}

export default NotesApp;
