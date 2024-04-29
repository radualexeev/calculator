export default function Button( {value, color, background, border, onClick} ) {
    const handleClick = () => {
        onClick(value)
    }

    return (
        <div className={`button w-button h-button ${background} rounded-md border-b-8 ${border} flex justify-center items-center text-3xl ${color} cursor-pointer hover:shadow-inner hover:shadow-[#79A6BA] select-none`} onClick={handleClick}>
            {value}
        </div>
    );
};