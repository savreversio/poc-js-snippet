import { FunctionComponent, useCallback, useState } from "react";
import Button from "./Button/Button"


const ShareByLink: FunctionComponent =
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
    console.log('ok')
  return (
    <>
      <Button onClick={handleClick}>Share by link</Button>
      {isButtonClicked ? <div>Value : {randomNumber}</div> : null}
    </>
  )
}

ShareByLink.displayName = "ShareByLink";

export default ShareByLink
