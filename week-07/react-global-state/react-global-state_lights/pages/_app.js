import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  const lightsOnSum = lights.reduce((sum, light) => {
    return light.isOn ? sum + 1 : sum;
  }, 0);

  const allLightsOff = lights.every((light) => light.isOn === false);
  const allLightsOn = lights.every((light) => light.isOn);

  function handleToggleLight(idToToggle) {
    setLights(
      lights.map((light) =>
        light.id === idToToggle ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function handleAllOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  function handleAllOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }

  return (
    <Layout allLightsOff={allLightsOff}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={handleToggleLight}
        lightsOnSum={lightsOnSum}
        onAllOff={handleAllOff}
        onAllOn={handleAllOn}
        allLightsOff={allLightsOff}
        allLightsOn={allLightsOn}
      />
    </Layout>
  );
}
