import React from 'react'
import '../parts/levelholder';
import '../design/levels.css'
import Levelholder from '../parts/levelholder';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer, Flip } from 'react-toastify';


function Courses() {
  return (
    <>
    <ToastContainer
          toastStyle={{ backgroundColor: "black" }}
          position="top-center"
          transition={Flip}
          autoClose={900}
          hideProgressBar={false}
          newestOnTop={false}
          closeButton={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    <Levelholder ></Levelholder>
    </>
)
}

export default Courses