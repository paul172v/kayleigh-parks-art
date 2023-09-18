import React from "react";

import classes from "./SampleColumn.module.scss";

const SampleColumn = (props) => {
  return (
    <div className={classes.wrapper}>
      <img
        className={classes.image}
        src={props.image && `/imgs/${props.image}`}
        alt={props.image}
      />
      <h3 className={classes.h3}>{props.title}</h3>
      <p className={classes.paragraph}>Dimensions: {props.dimensions}</p>
      <p className={classes.paragraph}>Concept: {props.concept}</p>
      <p className={classes.paragraph}>Year: {props.year}</p>
    </div>
  );
};

export default SampleColumn;
