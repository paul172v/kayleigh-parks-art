import React from "react";

import classes from "./Artwork.module.scss";

const Artwork = (props) => {
  return (
    <div className={classes.grid}>
      <div className={classes["image-wrapper"]}>
        <img
          className={classes.image}
          src={`/imgs/${props.image}`}
          alt="painting"
        />
      </div>

      <div
        className={
          props.dimensions === "120cm x 80cm"
            ? classes["text-wrapper"]
            : classes["text-wrapper-tall"]
        }
      >
        <h2 className={classes.heading}>{props.title}</h2>
        <p className={classes.specification}>Dimensions: {props.dimensions}</p>
        <p className={classes.specification}>Concept: {props.concept}</p>
        <p className={classes.specification}>Year: {props.year}</p>
        <p className={classes.paragraph}>{props.description}</p>
        {props.sold === "sold" && (
          <div className={classes.sold}>
            <p>SOLD</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Artwork;
