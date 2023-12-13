import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header"; 

test("Renderiza o componente Header sem erros", () => {
  render(<Header />);
});

test("Renderiza o logotipo corretamente", () => {
  render(<Header />);
  const logo = screen.getByAltText("Logo");

  expect(logo).toBeInTheDocument();
  expect(logo).toHaveAttribute("src", "https://static.nike.com.br/v10-301-3/images/brands/logo.svg");
  expect(logo).toHaveAttribute("width", "65px");
  expect(logo).toHaveAttribute("height", "25px");
});

test("Renderiza os itens de navegação corretamente", () => {
  render(<Header />);
  const lancamentos = screen.getByText("Lançamentos");
  const masculino = screen.getByText("Masculino");

  expect(lancamentos).toBeInTheDocument();
  expect(masculino).toBeInTheDocument();
});

// tenho q ajustar e comprender melhor como trabalhar com os testes unitarios
// por exemplo quando fazer, quando não fazer, por quer fazer o teste e o q eu devo testar e qual biblioteca usar