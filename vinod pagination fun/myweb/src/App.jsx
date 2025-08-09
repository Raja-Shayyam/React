import './App.css';
import { Pagination } from './Pagination';
import { Search } from './Search';
import { Stories } from './Stories';
// import { useContext } from "react";
// // import { DataPsser } from './contextStore';             # to avoid these create local HOOK
// import { GloablHook } from './contextStore';

function App() {
  // const dataname = GloablHook()

  return (
    <div className="App bodr-div">
      <header className="App-header">
        <h2>MY ren5 web 1 </h2>
      </header>
      <Search />
      <Pagination />
      <Stories />
    </div>
  );
}

export default App;
