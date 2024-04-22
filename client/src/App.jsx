import Container from "./components/Container";
import Display from "./components/Display";

export default function App() {
  return (
    <div className="w-screen h-screen bg-slate-400 flex justify-center items-center">
      <Container>
        <Display />
      </Container>
    </div>
  );
};