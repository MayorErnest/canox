import React from "react";

import styles from "./styles.module.css";

const Inputs = ({ type, ...rest }) => {
  return (
    <div className={styles.container}>
      <input type={type} {...rest} />
    </div>
  );
};

export { Inputs };
