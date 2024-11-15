import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

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
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-[#fdfdfd] border-4 border-black rounded-none p-6 w-full max-w-md relative
                      shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <button
            onClick={onClose}
            className="absolute top-1 right-2 text-black hover:text-gray-700"
          >
            <X size={20} />
          </button>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Title"
                value={note.title}
                onChange={(e) => {
                  setNote({ ...note, title: e.target.value })
                  if (errors.title) setErrors({ ...errors, title: '' })
                }}
                className={`w-full bg-[#fff7e6] border-2 ${errors.title ? 'border-red-500' : 'border-black'} p-2 outline-none 
                         focus:bg-white font-['VT323'] text-lg`}
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1 font-['VT323']">{errors.title}</p>
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
                className={`w-full bg-[#fff7e6] border-2 ${errors.content ? 'border-red-500' : 'border-black'} p-2 outline-none 
                         focus:bg-white min-h-[150px] resize-none font-['VT323'] text-lg`}
              />
              {errors.content && (
                <p className="text-red-500 text-sm mt-1 font-['VT323']">{errors.content}</p>
              )}
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#00ff95] border-2 border-black py-2 px-4
                       hover:bg-[#00cc78] font-bold uppercase tracking-wider
                       shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                       active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                       active:translate-x-[2px] active:translate-y-[2px]
                       transition-all"
            >
              {initialNote ? 'Update Note' : 'Add Note'}
            </button>
          </form>
        </div>
      </div>
    )
  }
