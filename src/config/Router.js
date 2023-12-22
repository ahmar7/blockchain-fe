import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import { AuthProvider, RequireAuth } from "react-auth-kit";
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
import AdminProfile from "../components/Admin/adminProfile";
import Kyc from "../components/User/Kyc";
import EmailVerify from "../components/emailVerify";
import Home from "../components/Home/Home";
import Wallet from "../components/Wallet/wallet";
import UserVerifications from "../components/Admin/SingleUser/UserVerificatons";
export default function Router() {
  return (
    <AuthProvider authType={"cookie"} authName={"auth"}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/wallet" element={<Wallet />} />
          <Route index path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
          <Route
            path="/assets"
            element={
              <RequireAuth loginPath={"/auth/login"}>
                <Assets />
              </RequireAuth>
            }
          />
          <Route
            path="/flows/kyc"
            element={
              <RequireAuth loginPath={"/auth/login"}>
                <Kyc />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireAuth loginPath={"/auth/login"}>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/ticket"
            element={
              <RequireAuth loginPath={"/auth/login"}>
                <Ticket />
              </RequireAuth>
            }
          />
          <Route
            path="/transactions/:id"
            element={
              <RequireAuth loginPath={"/auth/login"}>
                <Transactions />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <RequireAuth loginPath={"/auth/login"}>
                <AdminDashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/transactions/pending"
            element={
              <RequireAuth loginPath={"/auth/login"}>
                <PendingTransactions />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/tickets"
            element={
              <RequireAuth loginPath={"/auth/login"}>
                <AdminTickets />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/profile"
            element={
              <RequireAuth loginPath={"/auth/login"}>
                <AdminProfile />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/users"
            element={
              <RequireAuth loginPath={"/auth/login"}>
                <AdminUsers />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/users/:id/general"
            element={
              <RequireAuth loginPath={"/auth/login"}>
                <General />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/users/:id/assets"
            element={
              <RequireAuth loginPath={"/auth/login"}>
                <UserAssets />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/users/:id/transactions"
            element={
              <RequireAuth loginPath={"/auth/login"}>
                <UserTransactions />
              </RequireAuth>
            }
          />
          <Route
            path="/admin/users/:id/verifications"
            element={
              <RequireAuth loginPath={"/auth/login"}>
                <UserVerifications />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
