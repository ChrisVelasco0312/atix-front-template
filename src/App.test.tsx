import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the app title", () => {
    render(<App />);
    const titleElements = screen.getAllByText("Atix Front Template");
    expect(titleElements.length).toBeGreaterThan(0);
  });

  it("renders the welcome message", () => {
    render(<App />);
    const welcomeElements = screen.getAllByText("Welcome to Vite + React");
    expect(welcomeElements.length).toBeGreaterThan(0);
  });

  it("shows count button with initial value", () => {
    render(<App />);
    const buttonElements = screen.getAllByText("Count is 0");
    expect(buttonElements.length).toBeGreaterThan(0);
  });
});
