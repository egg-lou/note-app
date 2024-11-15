import { useState } from 'react'
import NoteList from './components/note-list'
import NoteForm from './components/note-form'
import { Plus } from 'lucide-react'

function App() {
  const [notes, setNotes] = useState([])
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
    <div className="min-h-screen bg-orange-100 p-8">
     <h1 className="text-4xl font-bold mb-8 text-center font-['VT323']">Scribbly</h1>
      
      <button
  onClick={() => setIsModalOpen(true)}
  className="fixed bottom-8 right-8 bg-[#00ff95] text-black p-4 
             border-2 border-black rounded-none
             shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
             hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
             active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
             active:translate-x-[2px] active:translate-y-[2px]
             transition-all"
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
