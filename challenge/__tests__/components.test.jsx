import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { LandingPage } from "../components/landing-page";

describe("LandingPage", () => {
  test("renders navbar", () => {
    render(<LandingPage />);
    const navbar = screen.getByRole("navigation");
    expect(navbar).toBeInTheDocument();
  });

  test("renders logo", () => {
    render(<LandingPage />);
    const logo = screen.getByAltText("Bootcamp Logo");
    expect(logo).toBeInTheDocument();
  });

  test("renders hero section", () => {
    render(<LandingPage />);
    const heading = screen.getByRole("heading", {
      name: /Comienza o acelera tu carrera en tecnología/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test("renders feature list", () => {
    render(<LandingPage />);
    const features = screen.getAllByRole("listitem");
    expect(features).toHaveLength(4);
  });

  // New test for "Aplicar" button
  test('renders "Aplicar" button', () => {
    render(<LandingPage />);
    const aplicarElements = screen.getAllByText(/Aplicar/i);
    expect(aplicarElements.length).toBeGreaterThan(1);
  });

  // New test for "Ingresar" link
  test('renders "Para estudiantes" link', () => {
    render(<LandingPage />);
    // This will find any element with "Ingresar" text, including links
    const ingresarLink = screen.getByText(/Para estudiantes/i);
    expect(ingresarLink).toBeInTheDocument();
  });

  // New test for "Ingresar" link
  test('renders "Para estudiantes" link', () => {
    render(<LandingPage />);
    // This will find any element with "Ingresar" text, including links
    const ingresarLink = screen.getByText(/Para empresas/i);
    expect(ingresarLink).toBeInTheDocument();
  });

  // New test for "Ingresar" link
  test('renders "Basado en cohortes" link', () => {
    render(<LandingPage />);
    // This will find any element with "Ingresar" text, including links
    const ingresarLink = screen.getByText(/Para empresas/i);
    expect(ingresarLink).toBeInTheDocument();
  });

  // New test for "Ingresar" link
  test('renders "Ingresar" link', () => {
    render(<LandingPage />);
    // This will find any element with "Ingresar" text, including links
    const ingresarLink = screen.getByText(/Ingresar/i);
    expect(ingresarLink).toBeInTheDocument();
  });
});
