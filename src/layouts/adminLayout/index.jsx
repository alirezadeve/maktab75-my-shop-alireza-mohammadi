import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <>
    <Outlet>
        <h1>Admin</h1>
    </Outlet>
    </>
  )
}
