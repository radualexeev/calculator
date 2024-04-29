import { useState } from "react";

import Container from "./components/Container";

export default function App() {

  const [display, setDisplay] = useState();




  // const value = event.target.value;
// const regex = /^[1-9]\d{0,6}(?:\.\d{0,6})?$/;



  return (
    <div className="w-screen h-screen bg-slate-400 flex justify-center items-center">
        <Container>
        <div className="w-button h-button bg-[#FD9EA9] rounded-md border-b-8 border-[#FD7A89] flex justify-center items-center text-3xl text-[#FFFFFF] cursor-pointer hover:shadow-inner hover:shadow-[#79A6BA] select-none">
          C
        </div>

        <input className="text-white bg-[#7DA8BA] w-display h-display py-2 px-4 text-4xl rounded-md border-t-8 border-t-[#658695] text-right col-span-3 outline-none cursor-context-menu caret-transparent" id="display" required />

        <div className="w-button h-button bg-[#FFFFFF] rounded-md border-b-8 border-[#79A6BA] flex justify-center items-center text-3xl text-[#79A6BA] cursor-pointer hover:shadow-inner hover:shadow-[#79A6BA] select-none">
          7
        </div>
        <div className="w-button h-button bg-[#FFFFFF] rounded-md border-b-8 border-[#79A6BA] flex justify-center items-center text-3xl text-[#79A6BA] cursor-pointer hover:shadow-inner hover:shadow-[#79A6BA] select-none">
            8
        </div>
        <div className="w-button h-button bg-[#FFFFFF] rounded-md border-b-8 border-[#79A6BA] flex justify-center items-center text-3xl text-[#79A6BA] cursor-pointer hover:shadow-inner hover:shadow-[#79A6BA] select-none">
            9
        </div>

        <div className="w-button h-button bg-[#FFF0F5] rounded-md border-b-8 border-[#79A6BA] flex justify-center items-center text-3xl text-[#79A6BA] cursor-pointer hover:shadow-inner hover:shadow-[#79A6BA] select-none">
            +
        </div>

        <div className="w-button h-button bg-[#FFFFFF] rounded-md border-b-8 border-[#79A6BA] flex justify-center items-center text-3xl text-[#79A6BA] cursor-pointer hover:shadow-inner hover:shadow-[#79A6BA] select-none">
            4
        </div>
        <div className="w-button h-button bg-[#FFFFFF] rounded-md border-b-8 border-[#79A6BA] flex justify-center items-center text-3xl text-[#79A6BA] cursor-pointer hover:shadow-inner hover:shadow-[#79A6BA] select-none">
            5
        </div>
        <div className="w-button h-button bg-[#FFFFFF] rounded-md border-b-8 border-[#79A6BA] flex justify-center items-center text-3xl text-[#79A6BA] cursor-pointer hover:shadow-inner hover:shadow-[#79A6BA] select-none">
            6
        </div>
        <div className="w-button h-button bg-[#FFF0F5] rounded-md border-b-8 border-[#79A6BA] flex justify-center items-center text-3xl text-[#79A6BA] cursor-pointer hover:shadow-inner hover:shadow-[#79A6BA] select-none">
            -
        </div>
        <div className="w-button h-button bg-[#FFFFFF] rounded-md border-b-8 border-[#79A6BA] flex justify-center items-center text-3xl text-[#79A6BA] cursor-pointer hover:shadow-inner hover:shadow-[#79A6BA] select-none">
            1
        </div>
        <div className="w-button h-button bg-[#FFFFFF] rounded-md border-b-8 border-[#79A6BA] flex justify-center items-center text-3xl text-[#79A6BA] cursor-pointer hover:shadow-inner hover:shadow-[#79A6BA] select-none">
            2
        </div>
        <div className="w-button h-button bg-[#FFFFFF] rounded-md border-b-8 border-[#79A6BA] flex justify-center items-center text-3xl text-[#79A6BA] cursor-pointer hover:shadow-inner hover:shadow-[#79A6BA] select-none">
            3
        </div>
        <div className="w-button h-button bg-[#FFF0F5] rounded-md border-b-8 border-[#79A6BA] flex justify-center items-center text-3xl text-[#79A6BA] cursor-pointer hover:shadow-inner hover:shadow-[#79A6BA] select-none">
            /
        </div>
        <div className="w-button h-button bg-[#FFFFFF] rounded-md border-b-8 border-[#79A6BA] flex justify-center items-center text-3xl text-[#79A6BA] cursor-pointer hover:shadow-inner hover:shadow-[#79A6BA] select-none">
            0
        </div>
        <div className="w-button h-button bg-[#FFFFFF] rounded-md border-b-8 border-[#79A6BA] flex justify-center items-center text-3xl text-[#79A6BA] cursor-pointer hover:shadow-inner hover:shadow-[#79A6BA] select-none">
            .
        </div>

        <div className="w-button h-button bg-[#F1FF98] rounded-md border-b-8 border-[#9DA858] flex justify-center items-center text-3xl text-[#79A6BA] cursor-pointer hover:shadow-inner hover:shadow-[#79A6BA] select-none">
            =
        </div>

        <div className="w-button h-button bg-[#FFF0F5] rounded-md border-b-8 border-[#79A6BA] flex justify-center items-center text-3xl text-[#79A6BA] cursor-pointer hover:shadow-inner hover:shadow-[#79A6BA] select-none">
            *
        </div>
      </Container>
    </div>
  );
};