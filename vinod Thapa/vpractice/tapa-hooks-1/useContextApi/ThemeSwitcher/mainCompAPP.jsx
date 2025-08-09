import { ThemeProviderStore } from './store'
import { MainCompo } from './mainCompo'


export const MainCompAPP = () => {
  return (
    <ThemeProviderStore>
      <MainCompo />
    </ThemeProviderStore>
  )
}

