import { PropsWithChildren } from "react";

import { AuthProvider } from "./AuthProvider";

export const Providers = ({ children }: PropsWithChildren) => (
  <AuthProvider>{children}</AuthProvider>
);
