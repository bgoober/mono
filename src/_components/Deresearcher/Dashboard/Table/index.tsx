type ColumnDefinition = {
  key: string;
  header: string;
};

type TableProps = {
  columns: ColumnDefinition[];
  data: any[];
  renderCell: (item: any, column: ColumnDefinition) => React.ReactNode;
};

// Utility function to determine column visibility
const getColumnVisibility = (columnKey: string) => {
  switch (columnKey) {
    case "title":
    case "status":
      return "";
    case "createdDate":
      return "hidden md:table-cell";
    default:
      return "hidden lg:table-cell";
  }
};

// Table Header Component
const TableHeader: React.FC<{ columns: ColumnDefinition[] }> = ({
  columns,
}) => (
  <thead className="bg-zinc-50">
    <tr>
      {columns.map((column) => (
        <th
          key={column.key}
          scope="col"
          className={`px-6 py-3 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider ${getColumnVisibility(
            column.key,
          )}`}
        >
          {column.header}
        </th>
      ))}
    </tr>
  </thead>
);

// Table Row Component
const TableRow: React.FC<{
  item: any;
  columns: ColumnDefinition[];
  renderCell: TableProps["renderCell"];
}> = ({ item, columns, renderCell }) => (
  <tr className="hover:bg-zinc-50 cursor-pointer">
    {columns.map((column) => (
      <td
        key={column.key}
        className={`px-6 py-4 whitespace-nowrap ${getColumnVisibility(
          column.key,
        )}`}
      >
        {renderCell(item, column)}
      </td>
    ))}
  </tr>
);

// Main Table Component
export default function Table({ columns, data, renderCell }: TableProps) {
  return (
    <div className="flex flex-col mt-8">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-zinc-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-zinc-200">
              <TableHeader columns={columns} />
              <tbody className="bg-white divide-y divide-zinc-200 ">
                {data.map((item, index) => (
                  <TableRow
                    key={index}
                    item={item}
                    columns={columns}
                    renderCell={renderCell}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
