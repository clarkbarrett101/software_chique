import React, { useEffect, useState } from "react";
export default function AppCard({
  name,
  appIcon,
  images,
  description,
  appStoreUrl,
  playStoreUrl,
}) {
  const [slideOffset, setSlideOffset] = useState(10);
  const [imagePos, setImagePos] = useState(0);
  const width = window.innerWidth / 4;
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideOffset((slideOffset) => {
        if (slideOffset >= width) {
          setImagePos((imagePos) => imagePos + 0.5);
          return 0;
        } else {
          return slideOffset + 1;
        }
      });
    }, 10);
    return () => clearInterval(interval);
  }, []);
  function slideshow() {
    let imgs = [];

    for (let i = 0; i < images.length; i++) {
      imgs.push(
        <img
          src={images[i]}
          style={{
            width: width,
            height: width * 2.2,
            objectFit: "cover",
            position: "absolute",
            transform: `translateX(${
              slideOffset + ((i + imagePos) % images.length) * width - width
            }px)`,
          }}
          alt="image"
          className="AppImage"
        />
      );
    }
    return imgs;
  }
  return (
    <div className="AppCard">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <img
          src={appIcon}
          alt="appIcon"
          style={{
            width: "100px",
            height: "100px",
            padding: "10px",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              color: "black",
              margin: "0px",
              fontFamily: "bookman",
            }}
          >
            {name}
          </h3>
          <p
            style={{
              fontSize: "12px",
              color: "black",
              margin: "0px",
              fontFamily: "bookman",
              textAlign: "center",
              textJustify: "inter-word",
            }}
          >
            {description}
          </p>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", padding: "10px" }}
        >
          <a href={appStoreUrl} target="_blank" rel="noreferrer">
            <img
              src={"./appstore.png"}
              alt="appstore"
              style={{
                width: "50px",
                height: "50px",
              }}
            />
          </a>
          {playStoreUrl ? (
            <a href={playStoreUrl} target="_blank" rel="noreferrer">
              <img
                src={"./playstore.svg"}
                alt="playstore"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
            </a>
          ) : null}
        </div>
      </div>
      {slideshow()}
    </div>
  );
}
