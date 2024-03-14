import styled from "styled-components";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { motion } from "framer-motion";
import { pageAnim, fade, photoAnim, lineAnim, slider, sliderContainer } from "../Animations";
const OurWork = () => {
  return (
    <Work variants={pageAnim} initial="hidden" animate="show" exit="exit">
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athelete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/capture/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/capture/work/the-racer">
          <Hide>
            <motion.img variants={photoAnim} src={theracer} alt="racer" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>Good Times</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/capture/work/good-times">
          <Hide>
            <motion.img variants={photoAnim} src={goodtimes} alt="goodtimes" />
          </Hide>
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 2.5rem 5rem;
  h2 {
    padding: 1rem 0rem;
    font-weight: bold;
    color: #23d997;
  }
`;
const Movie = styled.div`
  padding-bottom: 5rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 1.5rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default OurWork;
