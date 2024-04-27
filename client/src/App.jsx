import React, { useState } from "react";
import Container from "./components/Container";
import Display from "./components/Display";
import Button from "./components/Button";

export default function App() {
  const [displayData, setDisplayData] = useState("0")
  // const [acumulator, setAcumulator] = useState("")
  // const [currentNumber, setCurentNumber] = useState("")

  const handleClick = (any) => {
    const operator = ["+", "-", "/", "*", "="]
    
    if (any === "C") {
      setDisplayData("0")
    }
    
    if (!operator.includes(any)) {
      handleChange(any)
    } 

  }

  const handleChange = (any) => {
    if (testRegex(displayData) && displayData.at(0) === "0") {
      setDisplayData(any);
    } else {
      setDisplayData(displayData + any);
    }
  }

  const testRegex = (input) => {
    const regex = /^[1-9]\d{0,6}(?:\.\d{0,6})?$/
    return regex.test(input)
  }

  return (
    <div className="w-screen h-screen bg-slate-400 flex justify-center items-center">
      <Container>
        <Button value={"C"} background={"bg-[#FD9EA9]"} color={"text-[#FFFFFF]"} border={"border-[#FD7A89]"} onClick={handleClick}/>
        <Display data={displayData} />
        <Button value={"7"} background={"bg-[#FFFFFF]"} color={"text-[#79A6BA]"} border={"border-[#79A6BA]"} onClick={handleClick}/>
        <Button value={"8"} background={"bg-[#FFFFFF]"} color={"text-[#79A6BA]"} border={"border-[#79A6BA]"} onClick={handleClick}/>
        <Button value={"9"} background={"bg-[#FFFFFF]"} color={"text-[#79A6BA]"} border={"border-[#79A6BA]"} onClick={handleClick}/>
        <Button value={"+"} background={"bg-[#FFF0F5]"} color={"text-[#79A6BA]"} border={"border-[#79A6BA]"} onClick={handleClick}/>
        <Button value={"4"} background={"bg-[#FFFFFF]"} color={"text-[#79A6BA]"} border={"border-[#79A6BA]"} onClick={handleClick}/>
        <Button value={"5"} background={"bg-[#FFFFFF]"} color={"text-[#79A6BA]"} border={"border-[#79A6BA]"} onClick={handleClick}/>
        <Button value={"6"} background={"bg-[#FFFFFF]"} color={"text-[#79A6BA]"} border={"border-[#79A6BA]"} onClick={handleClick}/>
        <Button value={"-"} background={"bg-[#FFF0F5]"} color={"text-[#79A6BA]"} border={"border-[#79A6BA]"} onClick={handleClick}/>
        <Button value={"1"} background={"bg-[#FFFFFF]"} color={"text-[#79A6BA]"} border={"border-[#79A6BA]"} onClick={handleClick}/>
        <Button value={"2"} background={"bg-[#FFFFFF]"} color={"text-[#79A6BA]"} border={"border-[#79A6BA]"} onClick={handleClick}/>
        <Button value={"3"} background={"bg-[#FFFFFF]"} color={"text-[#79A6BA]"} border={"border-[#79A6BA]"} onClick={handleClick}/>
        <Button value={"/"} background={"bg-[#FFF0F5]"} color={"text-[#79A6BA]"} border={"border-[#79A6BA]"} onClick={handleClick}/>
        <Button value={"0"} background={"bg-[#FFFFFF]"} color={"text-[#79A6BA]"} border={"border-[#79A6BA]"} onClick={handleClick}/>
        <Button value={"."} background={"bg-[#FFFFFF]"} color={"text-[#79A6BA]"} border={"border-[#79A6BA]"} onClick={handleClick}/>
        <Button value={"="} background={"bg-[#F1FF98]"} color={"text-[#79A6BA]"} border={"border-[#9DA858]"} onClick={handleClick}/>
        <Button value={"*"} background={"bg-[#FFF0F5]"} color={"text-[#79A6BA]"} border={"border-[#79A6BA]"} onClick={handleClick}/>
      </Container>
    </div>
  );
};