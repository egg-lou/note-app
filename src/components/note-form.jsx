import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { noteFormStyles } from './styles'

export default function NoteForm({ onSubmit, onClose, initialNote }) {
    const [note, setNote] = useState({ title: '', content: '' })
    const [errors, setErrors] = useState({})

  
    useEffect(() => {
      if (initialNote) {
        setNote(initialNote)
        setErrors({})
      }
    }, [initialNote])
  
    const validateForm = () => {
      const newErrors = {}
      if (!note.title.trim()) {
        newErrors.title = 'Title is required'
      }
      if (!note.content.trim()) {
        newErrors.content = 'Content is required'
      }
      setErrors(newErrors)
      return Object.keys(newErrors).length === 0
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      if (validateForm()) {
        onSubmit(note)
        setNote({ title: '', content: '' })
        setErrors({})
      }
    }
  
    return (
        <div className={noteFormStyles.modalOverlay}>
        <div className={noteFormStyles.modalContainer}>
          <button
            onClick={onClose}
            className={noteFormStyles.closeButton}
          >
            <X size={20} />
          </button>
          
          <form onSubmit={handleSubmit} className={noteFormStyles.form}>
            <div>
              <input
                type="text"
                placeholder="Title"
                value={note.title}
                onChange={(e) => {
                  setNote({ ...note, title: e.target.value })
                  if (errors.title) setErrors({ ...errors, title: '' })
                }}
                className={`${noteFormStyles.inputBase} ${errors.title ? '' : noteFormStyles.defaultColor}`}
              />
              {errors.title && (
                <p className={noteFormStyles.errorText}>{errors.title}</p>
              )}
            </div>
            
            <div>
              <textarea
                placeholder="Content"
                value={note.content}
                onChange={(e) => {
                  setNote({ ...note, content: e.target.value })
                  if (errors.content) setErrors({ ...errors, content: '' })
                }}
                className={`${noteFormStyles.textarea} ${errors.content ? noteFormStyles.errorColor : noteFormStyles.defaultColor}`}
              />
              {errors.content && (
                <p className={noteFormStyles.errorText}>{errors.content}</p>
              )}
            </div>
            
            <button
              type="submit"
              className={noteFormStyles.submitButton}
            >
              {initialNote ? 'Update Note' : 'Add Note'}
            </button>
          </form>
        </div>
      </div>
    )
  }
