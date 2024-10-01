import logo from "./logo.svg";
import "./App.css";
import ChiqueLogo from "./ChiqueLogo";
import AppCard from "./AppCard";

function App() {
  document.title = "Software Chique";
  return (
    <div
      className="Container"
      style={{
        background: "linear-gradient(135deg, #f8f 0%, #8ff 100%)",
        width: "100%",
        height: "100vh",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <ChiqueLogo width={200} />
      <AppCard
        name="Color Harmonizer"
        appIcon={"./Harmonizer_Icon.png"}
        images={[
          "./Harmonizer_SC1.png",
          "./Harmonizer_SC2.png",
          "./Harmonizer_SC3.png",
          "./Harmonizer_SC4.png",
          "./Harmonizer_SC5.png",
          "./Harmonizer_SC6.png",
          "./Harmonizer_SC7.png",
        ]}
        description="With the help of your camera, find a harmonious color scheme from any two colors, then search and compare paint colors from a different brands by mixing and matching tints and shades.  Use your camera to see what a wall would look like with different paint colors."
        appStoreUrl="https://apps.apple.com/us/app/color-harmonizer/id6479611821"
        playStoreUrl="https://play.google.com/store/apps/details?id=com.clarkbarrett101.ColorHarmonizer"
      />
    </div>
  );
}

export default App;
