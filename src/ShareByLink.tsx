import React, { FC } from "react";
import { QueryClient, QueryClientProvider } from 'react-query';

import { ShareByLinkContent } from "./ShareByLinkContent/ShareByLinkContent";

interface ShareByLinkProps {
  orderId: string;
}


const queryClient = new QueryClient();

export const ShareByLink: FC<ShareByLinkProps> =
 ({orderId}) =>
  {
  return (
    <QueryClientProvider client={queryClient}>
      <ShareByLinkContent orderId={"f1ea8c72-2c3e-4eb9-9ba7-889a1ebe8607"} />
    </QueryClientProvider>
 )
}

ShareByLink.displayName = "ShareByLink";
