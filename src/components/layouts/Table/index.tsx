import Fragments from "@/components/fragments";
import { Table } from "@/components/ui/table";

interface TableProps {
  headers: any;
  cells: any;
  link: string;
  linkProperty: string;
  onClick?: () => void;
}

const MyTable: React.FC<TableProps> = (props) => {
  const { headers, cells, link, linkProperty, onClick } = props;
  return (
    <Table className="lg:w-[1000px] w-full min-w-full table-fixed">
      <Fragments.MyTableBody
        headers={headers}
        cells={cells}
        linkProperty={linkProperty}
        link={link}
        onClick={onClick}
      />
    </Table>
  );
};

export default MyTable;
