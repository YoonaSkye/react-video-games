import styled from "styled-components";
import { motion } from "framer-motion";

const ScroollToAnchor = () => {
  const scrollToAnchor = (anchorName) => {
    if (anchorName) {
      // 找到锚点
      let anchorElement = document.getElementById(anchorName);
      // 如果对应id的锚点存在，就跳转到锚点
      if (anchorElement) {
        anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  };

  return (
    <StyledNav>
      <div className="navContent">
        <div className="navLinks">
          <a onClick={() => scrollToAnchor("Popolar")} href>
            Popular
          </a>
          <a onClick={() => scrollToAnchor("Upcoming")} href>
            Upcoming
          </a>
          <a onClick={() => scrollToAnchor("New")} href>
            New
          </a>
        </div>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  display: flex;
  padding: 0;
  a,
  a:active {
    font-weight: 700;
    padding: 0.25rem 1.5rem;
    border-radius: 4px;
    color: white !important;
    background: #481499;
  }
  a:first-of-type {
    margin-left: -1.5rem;
  }

  a:hover {
    color: white;
    background: #926bcf;
    cursor: pointer;
  }
`;

export default ScroollToAnchor;
