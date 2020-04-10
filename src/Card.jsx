import React, { useState } from "react";
import { ReactComponent as H10 } from "./assets/10H.svg";
import { ReactComponent as CardBack } from "./assets/Card_back.svg";
import { css } from "emotion";

const styles = hidden => css`
  position: absolute;
  transform: ${hidden ? "scaleX(0)" : "scaleX(1)"};
  transition: transform 1s;
  transition-delay: ${!hidden ? "1s" : "0s"};
  cursor: pointer;
`;

export const Card = () => {
  const [hidden, setHidden] = useState(false);
  const flip = () => setHidden(!hidden);

  return (
    <>
      <H10 className={styles(hidden)} onClick={flip} />
      <CardBack className={styles(!hidden)} onClick={flip} />
    </>
  );
};
