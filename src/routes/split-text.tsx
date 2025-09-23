import PageHeader, { type PageHeaderProps } from "@/components/PageHeader";
import SplitText from "@/components/SplitText";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/split-text")({
  component: RouteComponent,
});

const headerProps: PageHeaderProps = {
  header: "Split Text Animation",
  description:
    "This page demonstrates text splitting and animation using motion libraries.",
  notation:
    "This component is only responsive available in mobile view, proceed with caution.",
};

function RouteComponent() {
  return (
    <div className="container-wrapper justify-start">
      <PageHeader {...headerProps} />
      <SplitText />
      <div className="h-[20vh]"></div>
    </div>
  );
}
