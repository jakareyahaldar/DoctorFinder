import './App.css'
import Navbar from './Components/Navbar'
import Annousment from './Components/Annousment'
import Banner from './Components/Banner'
import SpecialtiesSection from './Components/SpecialtiesSection'
import { Route, Routes } from 'react-router-dom'
import DoctorList from './Pages/DynamicDoctorList/DoctorList'
import Dashboard from './Dashboard/Dashboard'
import DashboardHome from './Dashboard/Home'
import AddDoctors from './Dashboard/AddDoctors'
import ManageDoctors from './Dashboard/ManageDoctors'
import DoctorDetails from './Pages/DynamicDoctorList/DoctorDetails'
import AdminLogin from './Pages/AdminLogin'
import PrivetComponent from './Dashboard/PrivetComponent'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDoctors } from './features/doctors/doctorSlice'
import AllDoctorsList from './Pages/Doctors/DoctorList'
import ChangeAdminUP from './Dashboard/ChangeAdminUP'
import FullScreenLoader from './Components/FullScreenLoader'



function App() {
  const dispatch = useDispatch()
  const { isLoading: isVerifying } = useSelector( state => state.authVerifyer )
  const { isLoading: isFetchingDoctors } = useSelector( state => state.doctors )

  useEffect(()=>{
    dispatch(fetchDoctors())
  },[])

  return (
    <>
      <main className='2xl:px-80 px-5'>
        <Annousment />
        <Navbar />
        <FullScreenLoader isVisible={isVerifying} message={"এডমিন যাচাই করা হচ্ছে..."} />
        <FullScreenLoader isVisible={isFetchingDoctors} message={"সকল ডাটা আনা হচ্ছে..."} />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<AllDoctorsList />} path='/doctors' />
          <Route element={<DoctorList />} path='/sp/:specialties' />
          <Route element={<DoctorDetails />} path='/appointment/:slug' />
          <Route element={<AdminLogin />} path='/admin-login' />
          <Route element={<PrivetComponent />}>
            <Route element={<Dashboard />} path='dashboard'>
              <Route index element={<DashboardHome />} />
              <Route path='add-doctor' element={<AddDoctors />} />
              <Route path='doctors' element={<ManageDoctors />} />
              <Route path='admin-change' element={<ChangeAdminUP />} />
            </Route>
          </Route>
        </Routes>
        <p className='fixed bottom-0 right-0 text-[10px] text-gray-500 animate-pulse'>Devoloper: <a title='See devoloper portfolio' href='https://jakareya-dev.vercel.app'>Jakareya Haldar</a></p>
      </main >
    </>
  )
}


function Home() {
  return (
    <section >
      <Banner />
      <SpecialtiesSection />
    </section>
  )
}

export default App
