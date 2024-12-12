import logo from "./logo.svg";
import "./App.css";
import ChiqueLogo from "./ChiqueLogo";
import AppCard from "./AppCard";
import { useState } from "react";

function App() {
  document.title = "Software Chique";
  const [page, setPage] = useState(0);
  const buttonStyle = {
    padding: "10px",
    margin: "10px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(135deg, #f8f 0%, #8ff 100%)",
    color: "rgba(0, 0, 0, 0.4)",
    fontSize: "1.5em",
  };
  return (
    <div
      className="Container"
      style={{
        background: "linear-gradient(135deg, #f8f 0%, #8ff 100%)",
        width: "100%",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ChiqueLogo width={200} />
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <button
          style={{
            width: "300px",
            padding: "10px",
            margin: "10px",
            borderRadius: "10px",
            border: "none",
            background:
              page === 0
                ? "linear-gradient(135deg, #80f 0%, #0df 100%)"
                : "linear-gradient(135deg, #faf 0%, #aff 100%)",
            color: page === 0 ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 0.8)",
            fontSize: "1.5em",
            border: page == 0 ? "1px solid white" : "none",
          }}
          onClick={() => setPage(0)}
        >
          Apps
        </button>
        <button
          style={{
            width: "300px",
            padding: "10px",
            margin: "10px",
            borderRadius: "10px",
            border: "none",
            background:
              page === 1
                ? "linear-gradient(135deg, #80f 0%, #0df 100%)"
                : "linear-gradient(135deg, #faf 0%, #aff 100%)",
            color:
              page === 1 ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)",
            fontSize: "1.5em",
            border: page == 1 ? "1px solid white" : "none",
          }}
          onClick={() => setPage(1)}
        >
          Games
        </button>
      </div>
      {page === 0 ? (
        <>
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
          <AppCard
            name={"Light Thermometer"}
            appIcon={"./Thermometer_Icon.png"}
            images={[
              "./ThermometerSC1.png",
              "./ThermometerSC2.png",
              "./ThermometerSC3.png",
              "./ThermometerSC4.png",
              "./ThermometerSC5.png",
            ]}
            description="Use your device's front camera and screen to match the ambient light color temperature in kelvin.  Save temperatures for later and use your device as a pocket light booth.  Perfect tool for interior designers and decorators looking to view their materials in lighting conditions of specific spaces."
            appStoreUrl="https://apps.apple.com/us/app/light-thermometer/id6503952940"
          />
          <AppCard
            name={"What's Next To Do?"}
            appIcon={"./WhatsNext_Icon.png"}
            images={[
              "./WhatsNext_SC1.png",
              "./WhatsNext_SC2.png",
              "./WhatsNext_SC3.png",
              "./WhatsNext_SC4.png",
              "./WhatsNext_SC5.png",
              "./WhatsNext_SC6.png",
              "./WhatsNext_SC7.png",
            ]}
            description={
              "The perfect to do list for people struggle to focus or stay on task.  A unique to do list app that allows you to set both a priority and deadline on your tasks then have your to do list sorted based on both.  Additionally, split your tasks by the time required so you can fill gaps in your schedule.  Customize the color schemes, icons, and labels to meet the needs of your lifestyle."
            }
            appStoreUrl={
              "https://apps.apple.com/us/app/whats-next-to-do/id6670773190"
            }
          />
          <AppCard
            name={"Just 5 Today"}
            appIcon={"./Just5_Icon.webp"}
            images={[
              "./Just5_SC1.png",
              "./Just5_SC2.png",
              "./Just5_SC3.png",
              "./Just5_SC4.png",
              "./Just5_SC5.png",
              "./Just5_SC6.png",
              "./Just5_SC7.png",
              "./Just5_SC8.png",
            ]}
            description={
              "Engaging graphics and sound effects make your day-to-day activities more exciting.  Designed specifically for those who struggle with focusing on tasks or getting motivated, like those with ADHD, depression, or high anxiety.  Spotlight just 5 tasks for that day to not get overwhelmed with a long list of chores."
            }
            appStoreUrl={
              "https://apps.apple.com/us/app/just-5-today/id1663433463"
            }
            playStoreUrl={
              "https://play.google.com/store/apps/details?id=com.Barrett.FocusList"
            }
          />
        </>
      ) : (
        <AppCard
          name={"Neoplasm"}
          appIcon={"./Neoplasm_Icon.webp"}
          images={[
            "./Neoplasm_SC1.png",
            "./Neoplasm_SC2.png",
            "./Neoplasm_SC3.png",
            "./Neoplasm_SC4.png",
            "./Neoplasm_SC5.png",
          ]}
          description={
            "Play as a microscopic nanobot fighting back against malignant cells throughout the body. Each level is a different organ to explore. Equip your nanobot with a variety of weapons each with unique effects and experiment with different weapon combinations."
          }
          appStoreUrl={"https://apps.apple.com/us/app/neoplasm/id6448896842"}
          playStoreUrl={
            "https://play.google.com/store/apps/details?id=com.barrett.neoplasm"
          }
        />
      )}
    </div>
  );
}

export default App;
