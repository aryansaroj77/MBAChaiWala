import Section from "./conponents/Section";
import "./styles/App.scss";
import "./styles/intro.scss";
import "./styles/section.scss";
import "./styles/Footer.scss";
import "./styles/Misc.scss";
import "./styles/mediaQuery.scss";
import IntroVideo from "./conponents/IntroVideo";
import freshTopicImg from "./assests/academy.png";
import freshTopic2Img from "./assests/story.png";
import tedtalkImg from "./assests/in-the-news.gif";
import franchiseImg from "./assests/franchise.gif";
import mapImg from "./assests/locations.png";
import coursesImg from "./assests/image2.png";
import albumImg from "./assests/mba-cares.gif";
import baratImg from "./assests/image1.png";
import chaiWalaImg from "./assests/image3.png";
import data from "./data/data.json";
import Footer from "./conponents/Footer";
import Misc from "./conponents/Misc";
import { useEffect } from "react";


const yellow = "#fff100", pink = "#ed1e79", white = "#fff", brown = "#6d3d0f";

function App() {

  const { freshTopic, freshTopic2, tedTalks, franchise, map, courses, album, barat, chaiwala } = data;

  const dotCursor = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.top = `${e.pageY - 14}px`; // Adjusted position
    cursor.style.left = `${e.pageX - 14}px`; // Adjusted position

    const element = e.target;

    if (element.getAttribute("data-cursorpointer")) {
      cursor.classList.add("cursorHover");
    }
    else if(element.getAttribute("data-cursorpointermini")){
      cursor.classList.add("cursorHoverMini");
    }
    else{
      cursor.classList.remove("cursorHover");
      cursor.classList.remove("cursorHoverMini");
    }
};


  useEffect(() => {
    window.addEventListener('mousemove', dotCursor);
    return () => {
      window.removeEventListener('mousemove', dotCursor);
    }
  }, []);




  return (
    <>
      <IntroVideo />
      {/* fresh topc 1 */}
      <Section
        h3={freshTopic.heading}
        text={freshTopic.text}
        btntxt={freshTopic.btn}
        imgSrc={freshTopicImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />
      {/* fresh topc 2 */}
      <Section
        h3={freshTopic2.heading}
        text={freshTopic2.text}
        btntxt={freshTopic2.btn}
        imgSrc={freshTopic2Img}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />
      {/* ted talk */}
      <Section
        h3={tedTalks.heading}
        text={tedTalks.text}
        btntxt={tedTalks.btn}
        imgSrc={tedtalkImg}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />
      {/* franchis */}
      <Section
        h3={franchise.heading}
        text={franchise.text}
        btntxt={franchise.btn}
        imgSrc={franchiseImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />
      {/* map */}
      <Section
        h3={map.heading}
        text={map.text}
        imgSrc={mapImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={brown}
        btnColor={yellow}
        hasbtn={false}
      />
      {/* courses */}
      <Section
        h3={courses.heading}
        text={courses.text}
        btntxt={courses.btn}
        imgSrc={coursesImg}
        imgSize={"30%"}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />
      {/* album */}
      <Section
        h3={album.heading}
        text={album.text}
        btntxt={album.btn}
        imgSrc={albumImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />
      {/* barat */}
      <Section
        h3={barat.heading}
        text={barat.text}
        btntxt={barat.btn}
        imgSrc={baratImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />
      {/* chaiwala */}
      <Section
        h3={chaiwala.heading}
        text={chaiwala.text}
        btntxt={chaiwala.btn}
        imgSrc={chaiWalaImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />

      <Footer />

      <Misc />
    </>
  );
}

export default App;
