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
  const [imgOrder, setImgOrder] = useState(images);
  const height = window.innerHeight * 0.7;
  function slideshow() {
    let imgs = [];

    for (let i = 0; i < images.length; i++) {
      let index = (imagePos + i) % images.length;
      imgs.push(
        <img
          src={images[index]}
          style={{
            objectFit: "cover",
            margin: "10px",
            height: height * 0.6,
          }}
          alt="image"
          className="AppImage"
        />
      );
    }
    return imgs;
  }
  return (
    <div
      className="AppCard"
      style={{
        padding: "10px",
        flex: 1,
        height: height,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "50%",
          alignSelf: "center",
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
              fontSize: "22px",
              color: "black",
              margin: "0px",
              fontFamily: "bookman",
            }}
          >
            {name}
          </h3>
          <p
            style={{
              fontSize: "18px",
              color: "black",
              margin: "0px",
              fontFamily: "bookman",
              textAlign: "center",
              textJustify: "inter-word",
              padding: "10px",
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
          width: "100%",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {slideshow()}
      </div>
    </div>
  );
}
