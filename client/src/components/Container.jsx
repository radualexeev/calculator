export default function Container( {children} ) {
    return (
        <div className="w-calculator h-calculator p-4 bg-[#95D0EA] rounded-xl border-b-8 border-[#199EE1] grid grid-cols-4 gap-2 place-content-between place-items-center">
            {children}
        </div>
    );
};