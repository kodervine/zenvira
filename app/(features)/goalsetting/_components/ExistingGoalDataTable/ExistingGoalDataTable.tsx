import * as React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronDownIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
// absolute path throws undefined errors. Got the idea to use the path import from here - https://github.com/nrwl/nx/issues/9319
import {
  EGoalCategory,
  EGoalFrequency,
  EGoalPriority,
  EGoalStatus,
  IGoalItems,
} from "../../_types";
import {
  ExistingGoalDetails,
  useGoalDetailsStore,
} from "@/app/(features)/goalsetting";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";

export const data: IGoalItems[] = [
  {
    id: "m5gr84i9",
    goal: "Lose 10 pounds",
    deadline: "2023-08-01",
    progress: 50,
    status: EGoalStatus.Completed,
    frequency: EGoalFrequency.Annual,
    category: EGoalCategory.Health,
    description: "It is intermidate fasting darling",
    reminders: ["2023-07-15", "2023-07-30"],
    notes: "I'm on track to meet my goal!",
    startDate: "Today",
    priority: EGoalPriority.High,
  },
  {
    id: "3",
    goal: "Learn New Programming Language",
    deadline: "2023-09-30",
    progress: 0,
    status: EGoalStatus.Completed,
    frequency: EGoalFrequency.Daily,
    category: EGoalCategory.Career,
    description: "Must learn this c# by force",
    reminders: [],
    notes: "",
    startDate: "Today",
    priority: EGoalPriority.High,
  },
  // Add more goals as needed
];

export const columns: ColumnDef<IGoalItems>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "goal",
    header: "Goal",
    cell: ({ row }) => <div>{row.getValue("goal")}</div>,
  },

  {
    accessorKey: "deadline",
    header: "Deadline",
    cell: ({ row }) => <div>{row.getValue("deadline")}</div>,
  },
  {
    accessorKey: "progress",
    header: "Progress",
    cell: ({ row }) => <div>{`${row.getValue("progress")}%`}</div>,
  },
  // Add the new columns here
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <div>{row.getValue("status")}</div>,
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => <div>{row.getValue("category")}</div>,
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const goal = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => console.log(`Copy goal ID: ${goal.id}`)}
            >
              Copy goal ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View goal details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function ExistingGoalDataTable() {
  const [selectedGoal, setSelectedGoal] = React.useState<IGoalItems | null>(
    null
  );
  const { openGoalDetails, closeGoalDetails } = useGoalDetailsStore();
  const handleGoalClick = (goal: IGoalItems) => {
    setSelectedGoal(goal);
    openGoalDetails(goal.id);
  };

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter Goal..."
          value={(table.getColumn("goal")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("goal")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={() => handleGoalClick(row.original)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open</Button>
          </SheetTrigger>{" "}
          {selectedGoal && (
            <ExistingGoalDetails
              goal={selectedGoal}
              onClose={closeGoalDetails}
            />
          )}
        </Sheet>
      </div>
    </div>
  );
}
