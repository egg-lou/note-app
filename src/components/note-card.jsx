import { Trash2, PenSquare } from 'lucide-react'

export default function NoteCard({ note, onDelete, onEdit }) {
  return (
    <div className="bg-[#fff7e6] border-2 border-black rounded-none p-4
                    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                    hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                    transition-all">
      <h3 className="text-xl font-bold mb-2 font-['VT323']">{note.title}</h3>
      <p className="text-gray-800 mb-4 font-['VT323'] text-lg">{note.content}</p>
      
      <div className="flex justify-end space-x-2 border-t-2 border-black pt-3">
        <button
          onClick={() => onEdit(note)}
          className="p-2 bg-[#ff90e8] border-2 border-black
                   hover:bg-[#ff70d8] transition-colors
                   shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                   active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]
                   active:translate-x-[2px] active:translate-y-[2px]"
        >
          <PenSquare size={18} />
        </button>
        <button
          onClick={() => onDelete(note.id)}
          className="p-2 bg-[#ff9090] border-2 border-black
                   hover:bg-[#ff7070] transition-colors
                   shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                   active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]
                   active:translate-x-[2px] active:translate-y-[2px]"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  )
}
