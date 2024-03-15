"use client";

import { getBounties } from "../firebase";
import { useEffect, useState } from "react";   

const AdminDashboard = () => {
    const [bounties, setBounties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchBounties = async () => {
        try {
          const bounties = await getBounties();
          setBounties(bounties);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
      fetchBounties();
    }, []);

    const handleApprove = (bountyId) => {
      // Logic to handle approval of the bounty with ID bountyId
    };

    const handleReject = (bountyId) => {
      // Logic to handle rejection of the bounty with ID bountyId
    };

    return (
        <div className="mt-20 p-4 ">
            <table className="bounty-table rounded-lg">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Deadline</th>
                        <th>Wallet Address</th>
                        <th>Status</th>
                        <th>Action</th> {/* New header for actions */}
                    </tr>
                </thead>
                <tbody>
                    {bounties.map((bounty, index) => (
                        <tr key={index}>
                            <td>{bounty.title}</td>
                            <td>${bounty.amount}</td>
                            <td>{bounty.deadline}</td>
                            <td>{bounty.sender}</td>
                            <td>{bounty.status}</td>
                            <td>
                                <button className="approve-btn" onClick={() => handleApprove(bounty.id)}>Approve</button>
                                <button className="reject-btn" onClick={() => handleReject(bounty.id)}>Reject</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
