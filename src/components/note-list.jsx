import NoteCard from './note-card'
import { noteListStyles } from './styles'

export default function NoteList({ notes, onDelete, onEdit }) {
  return (
    <div className={noteListStyles.gridContainer}>
      {notes.map(note => (
        <NoteCard
          key={note.id}
          note={note}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}
