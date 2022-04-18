import React from "react"
import Layout from "../components/Layout/Layout"
import ContactUs from "../components/ContactUs/ContactUs"

const Contact = () => {
  return (
    <Layout>
      <div className="container py-5">
        <h2 className="fat-text pb-2 border-bottom text-center">Contact</h2>{" "}
        <ContactUs />
      </div>
    </Layout>
  )
}

export default Contact
