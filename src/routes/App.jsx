import React from 'react';
import AppRoutes from './AppRoutes';
import Navbar from '../components/Navbar';

export default function App() {
    return (
        <div>
            <Navbar render={<AppRoutes />} />
        </div>
    )
}
