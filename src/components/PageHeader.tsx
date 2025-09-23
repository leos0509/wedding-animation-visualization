
export type PageHeaderProps = {
  header: string;
  description: string;
  notation?: string;
};

const PageHeader = ({
  header,
  description,
  notation = "",
}: PageHeaderProps) => {
  return (
    <div className="flex max-w-[80%] flex-col items-center justify-center gap-2 py-4">
      <h1 className="serif-header">{header}</h1>
      <p className="description">{description}</p>
      <caption className="text-sm font-semibold">
        <span className="text-maroon">[NOTATION!]</span> {notation}
      </caption>
    </div>
  );
};

export default PageHeader;
