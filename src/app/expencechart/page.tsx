import MyPieChart from "../component/piechart";
import ViewsChart from "@/app/component/Barchart";

export default function ExpenceChartPage() {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center">Expense Charts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow flex justify-center">
          <MyPieChart />
        </div>

        <div className="bg-white p-4 rounded-lg shadow flex justify-center">
          <ViewsChart />
        </div>
      </div>
    </div>
  );
}
