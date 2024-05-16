'use client'

import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <div className="m-4">
    <h1 className="text-white">Config layout</h1>
    { children }
  </div>
}