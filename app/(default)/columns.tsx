import { ColumnDef } from "@tanstack/react-table";
import { ModelScore } from "./page.types";

export const modelScores: ModelScore[] = [
  {
    model: "GPT-3",
    inference: 0.8,
    math: 0.9,
    writing: 0.7,
    reading: 0.6,
    grammar: 0.8,
    singleTurn: 0.9,
    multiTurn: 0.8,
    total: 0.8,
  },
];

export const columns: ColumnDef<ModelScore>[] = [
  {
    accessorKey: "model",
    header: "모델",
  },
  {
    accessorKey: "inference",
    header: "추론",
  },
  {
    accessorKey: "math",
    header: "수학",
  },
  {
    accessorKey: "writing",
    header: "글쓰기",
  },
  {
    accessorKey: "reading",
    header: "이해",
  },
  {
    accessorKey: "grammar",
    header: "문법",
  },
  {
    accessorKey: "singleTurn",
    header: "싱글턴",
  },
  {
    accessorKey: "multiTurn",
    header: "멀티턴",
  },
  {
    accessorKey: "total",
    header: "총점",
  },

  // {
  //   accessorKey: "total",
  //   header: () => <div className="text-right">Total</div>,
  //   cell: ({ row }) => {
  //     const amount = parseFloat(row.getValue("amount"));
  //     const formatted = new Intl.NumberFormat("en-US", {
  //       style: "currency",
  //       currency: "USD",
  //     }).format(amount);

  //     return <div className="text-right font-medium">{formatted}</div>;
  //   },
  // },
];
