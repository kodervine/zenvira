import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { GoalTableRow } from "@/app/(features)/goalsetting";

export const GoalTable = ({ data, columns, handleGoalClick }: any) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableBody>
          {data.length ? (
            data.map((row: any) => (
              <GoalTableRow
                key={row.id}
                row={row}
                handleGoalClick={handleGoalClick}
              />
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
