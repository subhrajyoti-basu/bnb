import React from "react";

interface IH2 {
  children: React.ReactNode;
}

const H2: React.FC<IH2> = ({ children }) => {
  return (
    <h2
      className="
      scroll-m-20 
      pb-2 
      text-3xl 
      font-semibold 
      tracking-tight 
      transition-colors
      first:mt-0
     "
    >
      {children}
    </h2>
  );
};

export default H2;
