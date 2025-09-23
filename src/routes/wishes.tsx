import type { PageHeaderProps } from "@/components/PageHeader";
import PageHeader from "@/components/PageHeader";
import WishesList from "@/components/WishesList";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wishes")({
  component: RouteComponent,
});

const headerProps: PageHeaderProps = {
  header: "Wishes List",
  description:
    "This is where all the wishes will be displayed. With scroll animation, parallax effects, and more!",
  notation:
    "This component is only responsive available in mobile view, proceed with caution.",
};

function RouteComponent() {
  return (
    <div className="container-wrapper justify-start">
      <PageHeader {...headerProps} />
      <WishesList />
      <div className="h-screen w-full"></div>
    </div>
  );
}
