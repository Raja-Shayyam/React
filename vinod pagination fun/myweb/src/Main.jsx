import App from "./App"
import { AppProvider } from "./contextStore"
import 'bootstrap/dist/css/bootstrap.min.css';

export const Main = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  )
}
