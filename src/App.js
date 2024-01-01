import SideMenu from "./components/sidemenu/SideMenu";
import Main from "./components/main/Main";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Project from "./components/project/Project";
import NavTop from "./components/nav/NavTop";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <>
      <NavTop />
      <SideMenu />
      <Main>
        <Home />
        <About />
        <Project />
        <Contact />
      </Main>
    </>
  );
}

export default App;
