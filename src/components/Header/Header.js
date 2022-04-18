import React from "react"
import { Link } from "gatsby"
import { Cart } from "react-bootstrap-icons"

class Header extends React.Component {
  state = {
    items: 0,
  }

  updateItemTotal = qty => {
    this.setState({ items: qty })
  }

  componentDidMount() {
    if (window.Snipcart) {
      //this allows it to work when switching pages
      var count = window.Snipcart.api.items.count()
      this.updateItemTotal(count)

      //this allows it to work when you add or change items
      window.Snipcart.subscribe("cart.closed", () => {
        var count = window.Snipcart.api.items.count()
        this.updateItemTotal(count)
      })

      //this allows it to work on refreshing the page
      window.Snipcart.subscribe("cart.ready", data => {
        var count = window.Snipcart.api.items.count()
        this.updateItemTotal(count)
      })
    }
  }

  componentWillUnmount() {
    window.Snipcart.unsubscribe("cart.closed")
    window.Snipcart.unsubscribe("cart.ready")
  }

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        aria-label="Fifth navbar example"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            PROJECT2022
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample05"
            aria-controls="navbarsExample05"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample05">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link className="fw-bold" to="/">
                {" "}
                <li className="btn text-warning fw-bold">Home </li>
              </Link>

              <Link className="fw-bold" to="/shop">
                {" "}
                <li className="btn text-warning fw-bold">Shop</li>{" "}
              </Link>

              <Link className="fw-bold" to="/contact">
                <li className="btn text-warning fw-bold"> Contact</li>
              </Link>

              <Link className="fw-bold" to="/blog">
                <li className="btn text-warning fw-bold"> Blog</li>
              </Link>
            </ul>
            <div className="snipcart-summary">
              <button className="btn btn-disabled snipcart-checkout">
                {" "}
                <Cart fill="#ffa900" size="30" />
              </button>

              <strong className="badge bg-warning text-dark">
                {this.state.items}
              </strong>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
