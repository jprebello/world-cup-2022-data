import { createRootRoute, Outlet } from '@tanstack/react-router'
import NavBar from '../components/NavBarComponent'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg text-black/50">Page not found</p>
    </div>
  )
}

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar />
      <Outlet />
    </>
  ),
  notFoundComponent: NotFound,
})