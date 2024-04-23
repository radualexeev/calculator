export default function Button( {value, color, background, border} ) {
    console.log(background)
    return (
        <div className={`w-button h-button ${background} rounded-md border-b-8 ${border} flex justify-center items-center text-3xl ${color}`}>
            {value}
        </div>
    );
};


// blue #199EE1 border container
// rose #FD9EA9 #FD7A89
// for +-/* #FFF0F5 - 
// #7DA8BA - #658695
// #F1FF98 - #9DA858