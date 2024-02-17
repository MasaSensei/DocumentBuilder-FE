import Fragments from "@/components/fragments";
import { Table } from "@/components/ui/table";

interface TableProps {
  headers: any;
  cells: any;
}

const MyTable: React.FC<TableProps> = (props) => {
  const { headers, cells } = props;
  return (
    <Table className="w-[1000px] min-w-full table-fixed">
      <Fragments.MyTableBody headers={headers} cells={cells} />
    </Table>
  );
};

export default MyTable;
