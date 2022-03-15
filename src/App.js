import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
//Components import
import Admin from "./components/pages/Admin";
import NavigationMenu from "./components/utils/NavigationMenu";
import Slider from "./components/utils/Slider";
import SidePage from "./components/utils/SidePage";
import Footer from "./components/utils/Footer";
import ConfidentialPage from "./components/pages/ConfidentialPage";
import EmergencyPage from "./components/pages/EmergencyPage";
import Home from "./components/pages/Home";
import LoginPage from "./components/pages/LoginPage";

//Context provider
import { AlertProvider } from "./context/AlertContext";
import { LanguageProvider } from "./context/LanguageContext";
import { PostProvider } from "./context/PostContext";

// Services
import FirebaseAuthService from "./FirebaseAuthService";
import ReadPostPage from "./components/pages/ReadPostPage";

function App() {
  const [user, setUser] = useState();
  const [pathVar, setpathVar] = useState(false);

  let pathname = window.location.pathname;

  // const [showMenu, setShowMenu] = useState(true);
  FirebaseAuthService.subscribeToAuthChanges(setUser);
  // sayfa url yakalamak için

  // function handlerPageView() {
  //   if (
  //     window.location.pathname === "/loginpage" ||
  //     window.location.pathname === "/adminpage"
  //   ) {
  //     setShowMenu(false)
  //   }
  // }

  useEffect(() => {
    if (
      window.location.pathname === "/loginpage" ||
      window.location.pathname === "/adminpage"
    ) {
      setpathVar(true);
      console.log("true");
    } else {
      setpathVar(false);
      console.log("false");
    }
  }, [pathname]);

  return (
    <AlertProvider>
      <LanguageProvider>
        <PostProvider>
          <BrowserRouter>
            <div>
              {pathVar ? null : <NavigationMenu extistingUser={user} />}
            </div>
            <div>
              {window.location.pathname === "/loginpage" ||
              window.location.pathname === "/adminpage" ? null : (
                <Slider />
              )}

              <br></br>
            </div>

            <Container fluid>
              <Row>
                <Col sm={pathVar ? 12 : 9}>
                  <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route
                      path="/confidentialandsecurity"
                      element={<ConfidentialPage />}
                    />
                    <Route path="/emergency" element={<EmergencyPage />} />
                    <Route path="/adminpage" element={<Admin />} />
                    <Route path="/loginpage" element={<LoginPage />} />
                    <Route path="/readpostpage" element={<ReadPostPage />} />
                  </Routes>
                </Col>

                {pathVar ? null : (
                  <Col sm={3}>
                    <SidePage />
                  </Col>
                )}
              </Row>
            </Container>
            <br></br>
            <br></br>
            <br></br>
            {pathVar ? null : <Footer />}
          </BrowserRouter>
        </PostProvider>
      </LanguageProvider>
    </AlertProvider>
  );
}

export default App;
