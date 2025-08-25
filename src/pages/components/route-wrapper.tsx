"use client"

import { BrowserRouter } from "react-router"
import type React from "react"

interface RouterWrapperProps {
  children: React.ReactNode
}

export function RouterWrapper({ children }: RouterWrapperProps) {
  return <BrowserRouter>{children}</BrowserRouter>
}
