import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Favorite from "@material-ui/icons/Favorite";
import Book from "@material-ui/icons/Book";
import Tooltip from "@material-ui/core/Tooltip";
// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import Button from "../../components/CustomButtons/Button.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import NavPills from "../../components/NavPills/NavPills.js";
import Parallax from "../../components/Parallax/Parallax.js";

import profile from "../../assets/img/faces/profile.jpg";

import styles from "../../assets/jss/material-kit-react/views/profilePage.js";

import img01 from "../../assets/img/consiliors/img-01.jpeg";
import img02 from "../../assets/img/consiliors/img-02.jpeg";
import img03 from "../../assets/img/consiliors/img-03.jpeg";
import img04 from "../../assets/img/consiliors/img-04.jpeg";
import img05 from "../../assets/img/consiliors/img-05.jpeg";
import img06 from "../../assets/img/consiliors/img-06.jpeg";
import img07 from "../../assets/img/consiliors/img-07.jpeg";
import img08 from "../../assets/img/consiliors/img-08.jpeg";
import img09 from "../../assets/img/consiliors/img-09.jpeg";
import img10 from "../../assets/img/consiliors/img-10.jpeg";
import img11 from "../../assets/img/consiliors/img-11.jpeg";
import img12 from "../../assets/img/consiliors/img-12.jpeg";
import img13 from "../../assets/img/consiliors/img-13.jpeg";
import img14 from "../../assets/img/consiliors/img-14.jpeg";
import img15 from "../../assets/img/consiliors/img-15.jpeg";
import img16 from "../../assets/img/consiliors/img-16.jpeg";
import img17 from "../../assets/img/consiliors/img-17.jpeg";
import img18 from "../../assets/img/consiliors/img-18.jpeg";
import img19 from "../../assets/img/consiliors/img-19.jpeg";
import img20 from "../../assets/img/consiliors/img-20.jpeg";
import img21 from "../../assets/img/consiliors/img-21.jpeg";
import img22 from "../../assets/img/consiliors/img-22.jpeg";
import img23 from "../../assets/img/consiliors/img-23.jpeg";
import img24 from "../../assets/img/consiliors/img-24.jpeg";
import img25 from "../../assets/img/consiliors/img-25.jpeg";
import img26 from "../../assets/img/consiliors/img-26.jpeg";
import img27 from "../../assets/img/consiliors/img-27.jpeg";
import img28 from "../../assets/img/consiliors/img-28.jpeg";
import img29 from "../../assets/img/consiliors/img-29.jpeg";
import img30 from "../../assets/img/consiliors/img-30.jpeg";
import img31 from "../../assets/img/consiliors/img-31.jpeg";
import img32 from "../../assets/img/consiliors/img-32.jpeg";
import img33 from "../../assets/img/consiliors/img-33.jpeg";
import img34 from "../../assets/img/consiliors/img-34.jpeg";
import img35 from "../../assets/img/consiliors/img-35.jpeg";
import img36 from "../../assets/img/consiliors/img-36.jpeg";

import img101 from "../../assets/img/consiliors/img-101.jpg";
import img102 from "../../assets/img/consiliors/img-102.jpg";
import img103 from "../../assets/img/consiliors/img-103.jpg";
import img104 from "../../assets/img/consiliors/img-104.jpg";
import img105 from "../../assets/img/consiliors/img-105.jpg";
import img106 from "../../assets/img/consiliors/img-106.jpg";
import img107 from "../../assets/img/consiliors/img-107.jpg";



const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
      <div>
          <Header
              color="transparent"
              brand="Luisinho 33"
              rightLinks={<HeaderLinks />}
              fixed
              changeColorOnScroll={{
                  height: 200,
                  color: "white"
              }}
          />
      <Parallax small filter image={require("../../assets/img/banner.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Luisinho 33</h3>
                    <h6>Candidato a Prefeito</h6>
                    <Tooltip
                      id="instagram-tooltip"
                      title="Visite meu instagram"
                      placement={window.innerWidth > 959 ? "top" : "left"}
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button justIcon link className={classes.margin5}
                        href="https://www.instagram.com/luisinho.araujo/"
                        target="_blank"
                      >
                        <i className={"fab fa-instagram"} />
                      </Button>
                    </Tooltip>
                    <Tooltip
                      id="facebook-tooltip"
                      title="Visite meu facebook"
                      placement={window.innerWidth > 959 ? "top" : "left"}
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button justIcon link className={classes.margin5}
                        href="https://www.facebook.com/luisinhoaraujopiranga"
                        target="_blank"                    
                      >
                      <i className={"fab fa-facebook"} />
                      </Button>
                    </Tooltip>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Sou Candidato a PREFEITO em PIRANGA!
              </p>
              <p>
                Eu e o meu vice Arlindo da Farmácia  estamos animados a trabalhar pela renovação de Piranga e mudar a forma de se fazer política! 
              </p>
              <p>
                <b>PIRANGA PODE MAIS!</b>
              </p>
              <p>
                <i>Luisinho Araujo.</i>
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Vídeo de Campanha",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center" width="auto">
                          <GridItem xs={12} sm={12} md={7}>
                            <ReactPlayer
                              url="https://www.facebook.com/107220980993555/videos/781481419346050"
                              controls
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Vereadores",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={2}>
                            <img
                              alt="..."
                              src={img01}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={img02}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={img03}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}>
                            <img
                              alt="..."
                              src={img04}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={img05}
                              className={navImageClasses}
                            />
                            <img
                                alt="..."
                                src={img06}
                                className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}>
                            <img
                                alt="..."
                                src={img07}
                                className={navImageClasses}
                            />
                            <img
                                alt="..."
                                src={img08}
                                className={navImageClasses}
                            />
                            <img
                                alt="..."
                                src={img09}
                                className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}>
                            <img
                                alt="..."
                                src={img10}
                                className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={img11}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={img12}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}>
                            <img
                              alt="..."
                              src={img13}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={img14}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={img15}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}>
                            <img
                              alt="..."
                              src={img16}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={img17}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={img18}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}>
                            <img
                              alt="..."
                              src={img19}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={img20}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={img21}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}>
                            <img
                              alt="..."
                              src={img22}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={img23}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={img24}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}>
                            <img
                              alt="..."
                              src={img25}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={img26}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={img27}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}>
                            <img
                              alt="..."
                              src={img28}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={img29}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={img30}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}>
                            <img
                              alt="..."
                              src={img31}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={img32}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={img33}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}>
                            <img
                              alt="..."
                              src={img34}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={img35}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={img36}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Vereadores Apoiadores",
                      tabIcon: Book,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={2}>
                            <img
                              alt="..."
                              src={img101}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={img102}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}>
                            <img
                              alt="..."
                              src={img103}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={img104}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={img105}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={2}>
                            <img
                              alt="..."
                              src={img106}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={img107}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
