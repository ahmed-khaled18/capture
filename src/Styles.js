import styled from "styled-components";
import { motion } from "framer-motion";
export const Container = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 2.5rem 5rem;
  @media (max-width: 1300px) {
    display: block;
    padding: 1.5rem 1.5rem;
    text-align: center;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 2.5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 1rem 0rem 2.5 0rem;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
