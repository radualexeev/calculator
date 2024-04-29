import Container from "./components/Container";
import Display from "./components/Display";
import Button from "./components/Button";
import ResetButton from "./components/ResetButton";
import CalculateButton from "./components/CalculateButton";
import ExecutionButton from "./components/ExecutionButton";

export default function App() {
  return (
    <div className="w-screen h-screen bg-slate-400 flex justify-center items-center">
      <Container>
        <ResetButton />
        <Display />
        <Button value={"7"} />
        <Button value={"8"} />
        <Button value={"9"} />
        <ExecutionButton value={"+"}/>
        <Button value={"4"} />
        <Button value={"5"} />
        <Button value={"6"} />
        <ExecutionButton value={"-"} />
        <Button value={"1"} />
        <Button value={"2"} />
        <Button value={"3"} />
        <ExecutionButton value={"/"}/>
        <Button value={"0"} />
        <Button value={"."} />
        <CalculateButton />
        <ExecutionButton value={"*"}/>
      </Container>
    </div>
  );
};