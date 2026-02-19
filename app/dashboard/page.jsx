import Card from "@/components/ui/dashboard/card/Card";
import Transactions from "@/components/ui/dashboard/transactions/Transactions";
import Chart from "@/components/ui/dashboard/chart/Chart";
import Rightbar from "@/components/ui/dashboard/rightbar/Rightbar";

const Dashboard = () => {
  return (
    <div className="flex justify-between gap-10">
      <div className="w-3/4 bg-amber-500">
        <div className="flex justify-between">
          <Card/>
           <Card/>
            <Card/>
        </div>

        <Transactions />
        <Chart />
      </div>

      <div className="w-1/4 bg-amber-900">
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;