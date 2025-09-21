import WishesList from "@/components/WishesList";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wishes")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container-wrapper justify-start">
      <div className="flex max-w-[80%] flex-col items-center justify-center gap-2 py-4">
        <h1 className="serif-header">Wishes list</h1>
        <p className="description">
          This is where all the wishes will be displayed. With scroll animation,
          parallax effects, and more!
        </p>
        <caption className="text-sm font-semibold">
          <span className="text-maroon">[NOTATION!]</span> This component
          is only responsive available in mobile view, proceed with caution.
        </caption>
      </div>
      <WishesList />
      <div className="h-screen w-full"></div>
    </div>
  );
}
