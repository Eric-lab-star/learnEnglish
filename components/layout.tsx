import React from "react";

export default function Layout({ title, children }: ILayout) {
  return (
    <div className="py-4 px-10 w-auto flex items-center flex-col bg-white">
      <div className="text-center text-2xl font-bold text-red-300 ">
        {title}
      </div>
      <div className="text-white w-96 text-xl bg-red-300 rounded-md p-5">
        {children}
      </div>
    </div>
  );
}
interface ILayout {
  title: string;
  children: React.ReactNode;
}
