import { columns } from "./columns";
import { DataTable } from "./data-table";
import { ModelScore } from "./page.types";

async function getData(): Promise<ModelScore[]> {
  // Fetch data from your API here.
  return [
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
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <main>
      <h1 className="text-4xl font-bold text-center">
        LoginKor / 한국어 언어모델 다분야 사고력 벤치마크
      </h1>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
}
