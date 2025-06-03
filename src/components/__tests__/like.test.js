import { render, screen, fireEvent } from "@testing-library/react";
import Like from "../like";

describe("Componente Like", () => {
  test("Muestra por defecto 'Likes: 0'", () => {
    render(<Like />);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
  });

  test("Incrementa los likes al hacer clic en el botón 'Like'", () => {
    render(<Like />);
    const botonLike = screen.getByText("Like");
    fireEvent.click(botonLike);
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
  });

  test("Decrementa los likes al hacer clic en el botón 'Dislike'", () => {
    render(<Like />);
    const botonLike = screen.getByText("Like");
    // Incrementamos dos veces para probar bien la resta
    fireEvent.click(botonLike); // +1
    fireEvent.click(botonLike); // +1 (total 2)

    const botonDislike = screen.getByText("Dislike");
    fireEvent.click(botonDislike); // -1 (total 1)

    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
  });
});
