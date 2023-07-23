import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const GoalTableHeader = ({ headerGroups }: any) => {
  return (
    <TableHeader>
      {headerGroups.map((headerGroup: any) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header: any) => (
            <TableHead key={header.id}>
              {header.isPlaceholder ? null : header.column.columnDef.header}
            </TableHead>
          ))}
        </TableRow>
      ))}
    </TableHeader>
  );
};
