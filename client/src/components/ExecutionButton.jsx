export default function ExecutionButton( {value} ) {

    return (
        <div className={`button w-button h-button bg-[#FFF0F5] rounded-md border-b-8 border-[#79A6BA] flex justify-center items-center text-3xl text-[#79A6BA] cursor-pointer hover:shadow-inner hover:shadow-[#79A6BA] select-none`}>
            {value}
        </div>
    );
};