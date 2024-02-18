import Fragments from "@/components/fragments";
import { Table } from "@/components/ui/table";

interface TableProps {
  headers: any;
  cells: any;
  link: string;
  linkProperty: string;
}

const MyTable: React.FC<TableProps> = (props) => {
  const { headers, cells, link, linkProperty } = props;
  return (
    <Table className="w-[1000px] min-w-full table-fixed">
      <Fragments.MyTableBody
        headers={headers}
        cells={cells}
        linkProperty={linkProperty}
        link={link}
      />
    </Table>
  );
};

export default MyTable;
