"use client";

// import { createContext, ReactNode, useContext } from "react";

// type Theme = {
//   primary: string;
//   secondary: string;
// };

// const defaultTheme: Theme = {
//   primary: "#007bff",
//   secondary: "#6c757d",
// };

// export const ThemeContext = createContext<Theme>(defaultTheme);

// export function useTheme() {
//   return useContext(ThemeContext);
// }

// export default function Providers({ children }: { children: ReactNode }) {
//   return (
//     <ThemeContext.Provider value={defaultTheme}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// // "use client";

import { Provider } from "react-redux";
import { store } from "@/app/state/store";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
