import React, { useEffect } from "react";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

type Props = {
  children: React.ReactNode;
};

export default function RtlLayout({ children }: Props) {
  useEffect(() => {
    document.dir = "rtl";
  }, []);

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}
