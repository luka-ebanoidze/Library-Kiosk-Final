import { PropsWithChildren, useState } from "react";

import { AuthContext } from "../../context/AuthContext";
import { TAuthorizationStage } from "../../types/auth.types";

export function AuthProvider({ children }: PropsWithChildren) {
  const [status, setStatus] = useState<TAuthorizationStage>(
    TAuthorizationStage.UNAUTHORIZED
  );

  return (
    <AuthContext.Provider value={{ status, setStatus }}>
      {children}
    </AuthContext.Provider>
  );
}
