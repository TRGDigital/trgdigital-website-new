"use client"

import dynamic from "next/dynamic"

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
  loading: () => (
    <div className="h-96 rounded-md border border-border bg-surface-alt animate-pulse" />
  ),
})

export { MDEditor }
