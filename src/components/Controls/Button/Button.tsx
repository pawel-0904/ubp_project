import styled from 'styled-components'
import SwitchButton from "../SwitchButton/SwitchButton";
import React from "react";

// Создаем стилизованную компоненту
// Присваиваем ей функцию styled.[название тега]
// Приписываем шаблонную строку и внутри пишем CSS стили
// const Container = styled.div`
//   background-color: #2b2b2b;
//   border-radius: 5px;
// `;

// Используем эти компоненты внутри нашего JSX!
const Button: React.FC<string> = (bg) => (
  <ContainerStyled bg={bg}>
    <TitleStyled>Styled Component</TitleStyled>
    <TextStyled>Some text</TextStyled>
  </ContainerStyled>
);

export default Button;

const TitleStyled = styled.h1`
  font-weight: 300;
`;

const TextStyled = styled.p`
  font-size: 12px
`;

const ContainerStyled = styled.div<{bg:string}>`
  background-color: ${props => props.bg};
  border-radius: 5px;
`;