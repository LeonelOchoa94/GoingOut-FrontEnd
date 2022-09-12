import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';

export default function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/pedidos' element={<Home />} />
                <Route path='/menu' element={<Home />} />
                <Route path='/camareros' element={<Home />} />
                {/* <Route path='/mesas' element={<Tables />} /> */}
                {/* <Route path='/camareros' element={<Waiters />} /> */}
                {/* <Route path='/mesas' element={<Tables />} /> */}
                {/* <Route path='/pedidos' element={<Order />} /> */}
                {/* <Route path='/reservas' element={<Reservation />} /> */}
                {/* <Route path='/facturaciones' element={<Billings />} /> */}
            </Routes>
        </div>
    )
}