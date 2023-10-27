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
  const [link, setLink] = useState(undefined);

  const {
    mutateAsync: handleGetLink,
    isLoading
  } = useMutation(['handleGetLink'], async () => {
    console.log('okok');
    const responseToken = await fetch(
      'https://dev-customer-api.revers.io/api/v1/token',{
        method: "GET",
        headers: {
          "Ocp-Apim-Subscription-Key": "e885c314c095438494986a51e5d6048a",
          "Ocp-Apim-Secret-Value": "kueteuhyCkVWDVNJpK2XK85UuX7DV8xmhAsez0SK",
        },
      }
    );
    const token = await responseToken.json();
    if (!token.value) {
      setLink(undefined)
      return;
    }

    const linkResponse = await fetch(
      'https://dev-customer-api.revers.io/api/v1/links',{
        method: "POST",
        body: JSON.stringify({orderId}),
        headers: {
          "Ocp-Apim-Subscription-Key": "e885c314c095438494986a51e5d6048a",
          "Content-Type": "application/json-patch+json",
          "Cache-Control": "no-cache",
          "Authorization": `Bearer ${token.value}`
        },
      }
    );
    const link = await linkResponse.json();

    if (!link.value) {
      setLink(undefined)
      return;
    }

    setLink(link.value)
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
      <Button onClick={handleClick} isLoading={isLoading}>Share by link</Button>
      {isButtonClicked && !isLoading ? <div>MyAccount link : {link} </div> : null}
    </div>
  )
}

ShareByLinkContent.displayName = "ShareByLinkContent";
