import React, { useState, useEffect, useContext } from "react";
import { Navbar, Container, Nav, NavDropdown, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "./eng_tate_white.png";
import { PostContext } from "../../context/PostContext";
import { LanguageContext } from "../../context/LanguageContext";
import HomeIcon from "@mui/icons-material/Home";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import Paper from "@mui/material/Paper";
//Material Icon
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import SchoolIcon from "@mui/icons-material/School";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";

const NavigationMenu = ({ extistingUser }) => {
  //https://www.aarjapan.gr.jp/english/activity/turkey/
  const [siteLanguage, setSiteLanguage] = useContext(LanguageContext);
  // eslint-disable-next-line no-unused-vars
  const { categoryFilter, setCategoryFilter } = useContext(PostContext);
  const [languageVar, SetLanguageVar] = useState(siteLanguage);
  const [menuItem, setMenuItem] = useState({
    home: "",
    about: "",
    service: "",
    serviceEdu: "",
    serviceHealth: "",
    serviceSocial: "",
    emergency: "",
    coronav: "",
    confi: "",
  });
  useEffect(() => {
    languageHandler(languageVar);
    setSiteLanguage(languageVar);
    setCategoryFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [languageVar, setSiteLanguage]);

  function languageHandler(languageset) {
    if (languageset === "English") {
      setMenuItem({
        home: "Home",
        about: "About",
        service: "Services",
        serviceEdu: "Education Services",
        serviceHealth: "Health Services",
        serviceSocial: "Social Services",
        emergency: "Emergency Number",
        coronav: "Correct Info About Corona Virus",
        confi: "Privacy and Data Security",
      });
    } else if (languageset === "Turkish") {
      setMenuItem({
        home: "Ana Sayfa",
        about: "Hakk??m??zda",
        service: "Hizmetler",
        serviceEdu: "E??itim Hizmetleri",
        serviceHealth: "Sa??l??k Hizmetleri",
        serviceSocial: "Sosyal Hizmetler",
        emergency: "Acil Durum Numaralar??",
        coronav: "Corona Virus?? Hakk??nda Do??ru Bilgiler",
        confi: "Gizlilik ve Veri G??venli??i",
      });
    } else if (languageset === "Arabic") {
      setMenuItem({
        home: "????????",
        about: "?????????????? ??????",
        service: "??????????",
        serviceEdu: "???????? ??????????????",
        serviceHealth: "???????? ????????",
        serviceSocial: "?????????? ????????????????",
        emergency: "?????? ??????????????",
        coronav: "?????????????? ?????????? ???? ?????????? ????????????",
        confi: "???????????????? ???????? ????????????????",
      });
    } else {
      setMenuItem({
        home: "Home",
        about: "About",
        service: "Services",
        serviceEdu: "Education Services",
        serviceHealth: "Health Services",
        serviceSocial: "Social Services",
        emergency: "Emergency Number",
        coronav: "Correct Info About Corona Virus",
        confi: "Privacy and Data Security",
      });
    }
  }

  function handleDropdown(e) {
    if (siteLanguage === "Arabic") {
      if (e === "???????? ??????????????") {
        setCategoryFilter("?????????? ??????????????");
      } else if (e === "???????? ????????") {
        setCategoryFilter("?????????? ????????");
      } else if (e === "?????????? ????????????????") {
        setCategoryFilter("?????????? ????????????????");
      } else {
        setCategoryFilter();
      }
    } else {
      if (e === "Sa??l??k Hizmetleri") {
        setCategoryFilter("Sa??l??k Hizmetleri");
      } else if (e === "Sosyal Hizmetler") {
        setCategoryFilter("Sosyal Hizmetler");
      } else if (e === "E??itim Hizmetleri") {
        setCategoryFilter("E??itim Hizmetleri");
      } else {
        setCategoryFilter();
      }
    }
  }

  return (
    <div>
      <div>
        <Navbar className="menu" variant="dark">
          <Container>
            <Navbar.Brand to="/">
              <Image
                alt=""
                src={logo}
                width="65"
                height="70"
                // className="d-inline-block align-top"
              />{" "}
              AAR Japan Turkey
            </Navbar.Brand>

            <Nav>
              <Nav.Link onClick={() => SetLanguageVar("Arabic")}>
                ??????????????
              </Nav.Link>
              <Nav.Link onClick={() => SetLanguageVar("Turkish")}>
                T??rk??e
              </Nav.Link>
              <Nav.Link href="/loginpage">
                <LoginIcon fontSize="large" color="info" sx={{ ml: 3 }} />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <Paper elevation={24}>
        <div>
          <Navbar bg="light" variant="light" expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Navbar.Brand to="/">
                    <NavLink
                      onClick={() => handleDropdown()}
                      style={{ textDecoration: "none", cursor: "pointer" }}
                      className={(isActive) =>
                        "nav-link" + (!isActive ? " unselected" : "")
                      }
                      to="/"
                    >
                      <HomeIcon color="error" sx={{ mb: 1, mr: 1 }} />
                      {menuItem.home}
                    </NavLink>
                  </Navbar.Brand>
                  <Navbar.Brand>
                    <Nav.Link
                      href="https://www.aarjapan.gr.jp/english/activity/turkey/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <InfoIcon color="error" sx={{ mb: 1, mr: 1 }} />
                      {menuItem.about}
                    </Nav.Link>
                  </Navbar.Brand>
                  <HomeRepairServiceIcon color="error" sx={{ mt: 2, mr: 1 }} />
                  <Navbar.Brand>
                    <NavDropdown
                      title={menuItem.service}
                      id="basic-nav-dropdown"
                    >
                      <NavLink
                        style={{ textDecoration: "none", cursor: "pointer" }}
                        className={(isActive) =>
                          "nav-link" + (!isActive ? " unselected" : "")
                        }
                        to="/"
                      >
                        <NavDropdown.Item
                          href="#action/3.1"
                          onClick={() => handleDropdown(menuItem.serviceEdu)}
                        >
                          <SchoolIcon color="error" sx={{ mb: 1, mr: 1 }} />
                          {menuItem.serviceEdu}
                        </NavDropdown.Item>

                        <NavDropdown.Item
                          href="#action/3.2"
                          onClick={() => handleDropdown(menuItem.serviceHealth)}
                        >
                          <HealthAndSafetyIcon
                            color="error"
                            sx={{ mb: 1, mr: 1 }}
                          />
                          {menuItem.serviceHealth}
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="#action/3.3"
                          onClick={() => handleDropdown(menuItem.serviceSocial)}
                        >
                          <AssuredWorkloadIcon
                            color="error"
                            sx={{ mb: 1, mr: 1 }}
                          />
                          {menuItem.serviceSocial}
                        </NavDropdown.Item>
                        {/* <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.4">
                            Separated link
                          </NavDropdown.Item> */}
                      </NavLink>
                    </NavDropdown>
                  </Navbar.Brand>
                  <Navbar.Brand>
                    <NavLink
                      style={{ textDecoration: "none", cursor: "pointer" }}
                      className={(isActive) =>
                        "nav-link" + (!isActive ? " unselected" : "")
                      }
                      to="/confidentialandsecurity"
                    >
                      <PrivacyTipIcon color="error" sx={{ mb: 1, mr: 1 }} />
                      {menuItem.confi}
                    </NavLink>
                  </Navbar.Brand>
                  <Navbar.Brand className=" text-dark">
                    <NavLink
                      style={{ textDecoration: "none", cursor: "pointer" }}
                      className={(isActive) =>
                        "nav-link" + (!isActive ? " unselected" : "")
                      }
                      to="/emergency"
                    >
                      <MedicalServicesIcon
                        color="error"
                        sx={{ mb: 1, mr: 1 }}
                      />
                      {menuItem.emergency}
                    </NavLink>
                  </Navbar.Brand>
                </Nav>

                {/* <Nav>
                        <Form className="d-flex">
                          <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                          />
                          <Button variant="outline-danger">Search</Button>
                        </Form>
                      </Nav> */}
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </Paper>
    </div>
  );
};

export default NavigationMenu;
