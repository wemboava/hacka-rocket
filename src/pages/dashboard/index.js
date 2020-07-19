import React, { useState } from "react";

import GaleryList from "../../components/galeryList";
import HeaderBottom from "../../components/headerBottom";

import { Container, Content, CategoriesList, Category } from "./styles";

import Logo from "../../assets/images/logo.png";

const Dashboard = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Todos",
      isActivity: true,
    },
    {
      id: 2,
      name: "Feminino",
      isActivity: false,
    },
    {
      id: 3,
      name: "Masculino",
      isActivity: false,
    },
    {
      id: 4,
      name: "Tenis",
      isActivity: false,
    },
    {
      id: 5,
      name: "Shorts",
      isActivity: false,
    },
    {
      id: 6,
      name: "Inverno",
      isActivity: false,
    },
  ]);

  const handleActivityCategory = (categoryId) => {
    setCategories(
      categories.map((categ) => ({
        ...categ,
        isActivity: categ.id === categoryId,
      }))
    );
  };

  return (
    <Container>
      <Content>
        <img className="logo" src={Logo} alt="logo" />
        <CategoriesList>
          {categories.map((category) => (
            <Category
              onClick={() => handleActivityCategory(category.id)}
              isActivity={category.isActivity}
              key={category.id}
            >
              {category.name}
            </Category>
          ))}
        </CategoriesList>
        <GaleryList />
        <HeaderBottom />
      </Content>
    </Container>
  );
};
export default Dashboard;
