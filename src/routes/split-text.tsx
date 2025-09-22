import SplitText from "@/components/SplitText";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/split-text")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container-wrapper justify-start">
      <div className="flex max-w-[80%] flex-col items-center justify-center gap-2 py-4">
        <h1 className="serif-header">Split Text</h1>
        <p className="description">
          This is where the split text animation will be displayed. Demonstrate
          with manual text splitting and motion animations.
        </p>
        <caption className="text-sm font-semibold">
          <span className="text-maroon">[NOTATION!]</span> This component is
          only responsive available in mobile view, proceed with caution.
        </caption>
      </div>
      <SplitText />
      <div className="h-screen w-full"></div>
    </div>
  );
}
