import { TableRow, TableCell } from "@/components/ui/table";

export const GoalTableRow = ({ row, handleGoalClick }: any) => {
  return (
    <TableRow
      key={row.id}
      data-state={row.getIsSelected() && "selected"}
      onClick={() => handleGoalClick(row.original)}
    >
      {row.getVisibleCells().map((cell: any) => (
        <TableCell key={cell.id}>{cell.column.columnDef.cell(cell)}</TableCell>
      ))}
    </TableRow>
  );
};
