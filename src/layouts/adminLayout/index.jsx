import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
   <>
    <h1>Admin Tabs</h1>
    <Outlet/>
    </>
  )
}
