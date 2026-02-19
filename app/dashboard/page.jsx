import Card from "@/components/ui/dashboard/card/Card";
import Transactions from "@/components/ui/dashboard/transactions/Transactions";
import Chart from "@/components/ui/dashboard/chart/Chart";
import Rightbar from "@/components/ui/dashboard/rightbar/Rightbar";
import { MdSupervisedUserCircle, MdAttachMoney, MdShoppingCart, MdPersonAdd } from "react-icons/md";

const cardData = [
  {
    title: "Total Users",
    number: "12,345",
    icon: <MdSupervisedUserCircle size={24} />,
    change: "+12%",
    color: "text-blue-600",
  },
  {
    title: "Total Revenue",
    number: "$89,240",
    icon: <MdAttachMoney size={24} />,
    change: "+8.4%",
    color: "text-green-600",
  },
  {
    title: "New Clients",
    number: "3,421",
    icon: <MdPersonAdd size={24} />,
    change: "-3.2%",
    color: "text-red-600",
  },
];

const Dashboard = () => {
  return (
    <div className="flex gap-8 p-6">
      <div className="flex-1 min-w-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {cardData.map((item, i) => (
            <Card key={i} {...item} />
          ))}
        </div>

        <div className="space-y-8">
          <Transactions />
          <Chart />
        </div>
      </div>

      <div className="w-full lg:w-80 xl:w-96 shrink-0">
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;