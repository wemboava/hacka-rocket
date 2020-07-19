import React from "react";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";

import HeartButton from "../heartButton";
import { Container, Content, List, Item } from "./styles";

import Img from "../../assets/images/roupa.jpg";

const GaleryList = () => {
  return (
    <Container>
      <Content>
        <List>
          <Link to="/detail">
            <Item img={Img}>
              <Zoom>
                <div className="image">
                  <div className="image__heart">
                    <HeartButton />
                  </div>
                </div>
                <div className="description">
                  <span className="description__name">Nome do produto</span>
                  <span className="description__price">R$ 129,90</span>
                </div>
              </Zoom>
            </Item>
          </Link>
          <Link to="/detail">
            <Item img={Img}>
              <Zoom>
                <div className="image">
                  <div className="image__heart">
                    <HeartButton />
                  </div>
                </div>
                <div className="description">
                  <span className="description__name">Nome do produto</span>
                  <span className="description__price">R$ 129,90</span>
                </div>
              </Zoom>
            </Item>
          </Link>
          <Link to="/detail">
            <Item img={Img}>
              <Zoom>
                <div className="image">
                  <div className="image__heart">
                    <HeartButton />
                  </div>
                </div>
                <div className="description">
                  <span className="description__name">Nome do produto</span>
                  <span className="description__price">R$ 129,90</span>
                </div>
              </Zoom>
            </Item>
          </Link>
          <Link to="/detail">
            <Item img={Img}>
              <Zoom>
                <div className="image">
                  <div className="image__heart">
                    <HeartButton />
                  </div>
                </div>
                <div className="description">
                  <span className="description__name">Nome do produto</span>
                  <span className="description__price">R$ 129,90</span>
                </div>
              </Zoom>
            </Item>
          </Link>
          <Link to="/detail">
            <Item img={Img}>
              <Zoom>
                <div className="image">
                  <div className="image__heart">
                    <HeartButton />
                  </div>
                </div>
                <div className="description">
                  <span className="description__name">Nome do produto</span>
                  <span className="description__price">R$ 129,90</span>
                </div>
              </Zoom>
            </Item>
          </Link>
          <Link to="/detail">
            <Item img={Img}>
              <Zoom>
                <div className="image">
                  <div className="image__heart">
                    <HeartButton />
                  </div>
                </div>
                <div className="description">
                  <span className="description__name">Nome do produto</span>
                  <span className="description__price">R$ 129,90</span>
                </div>
              </Zoom>
            </Item>
          </Link>
          <Link to="/detail">
            <Item img={Img}>
              <Zoom>
                <div className="image">
                  <div className="image__heart">
                    <HeartButton />
                  </div>
                </div>
                <div className="description">
                  <span className="description__name">Nome do produto</span>
                  <span className="description__price">R$ 129,90</span>
                </div>
              </Zoom>
            </Item>
          </Link>
          <Link to="/detail">
            <Item img={Img}>
              <Zoom>
                <div className="image">
                  <div className="image__heart">
                    <HeartButton />
                  </div>
                </div>
                <div className="description">
                  <span className="description__name">Nome do produto</span>
                  <span className="description__price">R$ 129,90</span>
                </div>
              </Zoom>
            </Item>
          </Link>
          <Link to="/detail">
            <Item img={Img}>
              <Zoom>
                <div className="image">
                  <div className="image__heart">
                    <HeartButton />
                  </div>
                </div>
                <div className="description">
                  <span className="description__name">Nome do produto</span>
                  <span className="description__price">R$ 129,90</span>
                </div>
              </Zoom>
            </Item>
          </Link>
          <Link to="/detail">
            <Item img={Img}>
              <Zoom>
                <div className="image">
                  <div className="image__heart">
                    <HeartButton />
                  </div>
                </div>
                <div className="description">
                  <span className="description__name">Nome do produto</span>
                  <span className="description__price">R$ 129,90</span>
                </div>
              </Zoom>
            </Item>
          </Link>
          <Link to="/detail">
            <Item img={Img}>
              <Zoom>
                <div className="image">
                  <div className="image__heart">
                    <HeartButton />
                  </div>
                </div>
                <div className="description">
                  <span className="description__name">Nome do produto</span>
                  <span className="description__price">R$ 129,90</span>
                </div>
              </Zoom>
            </Item>
          </Link>
          <Link to="/detail">
            <Item img={Img}>
              <Zoom>
                <div className="image">
                  <div className="image__heart">
                    <HeartButton />
                  </div>
                </div>
                <div className="description">
                  <span className="description__name">Nome do produto</span>
                  <span className="description__price">R$ 129,90</span>
                </div>
              </Zoom>
            </Item>
          </Link>
        </List>
      </Content>
    </Container>
  );
};
export default GaleryList;
