interface FormDataTabelProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
  desription: string;
}

const AdminFormDataTabel: React.FC<FormDataTabelProps> = (props) => {
  const { className, children, title, desription } = props;
  return (
    <>
      <div className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5">
        <h4 className="text-base font-semibold text-slate-800 mb-2">{title}</h4>
        <p className="text-sm text-slate-600">{desription}</p>
      </div>
      <div className="rounded bg-white p-5 shadow md:p-8 w-full sm:w-8/12 md:w-2/3">
        {children}
      </div>
    </>
  );
};

export default AdminFormDataTabel;
