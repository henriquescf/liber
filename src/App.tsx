import { MainFooter } from "./components/MainFooter"
import { MainHeader } from "./components/MainHeader/MainHeader"
import { MainRoutes } from "./routes/MainRoutes"

function App() {

  return (
    <>
      <MainHeader/>
      <MainRoutes/>
      <MainFooter/>
    </>
  )
}

export default App