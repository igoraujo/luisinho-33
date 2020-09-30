import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Favorite from "@material-ui/icons/Favorite";
import Tooltip from "@material-ui/core/Tooltip";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/profile.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

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
              brand="Material Kit React"
              rightLinks={<HeaderLinks />}
              fixed
              changeColorOnScroll={{
                  height: 200,
                  color: "white"
              }}
          />
      <Parallax small filter image={require("assets/img/banner.jpg")} />
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
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Tooltip
                      id="instagram-tooltip"
                      title="Visite meu instagram"
                      placement={window.innerWidth > 959 ? "top" : "left"}
                      classes={{ tooltip: classes.tooltip }}
                    >
                      <Button justIcon link className={classes.margin5}>
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
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Vídeo de Campanha",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={12}>
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
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="https://scontent.fbhz8-1.fna.fbcdn.net/v/t1.0-9/120264410_171216901260629_842528421147301460_o.png?_nc_cat=102&_nc_sid=9267fe&_nc_ohc=UL9zuJDj1JEAX9lGfZ0&_nc_ht=scontent.fbhz8-1.fna&oh=2cf2063dfab334e5613880c3211e8a5f&oe=5F983EE0"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://scontent.fbhz8-1.fna.fbcdn.net/v/t1.0-9/120156685_171216871260632_9190339240660927189_o.png?_nc_cat=103&_nc_sid=9267fe&_nc_ohc=IB5pJs3c7qAAX8TRZm6&_nc_ht=scontent.fbhz8-1.fna&oh=6f347afc3fd3eee6e23113bd741bc351&oe=5F968505"
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="https://scontent.fbhz8-1.fna.fbcdn.net/v/t1.0-9/120234588_171216814593971_3811642272356349782_o.png?_nc_cat=110&_nc_sid=9267fe&_nc_ohc=ezqZvt31RckAX-y0eNL&_nc_ht=scontent.fbhz8-1.fna&oh=f8b665dd4baadbdb19556a9ee2a9fcd4&oe=5F99BB95"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://scontent.fbhz8-1.fna.fbcdn.net/v/l/t1.0-9/120302275_171216757927310_3920241847779213722_o.png?_nc_cat=105&_nc_sid=9267fe&_nc_ohc=tpfw4jCNNpQAX9yg2bx&_nc_ht=scontent.fbhz8-1.fna&oh=6f120f89d88d7424478923afda349706&oe=5F97D20A"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://scontent.fbhz8-1.fna.fbcdn.net/v/t1.0-9/120195531_171216734593979_9189814886958258490_o.png?_nc_cat=101&_nc_sid=9267fe&_nc_ohc=G76bAXrJdTcAX_W4ydx&_nc_ht=scontent.fbhz8-1.fna&oh=2aee6e410d0cc6a743cdafa6bf4ac6fb&oe=5F97326A"
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="https://scontent.fbhz8-1.fna.fbcdn.net/v/t1.0-9/120217280_171216704593982_6410115135390628676_o.png?_nc_cat=102&_nc_sid=9267fe&_nc_ohc=TgWnpxZbBiwAX939_k1&_nc_ht=scontent.fbhz8-1.fna&oh=ae173e09732ed082e8a90d3a8b97cf82&oe=5F97E608"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://scontent.fbhz8-1.fna.fbcdn.net/v/t1.0-9/120227807_171216677927318_2123525951656934229_o.png?_nc_cat=102&_nc_sid=9267fe&_nc_ohc=m5BIYjjwoA8AX-0dV1T&_nc_ht=scontent.fbhz8-1.fna&oh=88c2f8469d1a2d685850f8db6d1da4ac&oe=5F965204"
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
