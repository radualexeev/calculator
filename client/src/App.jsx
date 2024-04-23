import React from "react";
import Container from "./components/Container";
import Display from "./components/Display";
import Button from "./components/Button";

export default function App() {
  return (
    <div className="w-screen h-screen bg-slate-400 flex justify-center items-center">
      <Container>
        <Button value={"C"} background={"bg-[#FD9EA9]"} color={"text-[#FFFFFF]"} border={"border-[#FD7A89]"}/>
        <Display />
        <Button value={"7"} background={"bg-[#FFFFFF]"} color={"text-[#9ED2E9]"} border={"border-[#79A6BA]"}/>
        <Button value={"8"} background={"bg-[#FFFFFF]"} color={"text-[#9ED2E9]"} border={"border-[#79A6BA]"}/>
        <Button value={"9"} background={"bg-[#FFFFFF]"} color={"text-[#9ED2E9]"} border={"border-[#79A6BA]"}/>
        <Button value={"+"} background={"bg-[#FFF0F5]"} color={"text-[#9ED2E9]"} border={"border-[#79A6BA]"}/>
        <Button value={"4"} background={"bg-[#FFFFFF]"} color={"text-[#9ED2E9]"} border={"border-[#79A6BA]"}/>
        <Button value={"5"} background={"bg-[#FFFFFF]"} color={"text-[#9ED2E9]"} border={"border-[#79A6BA]"}/>
        <Button value={"6"} background={"bg-[#FFFFFF]"} color={"text-[#9ED2E9]"} border={"border-[#79A6BA]"}/>
        <Button value={"-"} background={"bg-[#FFF0F5]"} color={"text-[#9ED2E9]"} border={"border-[#79A6BA]"}/>
        <Button value={"1"} background={"bg-[#FFFFFF]"} color={"text-[#9ED2E9]"} border={"border-[#79A6BA]"}/>
        <Button value={"2"} background={"bg-[#FFFFFF]"} color={"text-[#9ED2E9]"} border={"border-[#79A6BA]"}/>
        <Button value={"3"} background={"bg-[#FFFFFF]"} color={"text-[#9ED2E9]"} border={"border-[#79A6BA]"}/>
        <Button value={"/"} background={"bg-[#FFF0F5]"} color={"text-[#9ED2E9]"} border={"border-[#79A6BA]"}/>
        <Button value={"0"} background={"bg-[#FFFFFF]"} color={"text-[#9ED2E9]"} border={"border-[#79A6BA]"}/>
        <Button value={"."} background={"bg-[#FFFFFF]"} color={"text-[#9ED2E9]"} border={"border-[#79A6BA]"}/>
        <Button value={"="} background={"bg-[#F1FF98]"} color={"text-[#9ED2E9]"} border={"border-[#9DA858]"}/>
        <Button value={"x"} background={"bg-[#FFF0F5]"} color={"text-[#9ED2E9]"} border={"border-[#79A6BA]"}/>
      </Container>
    </div>
  );
};