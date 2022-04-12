import React from "react"
import Features from "../components/Features/Features"
import Hero from "../components/Hero/Hero"
import Layout from "../components/Layout/Layout"
import Team from "../components/Team/Team"
import Faq from "../components/Faq/Faq"

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Team />
      <Faq />
    </Layout>
  )
}

export default Index
