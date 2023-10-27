import React, { FC, useCallback, useState } from "react";

import Button from "./Button/Button"


export const ShareByLink: FC =
 () =>
  {
  const [randomNumber, setRandomNumber] = useState(0);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const handleClick = useCallback(
    () => {
      setIsButtonClicked(true);
      setRandomNumber(Math.random() * 100)
    },
    [],
  );

  return (
    <>
      <Button onClick={handleClick}>Share by link</Button>
      {isButtonClicked ? <div>Value : {randomNumber}</div> : null}
    </>
  )
}

ShareByLink.displayName = "ShareByLink";
