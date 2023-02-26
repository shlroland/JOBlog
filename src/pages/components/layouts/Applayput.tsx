import { type FCWithChildren } from "react";
import { Header } from "../header";

export const Applayout: FCWithChildren = ({ children }) => {
  return (
    <div className="h-full min-h-full">
      <Header></Header>
      <main className={`min-h-[calc(100%-64px)] relative z-1`}>
        {children}
      </main>
    </div>
  );
};
