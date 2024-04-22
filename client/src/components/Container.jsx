export default function Container( {children} ) {
    return (
        <div className="w-calculator h-calculator p-4 bg-cyan-200 rounded-xl border-b-8 border-blue-400 grid grid-cols-4 gap-2 place-content-between place-items-center">
            {children}
        </div>
    );
};