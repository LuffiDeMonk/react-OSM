import { Provider } from "react-redux"
import LocationContainer from "./components/Map/LocationContainer"
import { store } from "./components/redux/store"

const App = () => {
  return (
    <Provider store={store}>
      <LocationContainer />
    </Provider>
  )
}

export default App
