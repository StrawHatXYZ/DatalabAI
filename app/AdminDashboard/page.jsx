"use client";

import { getBounties, updateBountyStatus } from "../firebase";
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

    const handleApprove = async (bountyId) => {
        try {
            await updateBountyStatus(bountyId, "approved"); // Update bounty status to "approved"
            setBounties(prevBounties =>
                prevBounties.map(bounty =>
                    bounty.id === bountyId ? { ...bounty, status: "approved" } : bounty
                )
            );
        } catch (error) {
            console.error("Error updating bounty status:", error);
        }
    };

    const handleReject = async (bountyId) => {
        try {
            await updateBountyStatus(bountyId, "rejected"); // Update bounty status to "rejected"
            setBounties(prevBounties =>
                prevBounties.filter(bounty => bounty.id !== bountyId)
            );
        } catch (error) {
            console.error("Error updating bounty status:", error);
        }
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
                    {bounties.filter(bounty => bounty.status === "pending").map((bounty, index) => (
                        <tr key={index}>
                            <td>{bounty.title}</td>
                            <td>${bounty.amount}</td>
                            <td>{bounty.deadline}</td>
                            <td>{bounty.senderwallet}</td>
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
