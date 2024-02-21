import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, onDelete, onArchive}) {
    return (
        <div className="row">
            {
                notes.filter(note => !note.archived).map((note) => (
                    <NoteItem key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        onArchive={onArchive}
                        {...note} />
                ))
            }
        </div>
    );
}


export default NoteList;
