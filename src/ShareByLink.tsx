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
      <ShareByLinkContent orderId={orderId} />
    </QueryClientProvider>
 )
}

ShareByLink.displayName = "ShareByLink";
