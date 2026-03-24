import Layout from "./layouts/Layout"
import { Provider } from 'react-redux'
import { store } from "./Store"

function App() {
  
 

  return (
    <>
   <Provider store = {store}>
  <Layout/>
</Provider>
    </>
  )
}

export default App
