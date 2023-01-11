import React from "react";
import "./TravelCard.css";

interface TravelCardProps {
  name: string;
  description: string;
  price: number;
  date: string;
  style: any;
  onHover: (name: string) => void;
}

/**
 * Travel Card
 *
 */
export const TravelCard = ({
  name,
  description,
  price,
  date,
  style,
  onHover
}: TravelCardProps) => {
  return (
    <div
      className="travel-card-container"
      style={{
        ...style,
        flexDirection: "column"
      }}
      onMouseEnter={() => onHover(name.toLowerCase())}
      onMouseLeave={() => onHover("")}
    >
      <div className="description">
        <h2
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <span>{name}</span>
          <span>{date}~</span>
        </h2>
        <hr />
        <div>{description}</div>
      </div>
      <div className="price">
        <h2>${price}</h2>
        <button className="button">Book Now</button>
      </div>
    </div>
  );
};
