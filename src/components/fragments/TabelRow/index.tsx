import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { HiMiniPencilSquare } from "react-icons/hi2";

interface MyTableBodyProps {
  headers: any;
  cells: any;
}

const MyTableBody: React.FC<MyTableBodyProps> = (props) => {
  const { headers, cells } = props;

  return (
    <>
      <TableHeader>
        <TableRow className="bg-slate-800 rounded hover:bg-slate-700">
          {headers.map((header: any) => (
            <TableHead
              key={header}
              className="whitespace-nowrap first:rounded-tl last:rounded-tr p-3 text-lg text-white"
            >
              {header}
            </TableHead>
          ))}
          <TableHead className="whitespace-nowrap first:rounded-tl last:rounded-tr p-3 text-lg text-white">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-white">
        {cells.map((row: any, index: number) => (
          <TableRow key={index}>
            {Object.keys(row).map((cell: any, cellIndex: number) => (
              <TableCell
                key={cellIndex}
                className="py-3 first:rounded-bl last:rounded-br px-4 text-lg text-slate-800"
              >
                {row[cell]}
              </TableCell>
            ))}
            <TableCell className="py-3 first:rounded-bl last:rounded-br px-4 text-lg text-slate-800">
              <div className="inline-flex items-center w-auto gap-3">
                <Link
                  href={"/"}
                  className="text-base transition duration-300 hover:text-lime-500"
                >
                  <HiMiniPencilSquare className="w-6 h-6" />
                </Link>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default MyTableBody;
