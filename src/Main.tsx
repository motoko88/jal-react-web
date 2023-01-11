import React, { useEffect, useState } from "react";
import "./Main.css";
import { TravelCard } from "./components/TravelCard";
import { ReactComponent as Logo } from "./assets/jal.svg";
import { Footer } from "./Footer";

interface Destination {
  name: string;
  description: string;
  price: number;
  date: string;
}

/**
 * Main
 */
export const Main = () => {
  const [release, setRelease] = useState(document.cookie);
  const [backgroundImage, setBackgroundImage] = useState<string>("sky");
  const [destinations, setDestinations] = useState<Destination[]>([]);
  useEffect(() => {
    fetch("destinations.json")
      .then((response: Response) => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then((json) => {
        setDestinations(json);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <div className="app">
      {backgroundImage && (
        <img
          src={`http://localhost:3000/${backgroundImage}.jpg`}
          alt={backgroundImage}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: -1,
            height: "100vh",
            width: "100vw",
            maxWidth: "100vw",
            objectFit: "cover",
            transition: "opacity 2s ease-in"
          }}
        />
      )}
      <div className="body-content">
        <div className="left">
          <div
            style={{
              width: "100%"
            }}
          >
            <Logo
              style={{
                width: "50%"
              }}
            />
          </div>
          <div
            style={{
              fontSize: "1.5em",
              fontWeight: "bold",
              color: "pink"
            }}
          >
            <p>
              Winter is in the air. Let&apos;s have a great and exciting Winter!
            </p>
          </div>
        </div>
        <div className="right">
          {destinations.map((destination, i) => (
            <TravelCard
              key={i}
              name={destination.name}
              description={destination.description}
              price={destination.price}
              date={destination.date}
              onHover={(name: string) => {
                if (name) {
                  setBackgroundImage(name);
                }
              }}
              style={{
                transform: `translate(0, ${
                  backgroundImage === destination.name.toLowerCase()
                    ? "-10px"
                    : 0
                })`,
                opacity:
                  backgroundImage != destination.name.toLowerCase() ? 0.9 : 1
              }}
            />
          ))}
        </div>
      </div>
      <Footer />
      {!release && (
        <div id="accept-cookies">
          <h2
            style={{
              textAlign: "center"
            }}
          >
            Cookie Policy
          </h2>
          <div id="accept-cookies-content">
            <p>
              We use essential cookies to make our site work. With your consent,
              we may also use non-essential cookies to improve user experience
              and analyze website traffic. By clicking “Accept,“ you agree to
              our website&apos;s cookie use as described in our Cookie Policy.
              You can change your cookie settings at any time by clicking
              “Preferences.”
            </p>
            <div>
              <button
                onClick={() => {
                  setRelease("true");
                  document.cookie = "true";
                }}
              >
                Preferences
              </button>
              <button
                onClick={() => {
                  setRelease("true");
                  document.cookie = "true";
                }}
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
