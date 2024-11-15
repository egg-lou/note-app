import { useState } from 'react'
import NoteList from './components/note-list'
import NoteForm from './components/note-form'
import { Plus } from 'lucide-react'
import { useLocalStorage } from './hooks/useLocalStorage'
import { appStyles } from './components/styles'

function App() {
  // const [notes, setNotes] = useState([])
  const [notes, setNotes] = useLocalStorage('notes', [])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingNote, setEditingNote] = useState(null)

  const handleAddNote = (note) => {
    if (editingNote) {
      setNotes(notes.map(n => n.id === editingNote.id ? { ...note, id: editingNote.id } : n))
      setEditingNote(null)
    } else {
      setNotes([...notes, { ...note, id: Date.now() }])
    }
    setIsModalOpen(false)
  }

  const handleDelete = (id) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  const handleEdit = (note) => {
    setEditingNote(note)
    setIsModalOpen(true)
  }

  return (
    <div className={appStyles.container}>
      <h1 className={appStyles.title}>Scribbly</h1>
      
      <button
        onClick={() => setIsModalOpen(true)}
        className={appStyles.addButton}
      >
        <Plus size={24} />
      </button>

      <NoteList notes={notes} onDelete={handleDelete} onEdit={handleEdit} />
      
      {isModalOpen && (
        <NoteForm
          onSubmit={handleAddNote}
          onClose={() => {
            setIsModalOpen(false)
            setEditingNote(null)
          }}
          initialNote={editingNote}
        />
      )}
    </div>
  )
}

export default App
