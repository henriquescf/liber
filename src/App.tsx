import { Slide, ToastContainer } from "react-toastify"
import { MainFooter } from "./components/MainFooter"
import { MainHeader } from "./components/MainHeader/MainHeader"
import { MainRoutes } from "./routes/MainRoutes"

function App() {

  return (
    <>
      <ToastContainer position="bottom-right" transition={Slide} pauseOnHover={false} autoClose={5000}/>
      <MainHeader/>
      <MainRoutes/>
      <MainFooter/>
    </>
  )
}

export default App