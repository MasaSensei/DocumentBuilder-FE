import Core from "@/components/core";
import { Button } from "@/components/ui/button";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { HiMiniPencilSquare, HiOutlineTrash } from "react-icons/hi2";

interface MyTableBodyProps {
  headers: any;
  cells: any;
  link: string;
  linkProperty: string;
  onClick?: (id: string) => void | undefined;
  type?: any;
}

const MyTableBody: React.FC<MyTableBodyProps> = (props) => {
  const { headers, cells, link, onClick, type, linkProperty } = props;

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
                  href={`${link}/${row[linkProperty]}/edit`}
                  className="text-base transition duration-300 hover:text-lime-500"
                >
                  <HiMiniPencilSquare className="w-6 h-6" />
                </Link>
                <Core.Alert
                  onClick={() => onClick && onClick(row[linkProperty])}
                  title="Delete"
                  desription="Are you sure you want to delete this item?"
                  action="Delete"
                >
                  <Button className="text-base bg-transparent shadow-none hover:bg-transparent transition duration-300 text-red-500 hover:text-red-600">
                    <HiOutlineTrash className="w-6 h-6" />
                  </Button>
                </Core.Alert>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default MyTableBody;
