import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const transactions = [
  {
    id: 1,
    date: "April 20, 2025",
    amount: "+₦500",
    destination: "Opay",
    status: "Success",
  },
  {
    id: 2,
    date: "April 19, 2025",
    amount: "-₦200",
    destination: "GTB",
    status: "Success",
  },
  {
    id: 3,
    date: "April 18, 2025",
    amount: "-₦700",
    destination: "AssessBank",
    status: "Success",
  },
];

export default function WalletHistory() {
  return (
    <div className="mx-auto  text-white ">
      <div className="mb-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <span className="text-yellow-400">💳</span> Wallet History
        </h2>
        <p className="text-sm text-gray-300">
          Top up your balance to join paid games
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl">
        <table className="w-full text-sm text-left ">
          <thead className="text-gray-300 border-b bg-[#1d2432]  border-gray-600 ">
            <tr>
              <th className="py-2">#</th>
              <th className="py-2">Date</th>

              <th className="py-2">Amount</th>
              <th className="py-2">Destination</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody className="bg-[#111827]">
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-b border-gray-700">
                <td className="py-3">{tx.id}</td>
                <td className="py-3">{tx.date}</td>
                <td className="py-3">{tx.destination}</td>
                <td
                  className={`py-3 font-medium ${
                    tx.type === "credit" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {tx.amount}
                </td>
                <td className="py-3 text-green-400 flex items-center gap-1">
                  <FaCheckCircle className="text-green-400" /> {tx.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
