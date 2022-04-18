import React, { Component } from "react"
import { Link } from "gatsby"
import Image from "../Images/Images"

const getCategories = items => {
  let categoryItems = items.map(item => {
    return item.node.frontmatter.category
  })
  let uniqueCategories = new Set(categoryItems)
  let categories = Array.from(uniqueCategories)
  categories = ["All Items", ...categories]
  return categories
}

class BlogItems extends Component {
  state = {
    togglelayout: true,
    items: this.props.items.allMdx.edges,
    blogPostItems: this.props.items.allMdx.edges,
    categories: getCategories(this.props.items.allMdx.edges),
    selectedItem:
      getCategories(this.props.items.allMdx.edges) &&
      getCategories(this.props.items.allMdx.edges)[0],
  }

  handleItems = category => {
    if (category === "All Items") {
      this.setState({
        blogPostItems: [...this.state.items],
        selectedItem: category,
      })
    } else {
      this.setState({
        blogPostItems: [
          ...this.state.items.filter(edge => {
            return edge.node.frontmatter.category === category
          }),
        ],
        selectedItem: category,
      })
    }
  }

  render() {
    return (
      <div>
        <div className="text-center mb-2">
          {this.state.categories.map((category, i) => {
            return (
              <button
                type="button"
                key={i}
                onClick={() => this.handleItems(category)}
                className={
                  this.state.selectedItem === category
                    ? "btn m-1 bg-secondary text-light shadow"
                    : "btn btn-outline-primary m-1"
                }
              >
                {category}
              </button>
            )
          })}
        </div>
        <div className="row justify-content-center">
          {this.state.blogPostItems.map((item, i) => (
            <div key={i} className="col-lg-3 col-md-4 col-sm-6">
              <Link to={`/shop${item.node.fields.slug}`}>
                <div className="card shadow mb-4">
                  <div className="figure">
                    <Image
                      className="m-4"
                      filename={`${item.node.frontmatter.image}.jpg`}
                      style={{
                        height: "350px",
                        width: "auto",
                        margin: "0 auto",
                        borderRadius: "10px",
                      }}
                      alt={item.node.frontmatter.title}
                    />
                    <div className="figcaption-on">
                      <h5 className="fw-bold text-light">
                        {item.node.frontmatter.title}
                      </h5>
                      <h5 className="fw-bold text-warning">
                        Rs {item.node.frontmatter.price}
                      </h5>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default BlogItems
