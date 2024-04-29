import { useState } from "react";

export default function Display( {onChange} ) {
    const [prev, setPrev] = useState(null)

    const handleChange = (event) => {
        const value = event.target.value;
        const regex = /^[1-9]\d{0,6}(?:\.\d{0,6})?$/;

        if (regex.test(value)) {
            onChange(value)
            setPrev(value)
        } else { 
            event.target.value = prev;
            if (prev.length === 1) {
                event.target.value = ""
                setPrev(null)
            }
        };
    };

    return (
        <input className="display text-white bg-[#7DA8BA] w-display h-display py-2 px-4 text-4xl rounded-md border-t-8 border-t-[#658695] text-right col-span-3 outline-none cursor-context-menu caret-transparent" onChange={handleChange}/>
    );
};