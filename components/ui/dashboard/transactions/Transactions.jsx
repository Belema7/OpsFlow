import Image from "next/image";

const transactionsData = [
  {
    id: 1,
    name: "John Doe",
    img: "/user.jpeg",
    status: "Pending",
    date: "14.02.2024",
    amount: "$3,200",
  },
  {
    id: 2,
    name: "Jane Smith",
    img: "/user.jpeg",
    status: "Done",
    date: "13.02.2024",
    amount: "$1,500",
  },
  {
    id: 3,
    name: "Mike Litoris",
    img: "/user.jpeg",
    status: "Cancelled",
    date: "12.02.2024",
    amount: "$2,100",
  },
  {
    id: 4,
    name: "John Doe",
    img: "/user.jpeg",
    status: "Pending",
    date: "11.02.2024",
    amount: "$3,200",
  },
];

const Transactions = () => {
  const getStatusStyles = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-amber-100 text-amber-700";
      case "done":
        return "bg-emerald-100 text-emerald-700";
      case "cancelled":
        return "bg-rose-100 text-rose-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="dark:bg-gray-900/95p-6 text-white rounded-xl shadow-sm  ">
      <h2 className="text-xl font-semibold text-white mb-5">Latest Transactions</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left ">
          <thead>
            <tr className="text-slate-500 font-medium text-sm ">
              <td className="py-3 px-2">Name</td>
              <td className="py-3 px-2">Status</td>
              <td className="py-3 px-2">Date</td>
              <td className="py-3 px-2 text-right">Amount</td>
            </tr>
          </thead>
          <tbody className="text-sm">
            {transactionsData.map((item) => (
              <tr key={item.id} className=" hover:bg-slate-50 transition-colors">
                <td className="py-4 px-2">
                  <div className="flex items-center gap-3 font-medium text-slate-700">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={32}
                      height={32}
                      className="rounded-full object-cover"
                    />
                    {item.name}
                  </div>
                </td>
                <td className="py-4 px-2">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${getStatusStyles(item.status)}`}>
                    {item.status}
                  </span>
                </td>
                <td className="py-4 px-2 text-slate-500">{item.date}</td>
                <td className="py-4 px-2 text-right font-semibold text-slate-700">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
