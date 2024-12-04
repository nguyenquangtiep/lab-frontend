import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListStaffComponent from './components/ListStaffComponent'
import StaffComponent from './components/StaffComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
            {/* // http://localhost:3000 */}
            <Route path='/' element = {<ListStaffComponent />}></Route>
            {/* // http://localhost:3000/staff */}
            <Route path='/staff' element = {<ListStaffComponent />}></Route>
            {/* // http://localhost:3000/add-staff */}
            <Route path='/add-staff' element = {<StaffComponent />}></Route>

            {/* // http://localhost:3000/edit-staff/{id} */}
            <Route path='/edit-staff/:id' element = {<StaffComponent />}></Route>
          </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
