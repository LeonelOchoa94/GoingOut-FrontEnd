import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import { AuthLayout } from '../components/layouts/AuthLayout';
import { ConfirmAccount, ForgetPassword, Login, NewPassword, Register } from '../components/pages';

export default function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<AuthLayout />} />
                <Route index element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="passrecovery" element={<ForgetPassword />} />
                <Route path="passrecovery/:token" element={<NewPassword />} />
                <Route path="passconfirm/:id" element={<ConfirmAccount />} />
                <Route path='/home' element={
                    <Navbar render={<Home />} />

                } />
                <Route path='/pedidos' element={
                    <Navbar render={<Home />} />
                } />
                <Route path='/menu' element={
                    <Navbar render={<Home />} />
                } />
                <Route path='/camareros' element={
                    <Navbar render={<Home />} />
                } />
            </Routes>
        </div>
    )
}