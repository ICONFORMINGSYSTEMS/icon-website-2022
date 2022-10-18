import React from "react"

import SEO from "./seo"
import HeaderBasic from "./headers/headerBasic"
import FooterBasic from "./footers/footerBasic"

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <HeaderBasic />
      <main>{children}</main>
      <FooterBasic />
    </>
  )
}
