export default function Button( {value} ) {
    return (
        <div className="w-button h-button bg-orange-300 rounded-md border-b-4 border-red-900 flex justify-center items-center">
            {value}
        </div>
    );
};