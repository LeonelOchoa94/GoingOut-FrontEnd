import React from 'react'
import AppRoutes from './AppRoutes'
import ResponsiveAppBar from '../components/Navbar'

export default function App() {
    return (
        <>
            <ResponsiveAppBar />
            <AppRoutes />
        </>
    )
}
