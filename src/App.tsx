import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { useThemeHook } from "./hooks/useThemeHook";
import ThemeProvider from "./theme/ThemeProvider";
import Header from "./layouts/Header";
import { IRouteConfig } from "./interfaces/IRouteConfig";
import HousePriceRentRatioCalculator from "./pages/HousePriceRentRatioCalculator";
import { ICalculatorSelectOption } from "./components/CalculatorSelect/interfaces/ICalculatorSelectOption";

const routeConfigs: IRouteConfig[] = [
  {
    path: "/",
    // path: "house-price-rent-ratio-calculator",
    element: (
      <HousePriceRentRatioCalculator className="px-4"></HousePriceRentRatioCalculator>
    ),
    label: "房價租金比計算機",
  },
];

const calculatorSelectOptions: ICalculatorSelectOption[] = routeConfigs.map(
  ({ path, label }) => {
    return {
      value: path,
      label,
    };
  }
);

function App() {
  const [theme, setTheme] = useThemeHook();

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Header
          theme={theme}
          onThemeChange={setTheme}
          calculatorSelectOptions={calculatorSelectOptions}
        ></Header>
        <Routes>
          {routeConfigs.map((config, index) => (
            <Route key={index} {...config}></Route>
          ))}
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
