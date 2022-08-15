import React from "react";
import { Container, Image } from "react-bootstrap";
import KRuxULB from "../../Assets/Images/KRuxULB.png";
import LLhRskG from "../../Assets/Images/LLhRskG.png";
import { Icon } from "@iconify/react";
import "./Footer.css";

const Footer = () => {
  return (
    <Container>
      <div className="footer-wrap">
        <ul className="social-icons">
          <li>
            <a href="#">
              <Image src={KRuxULB} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon icon="ant-design:twitter-outlined" color="#1da1f2" />
            </a>
          </li>
          <li>
            <a href="#">
              <Icon icon="bxl:discord-alt" color="#5865f2" />
            </a>
          </li>
          <li>
            <a href="#">
              <Image src={LLhRskG} alt="" />
            </a>
          </li>
        </ul>
        <p>Solana Network: 3110 TPS</p>
      </div>
    </Container>
  );
};

export default Footer;
