import { Route, Routes } from "react-router-dom";
import Home from "./component/pages/home";
import Layout from "./component/layout/Layout";
import "./App.css";
import pages from "./utils/pages";
import List from "./component/pages/list";
import About from "./component/pages/about";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={pages.get("home").path} element={<Home />} />
          <Route path={pages.get("listBusiness").path} element={<List />} />
          <Route path={pages.get("about").path} element={<About />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
