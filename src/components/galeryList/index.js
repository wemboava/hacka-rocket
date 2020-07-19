import React from "react";
import Zoom from "react-reveal/Zoom";

import HeartButton from "../heartButton";
import { Container, Content, List, Item } from "./styles";

import Img from "../../assets/images/roupa.jpg";

const GaleryList = () => {
  return (
    <Container>
      <Content>
        <List>
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
        </List>
      </Content>
    </Container>
  );
};
export default GaleryList;
