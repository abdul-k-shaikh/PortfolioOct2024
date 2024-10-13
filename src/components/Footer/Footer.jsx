import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from 'framer-motion'
const Footer = () => {
    return (
        <motion.section
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings ${css.wrapper}`}>
            <a className="anchor" id="footer"></a>

            <motion.div
                variants={footerVariants}
                className={`innerWidth yPaddings flexCenter ${css.container}`}>
                <div className={css.left}>
                    <span className="primaryText">
                        Let's make something <br />
                        amazing together.
                    </span>
                    <span className="primaryText">
                        Start by <a href="mailto:theabdul97@gmail.com">saying hi</a>
                    </span>
                </div>

                <div className={css.right}>
                    <div className={css.info}>
                        <span className="secondaryText">Information</span>
                        <p>400072 Mumbai, Maharashtra, India</p>
                    </div>
                    <ul className={css.menu}>
                        <li><a href="#experties">Services</a></li>
                        <li>Works</li>
                        <li>Notes</li>
                        <li>Experience</li>
                        <a href="https://drive.google.com/file/d/15qa4kF4uGz6-y4Bav7qnrOd2QZPLb5Tu/view?usp=drivesdk"
                            download style={{ color: 'orange', fontWeight: 'bold' }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <li>Download My Resume!</li>
                        </a>

                    </ul>
                </div>
            </motion.div>
            <footer>
                <span style={{ fontSize: '12px', display: 'block', textAlign: 'center' }}>
                    ©2024 Abdul k Shaikh. All rights reserved. contributions and feedback are welcome!
                </span>
            </footer>
        </motion.section>
    );
};

export default Footer;