export default function Button( {value} ) {
    return (
        <div className="w-button h-button bg-[#FFFFFF] rounded-md border-b-8 border-[#79A6BA] flex justify-center items-center text-3xl text-[#79A6BA] cursor-pointer hover:shadow-inner hover:shadow-[#79A6BA] select-none">
            {value}
        </div>
    );
};