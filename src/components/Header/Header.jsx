import React, { useRef, useState } from 'react'
import css from './Header.module.scss'
import { BiMenu, BiMenuAltRight, BiPhoneCall } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { getMenuStyles, headerVariants } from '../../utils/motion'
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const menuRef = useRef()

  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });
  return (

    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={headerVariants}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <a className="anchor" id="header"></a>

      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>
          AKS
        </div>

        <ul
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}>
          <li><a href="#header">Home</a></li>
          <li><a href="#experties">Services</a></li>
          <li><a href="#work">Experience</a></li>

          <li><a href="#footer">Contact</a></li>
          {/* <li><a href="#portfolio">Resume!</a></li> */}
          <a href="https://drive.google.com/file/d/15qa4kF4uGz6-y4Bav7qnrOd2QZPLb5Tu/view?usp=drivesdk"
            download style={{ color: 'orange', fontWeight: 'bold' }}
            target="_blank"
            rel="noopener noreferrer"

          >
            <li>Resume!</li>
          </a>
          <li className={`flexCenter ${css.phone}`}>
            <p>+91 9594719208</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>

        {/* for medium and small screens */}
        <div className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>

      </div>

    </motion.div>


  );
};

export default Header;