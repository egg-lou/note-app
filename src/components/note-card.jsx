import { Trash2, PenSquare } from 'lucide-react'
import { noteCardStyles } from './styles'

export default function NoteCard({ note, onDelete, onEdit }) {

  return (
    <div className={noteCardStyles.mainContainer}>
      <h3 className={noteCardStyles.title}>{note.title}</h3>
      <p className={noteCardStyles.content}>{note.content}</p>
      
      <div className={noteCardStyles.buttonsContainer}>
        <button
          onClick={() => onEdit(note)}
          className={noteCardStyles.editButton}
        >
          <PenSquare size={18} />
        </button>
        <button
          onClick={() => onDelete(note.id)}
          className={noteCardStyles.deleteButton}
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  )
}
