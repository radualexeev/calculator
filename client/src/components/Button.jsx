export default function Button( {value, color, background, border} ) {
    console.log(background)
    return (
        <div className={`w-button h-button ${background} rounded-md border-b-8 ${border} flex justify-center items-center text-3xl ${color} cursor-pointer hover:shadow-inner hover:shadow-[#79A6BA]`}>
            {value}
        </div>
    );
};