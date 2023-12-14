import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Assets from "../components/User/Assets";
import Dashboard from "../components/User/Dashboard";
import AdminDashboard from "../components/Admin/Dashboard";
import Ticket from "../components/User/Ticket";
import Transactions from "../components/User/Transactions";
import PendingTransactions from "../components/Admin/pendingTransactions";
import AdminTickets from "../components/Admin/AdminTicktes";
import AdminUsers from "../components/Admin/AdminUsers";
import General from "../components/Admin/SingleUser/General";
import UserAssets from "../components/Admin/SingleUser/UserAssets";
import UserTransactions from "../components/Admin/SingleUser/UserTransactions";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route
          path="/admin/transactions/pending"
          element={<PendingTransactions />}
        />
        <Route path="/admin/tickets" element={<AdminTickets />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/users/:id" element={<General />} />
        <Route path="/admin/users/:id/assets" element={<UserAssets />} />
        <Route
          path="/admin/users/:id/transactions"
          element={<UserTransactions />}
        />
      </Routes>
    </BrowserRouter>
  );
}
