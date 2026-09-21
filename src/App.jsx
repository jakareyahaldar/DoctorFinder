import './App.css'
import Navbar from './Components/Navbar'
import Annousment from './Components/Annousment'
import Banner from './Components/Banner'
import SpecialtiesSection from './Components/SpecialtiesSection'
import { Route, Routes } from 'react-router-dom'
import DoctorList from './Pages/Doctors/DoctorList'
import Dashboard from './Dashboard/Dashboard'
import DashboardHome from './Dashboard/Home'
import AddDoctors from './Dashboard/AddDoctors'
import ManageDoctors from './Dashboard/ManageDoctors'
import DoctorDetails from './Pages/Doctors/DoctorDetails'
import AdminLogin from './Pages/AdminLogin'



function App() {
  return (
    <>
      <main className='xl:px-80 px-5'>
        <Annousment />
        <Navbar />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<DoctorList />} path='/sp/:specialties' />
          <Route element={<DoctorDetails />} path='/appointment/:slug' />
          <Route element={<AdminLogin />} path='/admin-login' />
          <Route element={<Dashboard />} path='dashboard'>
            <Route index element={<DashboardHome />} />
            <Route path='add-doctor' element={<AddDoctors />} />
            <Route path='doctors' element={<ManageDoctors />} />
          </Route>
        </Routes>
      </main>
    </>
  )
}


function Home(){
  return(
    <section >
        <Banner />
        <SpecialtiesSection />
      </section>
  )
}

export default App
