import "./assets/styles/app.scss";
import "./assets/index";
// import Header from "./layouts/Header/Header";
import {
  CustomizedInputBase,
  ActionAreaCard,
  BasicModal,
  // Logo,
  HeaderCounter,
  Menu,
  Slider,
  Login,
  Aside,
  PhonNumber,
  DisabledTabs,
} from "components";
import { Admin } from "./Pages";
import { useState } from "react";
import { BsFillHeartFill, BsFillCartFill } from "react-icons/bs";
import MyRoutes from "Routes";

// import "../../assets/styles/components/headerCounter/headerCounter.scss";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <div className="App">
      {/* <Admin>
        lksweiduhgiuylksdfiuhdvlkjsdo9i8jolksvlkjodaivoudsalkdanoiujhdandsaj
      </Admin>
    
      <Aside />
     
      <div>
        <Menu />
        <Slider />
      </div>
      {/* <Line /> */}
      {/* <Login />
      <ActionAreaCard handleModalOpen={handleModalOpen} />
      <BasicModal modalOpen={modalOpen} handleModalClose={handleModalClose} />  */}
      <MyRoutes />
    </div>
  );
}

export default App;
