import React, { PropsWithChildren } from "react";

/**
 * Page de layout
 */
const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Hackathon Asynconf
      </h1>
      <div className="flex flex-col items-center justify-center h-screen">
        {children}
      </div>
    </div>
  );
};
export default Layout;
