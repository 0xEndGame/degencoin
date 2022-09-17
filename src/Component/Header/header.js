import { Link } from "react-router-dom";
import React from "react";
import { Button, Container, Dropdown, Image } from "react-bootstrap";
import { Icon } from "@iconify/react";
import Coin from "../../Assets/Images/coin-icon-01.jpg";
import "./header.css";

const Header = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <header>
      <Container>
        <div className="nav-wrap">
          <ul className="mode-sound-wrap">
            <li>
              <Button variant="dark" className="sound-link">
                <Icon icon="charm:sound-up" />
              </Button>
            </li>
            <li>
              <Button variant="dark">
                LIGHT <Icon icon="ep:setting" />
              </Button>
            </li>
          </ul>
          <ul className="dropdown-list-wrap">
            <li>
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  RECENT
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <span>
                      <Image src={Coin} />
                    </span>
                    <p>
                      <strong>𝘴𝘱𝘪𝘤𝘦.𝘴𝘰𝘭</strong> flipped 0.25 and{" "}
                      <b>doubled.</b>
                    </p>
                    <i>21 seconds ago</i>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    <span>
                      <Image src={Coin} />
                    </span>
                    <p className="text-gold">Squanchy {6666} flipped 1 and doubled 2 times.</p>
                    <i>21 seconds ago</i>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    <span>
                      <Image src={Coin} />
                    </span>
                    <p>
                      <strong>𝘴𝘱𝘪𝘤𝘦.𝘴𝘰𝘭</strong> flipped 0.25 and{" "}
                      <b>doubled.</b>
                    </p>
                    <i>21 seconds ago</i>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    <span>
                      <Image src={Coin} />
                    </span>
                    <p>
                      <strong>𝘴𝘱𝘪𝘤𝘦.𝘴𝘰𝘭</strong> flipped 0.25 and{" "}
                      <b>doubled.</b>
                    </p>
                    <i>21 seconds ago</i>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    <span>
                      <Image src={Coin} />
                    </span>
                    <p>
                      <strong>𝘴𝘱𝘪𝘤𝘦.𝘴𝘰𝘭</strong> flipped 0.25 and{" "}
                      <b>doubled.</b>
                    </p>
                    <i>21 seconds ago</i>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    <span>
                      <Image src={Coin} />
                    </span>
                    <p>
                      <strong>𝘴𝘱𝘪𝘤𝘦.𝘴𝘰𝘭</strong> flipped 0.25 and{" "}
                      <b>doubled.</b>
                    </p>
                    <i>21 seconds ago</i>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    <span>
                      <Image src={Coin} />
                    </span>
                    <p>
                      <strong>𝘴𝘱𝘪𝘤𝘦.𝘴𝘰𝘭</strong> flipped 0.25 and{" "}
                      <b>doubled.</b>
                    </p>
                    <i>21 seconds ago</i>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  TOP STREAKS <Icon icon="ant-design:trophy-filled" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <span>
                      <Image src={Coin} />
                    </span>
                    <p>
                      <strong>𝘴𝘱𝘪𝘤𝘦.𝘴𝘰𝘭</strong> flipped 0.25 and{" "}
                      <b>doubled.</b>
                    </p>
                    <i>21 seconds ago</i>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    <span>
                      <Image src={Coin} />
                    </span>
                    <p>
                      <strong>𝘴𝘱𝘪𝘤𝘦.𝘴𝘰𝘭</strong> flipped 0.25 and{" "}
                      <b>doubled.</b>
                    </p>
                    <i>21 seconds ago</i>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    <span>
                      <Image src={Coin} />
                    </span>
                    <p>
                      <strong>𝘴𝘱𝘪𝘤𝘦.𝘴𝘰𝘭</strong> flipped 0.25 and{" "}
                      <b>doubled.</b>
                    </p>
                    <i>21 seconds ago</i>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    <span>
                      <Image src={Coin} />
                    </span>
                    <p>
                      <strong>𝘴𝘱𝘪𝘤𝘦.𝘴𝘰𝘭</strong> flipped 0.25 and{" "}
                      <b>doubled.</b>
                    </p>
                    <i>21 seconds ago</i>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    <span>
                      <Image src={Coin} />
                    </span>
                    <p>
                      <strong>𝘴𝘱𝘪𝘤𝘦.𝘴𝘰𝘭</strong> flipped 0.25 and{" "}
                      <b>doubled.</b>
                    </p>
                    <i>21 seconds ago</i>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    <span>
                      <Image src={Coin} />
                    </span>
                    <p>
                      <strong>𝘴𝘱𝘪𝘤𝘦.𝘴𝘰𝘭</strong> flipped 0.25 and{" "}
                      <b>doubled.</b>
                    </p>
                    <i>21 seconds ago</i>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    <span>
                      <Image src={Coin} />
                    </span>
                    <p>
                      <strong>𝘴𝘱𝘪𝘤𝘦.𝘴𝘰𝘭</strong> flipped 0.25 and{" "}
                      <b>doubled.</b>
                    </p>
                    <i>21 seconds ago</i>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    <span>
                      <Image src={Coin} />
                    </span>
                    <p>
                      <strong>𝘴𝘱𝘪𝘤𝘦.𝘴𝘰𝘭</strong> flipped 0.25 and{" "}
                      <b>doubled.</b>
                    </p>
                    <i>21 seconds ago</i>
                  </Dropdown.Item>{" "}
                  <Dropdown.Item href="#/action-1">
                    <span>
                      <Image src={Coin} />
                    </span>
                    <p>
                      <strong>𝘴𝘱𝘪𝘤𝘦.𝘴𝘰𝘭</strong> flipped 0.25 and{" "}
                      <b>doubled.</b>
                    </p>
                    <i>21 seconds ago</i>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  STATS <Icon icon="fa6-regular:chart-bar" />
                </Dropdown.Toggle>

                <Dropdown.Menu className="stats-dropdown">
                  <Dropdown.Item href="https://mixpanel.com/public/KQMKc744sGRZMq3idvsBmK/">
                    TODAY'S STATS
                  </Dropdown.Item>
                  <Dropdown.Item href="https://leaderboard.degencoinflip.com/">
                    LEADERBOARD
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <Button
                onClick={() => openInNewTab("https://live.degencoinflip.com/")}
                variant="dark"
                className="btn-live"
              >
                LIVE <Icon icon="ri:share-box-line" />
              </Button>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};
export default Header;
