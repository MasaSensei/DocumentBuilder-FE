interface AdminBreadcrumbsProps {
  children?: React.ReactNode;
}

const AdminBreadcrumbs: React.FC<AdminBreadcrumbsProps> = (props) => {
  const { children } = props;
  return (
    <div className="flex border-b border-dashed border-slate-800 pb-5 md:pb-7">
      <h1 className="text-lg font-semibold text-heading">{children}</h1>
    </div>
  );
};

export default AdminBreadcrumbs;
