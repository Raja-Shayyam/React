import App from "./App"
import { AppProvider } from "../components/store/context"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const MainApp = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  )
}

export default MainApp