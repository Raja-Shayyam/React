import { ThemeProviderStore } from "../store/Store"
import App from "./App"

function AppMain() {
  return (
    <ThemeProviderStore>
      <App />
    </ThemeProviderStore>
  )
}

export default AppMain