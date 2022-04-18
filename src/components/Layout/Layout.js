import React from "react"
import PropTypes from "prop-types"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "../../styles/custom-style.scss"

class Layout extends React.Component {
  componentDidMount() {
    if (window.Snipcart) {
      window.Snipcart.api.configure("show_continue_shopping", true)
    }
  }

  render() {
    const { children } = this.props
    return (
      <div className="container-fluid p-0">
        <Header />
        {children}
        <Footer />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
