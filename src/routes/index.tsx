import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="container-wrapper">
      <div className="flex max-w-[80%] flex-col items-center justify-center gap-4 w-full p-4">
        <h1 className="text-cherry text-center font-serif text-5xl md:text-6xl font-bold text-wrap uppercase md:max-w-[80%]">
          This is a <i>visualization</i> of wedding app animations.
        </h1>
        <p className="text-md text-xl font-light">
          All credit go to <b className="font-medium">Phạm Leos</b>
        </p>
      </div>
    </div>
  );
}
