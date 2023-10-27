import React, { FC, useCallback, useState } from "react";

import Button from "./Button/Button"
import { useMutation } from "react-query";

interface ShareByLinkContentProps {
  orderId: string;
}

export const ShareByLinkContent: FC<ShareByLinkContentProps> =
 ({orderId}) =>
  {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const {
    mutateAsync: handleGetLink,
  } = useMutation(['handleGetLink'], async () => {
    console.log('okok')
    const response = await fetch(
      'https://dev-customer-api.revers.io/api/v1/links',{
        method: "POST",
        body: JSON.stringify(orderId)
      }
    )

    console.log('response', response)

    return undefined;
  });

  const handleClick = useCallback(
    () => {
      setIsButtonClicked(true);
      handleGetLink()
    },
    [handleGetLink],
  );

  return (
    <div className="shareByLinkContent">
      <Button onClick={handleClick}>Share by link</Button>
      {isButtonClicked ? <div>Value </div> : null}
    </div>
  )
}

ShareByLinkContent.displayName = "ShareByLinkContent";
