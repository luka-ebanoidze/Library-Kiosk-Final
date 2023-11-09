import { createContext } from "react";

import { AuthContextValue, TAuthorizationStage } from "../types/auth.types";

export const AuthContext = createContext<AuthContextValue>({
  status: TAuthorizationStage.UNAUTHORIZED,
  setStatus: () => {},
});
