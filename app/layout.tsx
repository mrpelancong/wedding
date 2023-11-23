import type { Metadata } from "next";
import "./global.scss";

import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css";

import "@fontsource/averia-serif-libre"; // Defaults to weight 400
import "@fontsource/averia-serif-libre/400.css"; // Specify weight
import "@fontsource/averia-serif-libre/400-italic.css"; // Specify weight and style

import "@fontsource/berkshire-swash"; // Defaults to weight 400
import "@fontsource/berkshire-swash/400.css"; // Specify weight
import { GlobalStateProvider } from "./hooks/useGlobalState";
import Div from "./components/div";

 
export const metadata: Metadata = {
  title: 'Kiki & Tirsa',
  description: 'Wedding Invitations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {
          <GlobalStateProvider>
            <Div>{children}</Div>
          </GlobalStateProvider>
        }
      </body>
    </html>
  );
}
