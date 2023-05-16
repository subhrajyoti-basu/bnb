import React from "react";

interface IH4 {
  children: React.ReactNode;
}

const H4: React.FC<IH4> = ({ children }) => {
  return (
    <h4
      className="
      scroll-m-20 text-xl font-semibold tracking-tight
     "
    >
      {children}
    </h4>
  );
};

export default H4;
