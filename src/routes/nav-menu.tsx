import type { PageHeaderProps } from "@/components/PageHeader";
import PageHeader from "@/components/PageHeader";
import { useNavStore } from "@/stores/navStore";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/nav-menu")({
  component: RouteComponent,
});

const headerProps: PageHeaderProps = {
  header: "Nav Bar Menu",
  description:
    "This page demonstrates a simple navigation bar menu using React Router.",
  notation:
    "This component is only responsive available in mobile view, proceed with caution.",
};

function RouteComponent() {
  const { open } = useNavStore();

  return (
    <div className="container-wrapper justify-start">
      <PageHeader {...headerProps} />
      <div className="flex w-full max-w-4xl flex-col items-center py-24">
        <button
          className="bg-maroon/80 hover:bg-maroon rounded px-4 py-2 font-serif text-white hover:cursor-pointer"
          onClick={open}
        >
          Open NavBar
        </button>
      </div>
      <div className="h-[20vh]"></div>
    </div>
  );
}
