import React from "react";
import Container from "./components/Container";
import Display from "./components/Display";
import Button from "./components/Button";

export default function App() {
  return (
    <div className="w-screen h-screen bg-slate-400 flex justify-center items-center">
      <Container>
        <Button value={"C"}/>
        <Display />
        <Button value={"7"}/>
        <Button value={"8"}/>
        <Button value={"9"}/>
        <Button value={"+"}/>
        <Button value={"4"}/>
        <Button value={"5"}/>
        <Button value={"6"}/>
        <Button value={"-"}/>
        <Button value={"1"}/>
        <Button value={"2"}/>
        <Button value={"3"}/>
        <Button value={"/"}/>
        <Button value={"0"}/>
        <Button value={"."}/>
        <Button value={"="}/>
        <Button value={"x"}/>
      </Container>
    </div>
  );
};