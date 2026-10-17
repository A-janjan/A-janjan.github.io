import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import "./Main.scss";

/**
 * The portfolio is intentionally dark-only: the theme is designed as a
 * restrained terminal / Matrix aesthetic, so the light-mode switch was removed.
 */
const Main = () => {
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(splashScreen.enabled);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  return (
    <div className="dark-mode app-root">
      <StyleProvider
        value={{isDark: true, changeTheme: () => undefined}}
      >
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <div className="page-bg" aria-hidden="true" />
            <div className="scanlines" aria-hidden="true" />
            <a className="skip-link" href="#main">
              Skip to content
            </a>
            <Header />
            <main id="main">
              <Greeting />
              <Skills />
              <StackProgress />
              <Education />
              <WorkExperience />
              <Projects />
              <StartupProject />
              <Achievement />
              <Blogs />
              <Talks />
              <Twitter />
              <Podcast />
              <Profile />
            </main>
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
