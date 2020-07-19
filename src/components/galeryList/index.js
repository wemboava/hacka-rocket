import React from "react";
import Zoom from "react-reveal/Zoom";
import { useHistory } from "react-router-dom";

import HeartButton from "../heartButton";
import { Container, Content, List, Item } from "./styles";

import Img from "../../assets/images/roupa.jpg";

const GaleryList = () => {
  const history = useHistory();

  const handleFavorite = (e) => {
    e.stopPropagation();
  };

  return (
    <Container>
      <Content>
        <List>
          <Item onClick={() => history.push("/detail")} img={Img}>
            <Zoom>
              <div className="image">
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="image__heart"
                >
                  <HeartButton />
                </div>
              </div>
              <div className="description">
                <span className="description__name">Nome do produto</span>
                <span className="description__price">R$ 129,90</span>
              </div>
            </Zoom>
          </Item>

          <Item onClick={() => history.push("/detail")} img={Img}>
            <Zoom>
              <div className="image">
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="image__heart"
                >
                  <HeartButton />
                </div>
              </div>
              <div className="description">
                <span className="description__name">Nome do produto</span>
                <span className="description__price">R$ 129,90</span>
              </div>
            </Zoom>
          </Item>

          <Item onClick={() => history.push("/detail")} img={Img}>
            <Zoom>
              <div className="image">
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="image__heart"
                >
                  <HeartButton />
                </div>
              </div>
              <div className="description">
                <span className="description__name">Nome do produto</span>
                <span className="description__price">R$ 129,90</span>
              </div>
            </Zoom>
          </Item>

          <Item onClick={() => history.push("/detail")} img={Img}>
            <Zoom>
              <div className="image">
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="image__heart"
                >
                  <HeartButton />
                </div>
              </div>
              <div className="description">
                <span className="description__name">Nome do produto</span>
                <span className="description__price">R$ 129,90</span>
              </div>
            </Zoom>
          </Item>

          <Item onClick={() => history.push("/detail")} img={Img}>
            <Zoom>
              <div className="image">
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="image__heart"
                >
                  <HeartButton />
                </div>
              </div>
              <div className="description">
                <span className="description__name">Nome do produto</span>
                <span className="description__price">R$ 129,90</span>
              </div>
            </Zoom>
          </Item>

          <Item onClick={() => history.push("/detail")} img={Img}>
            <Zoom>
              <div className="image">
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="image__heart"
                >
                  <HeartButton />
                </div>
              </div>
              <div className="description">
                <span className="description__name">Nome do produto</span>
                <span className="description__price">R$ 129,90</span>
              </div>
            </Zoom>
          </Item>

          <Item onClick={() => history.push("/detail")} img={Img}>
            <Zoom>
              <div className="image">
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="image__heart"
                >
                  <HeartButton />
                </div>
              </div>
              <div className="description">
                <span className="description__name">Nome do produto</span>
                <span className="description__price">R$ 129,90</span>
              </div>
            </Zoom>
          </Item>

          <Item onClick={() => history.push("/detail")} img={Img}>
            <Zoom>
              <div className="image">
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="image__heart"
                >
                  <HeartButton />
                </div>
              </div>
              <div className="description">
                <span className="description__name">Nome do produto</span>
                <span className="description__price">R$ 129,90</span>
              </div>
            </Zoom>
          </Item>

          <Item onClick={() => history.push("/detail")} img={Img}>
            <Zoom>
              <div className="image">
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="image__heart"
                >
                  <HeartButton />
                </div>
              </div>
              <div className="description">
                <span className="description__name">Nome do produto</span>
                <span className="description__price">R$ 129,90</span>
              </div>
            </Zoom>
          </Item>

          <Item onClick={() => history.push("/detail")} img={Img}>
            <Zoom>
              <div className="image">
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="image__heart"
                >
                  <HeartButton />
                </div>
              </div>
              <div className="description">
                <span className="description__name">Nome do produto</span>
                <span className="description__price">R$ 129,90</span>
              </div>
            </Zoom>
          </Item>

          <Item onClick={() => history.push("/detail")} img={Img}>
            <Zoom>
              <div className="image">
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="image__heart"
                >
                  <HeartButton />
                </div>
              </div>
              <div className="description">
                <span className="description__name">Nome do produto</span>
                <span className="description__price">R$ 129,90</span>
              </div>
            </Zoom>
          </Item>

          <Item onClick={() => history.push("/detail")} img={Img}>
            <Zoom>
              <div className="image">
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="image__heart"
                >
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
