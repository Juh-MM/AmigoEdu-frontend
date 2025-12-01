import { Outlet } from 'react-router-dom'
import MenuLateral from '../../components/admin/MenuLateral'
import Profile from '../../components/Profile'
import Ajuda from '../../components/Ajuda'

export default function AdminLayout() {
  return (
    <div className="flex flex-row bg-neutral-100 min-h-screen">
      <MenuLateral />
      <div className="flex flex-col flex-1 lg:mr-5 mx-5 lg:mx-0 h-screen overflow-y-auto mb-30 lg:mb-0">
        <Profile />
        <Outlet />
        <Ajuda />
      </div>
    </div>
  )
}
