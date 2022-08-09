import React from "react";

export default function Layout({ title, children }: ILayout) {
  return (
    <div className="py-4 px-10 h-screen w-screen bg-green-600">
      <div className="text-center text-2xl font-bold ">{title}</div>
      <div className="text-white text-xl">{children}</div>
    </div>
  );
}
interface ILayout {
  title: string;
  children: React.ReactNode;
}
