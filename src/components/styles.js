export const appStyles = {
    container: "min-h-screen bg-orange-100 p-8",
    title: "text-4xl font-bold mb-8 text-center font-['VT323']",
    addButton: "fixed bottom-8 right-8 bg-[#00ff95] text-black p-4 border-2 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] transition-all"
}

export const noteListStyles = {
    gridContainer: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
}

export const noteCardStyles = {
    mainContainer: "bg-[#fff7e6] border-2 border-black rounded-none p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all",
    deleteButton: "p-2 bg-[#ff9090] border-2 border-black hover:bg-[#ff7070] transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px]",
    editButton: "p-2 bg-[#ff90e8] border-2 border-black hover:bg-[#ff70d8] transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px]",
    title: "text-xl font-bold mb-2 font-['VT323']",
    content: "text-gray-800 mb-4 font-['VT323'] text-lg",
    buttonsContainer: "flex justify-end space-x-2 border-t-2 border-black pt-3"
}

export const noteFormStyles = {
    modalOverlay: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4",
    modalContainer: "bg-[#fdfdfd] border-4 border-black rounded-none p-6 w-full max-w-md relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
    closeButton: "absolute top-1 right-2 text-black hover:text-gray-700",
    form: "space-y-6",
    inputBase: "w-full bg-[#fff7e6] border-2 border-black p-2 outline-none focus:bg-white font-['VT323'] text-lg",
    textarea: "w-full bg-[#fff7e6] border-2 border-black p-2 outline-none focus:bg-white font-['VT323'] text-lg min-h-[150px] resize-none",
    errorText: "text-red-500 text-sm mt-1 font-['VT323']",
    submitButton: "w-full bg-[#00ff95] border-2 border-black py-2 px-4 hover:bg-[#00cc78] font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] transition-all",
    errorColor: "border-red-500",
    defaultColor: "border-black"
}
