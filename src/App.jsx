import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Index from "./components/Index.jsx";
import Menu from "./components/Menu.jsx";
import ModalAll from "./components/ModalAll.jsx";
import ModalUS from "./components/ModalUs.jsx";
import Problem1 from "./components/Problem-1.jsx";
import Problem2 from "./components/Problem-2.jsx";
import { store } from "./services/store.js";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/" element={<Menu />}>
          <Route path="problem-1" element={<Problem1 />} />
          <Route path="problem-2" element={<Problem2 />}/>
        </Route>
            <Route path="problem-2/all" element={<ModalAll />} />
            <Route path="problem-2/us" element={<ModalUS />} />
      </Routes>
    </Provider>
  );
}

export default App;
