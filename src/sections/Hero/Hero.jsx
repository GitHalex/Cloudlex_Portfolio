import React from "react";
import styles from "./HeroStyle.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import linkedinIcon from "../../assets/linkedin-light.svg";
import githubIcon from "../../assets/github-light.svg";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Hanyinson Alex"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Hanyinson
          <br />
          Calcina
        </h1>
        <h2>FullStack Developer</h2>
        <span>
          <a href="https://twiter.com" target="_blank">
            <img src={twitterIcon} alt="Twitter-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/hanyinson-alex-cb-ing/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin-icon" />
          </a>
          <a href="https://github.com/GitHalex" target="_blank">
            <img src={githubIcon} alt="Github-icon" />
          </a>
        </span>
      </div>
    </section>
  );
}

export default Hero;
