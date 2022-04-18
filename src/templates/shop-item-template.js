import React from "react"
import { graphql } from "gatsby"
import Image from "../components/Images/Images"
import Layout from "../components/Layout/Layout"

class Item extends React.Component {
  state = {
    selected: this.props.data.mdx.frontmatter.customField.values[0].name,
  }

  setSelected = value => {
    this.setState({ selected: value })
  }

  // create the string required by snipcart to allow price changes based on option chosen
  createString = values => {
    return values
      .map(option => {
        const price =
          option.priceChange >= 0
            ? `[+${option.priceChange}]`
            : `[${option.priceChange}]`
        return `${option.name}${price}`
      })
      .join("|")
  }

  // calculate price based on option selected for display on item page
  updatePrice = (basePrice, values) => {
    const selectedOption = values.find(
      option => option.name === this.state.selected
    )
    return (basePrice + selectedOption.priceChange).toFixed(2)
  }

  render() {
    const item = this.props.data.mdx

    return (
      <Layout>
        <div className="container py-5">
          <div className="row justify-content-center align-items-center py-5">
            <div className="col-lg-5">
              <div className="card shadow mb-4">
                <Image
                  className="m-4"
                  style={{ margin: "0 auto", borderRadius: "10px" }}
                  filename={`${item.frontmatter.image}.jpg`}
                  alt={item.frontmatter.image}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="card shadow mb-4">
                <h2 className="card-header healthy-text pb-2 border-bottom text-center">
                  {item.frontmatter.title}
                </h2>
                <div className="card-body">
                  <p>{item.frontmatter.description}</p>
                  {item.frontmatter.customField.name}:{""}
                  <select
                    className="form-select"
                    id={item.frontmatter.customField.name}
                    onChange={e => this.setSelected(e.target.value)}
                    value={this.state.selected}
                  >
                    {item.frontmatter.customField.values.map(option => (
                      <option key={option.name}>{option.name}</option>
                    ))}
                  </select>
                </div>
                <div className="healthy-text pb-2 text-center text-danger">
                  ₹
                  {this.updatePrice(
                    item.frontmatter.price,
                    item.frontmatter.customField.values
                  )}
                </div>
                <div className="card-footer text-center">
                  <button
                    className="btn btn-warning btn-lg snipcart-add-item"
                    data-item-id={item.frontmatter.id}
                    data-item-price={item.frontmatter.price}
                    data-item-name={item.frontmatter.title}
                    data-item-description={item.frontmatter.description}
                    data-item-image={item.frontmatter.image}
                    data-item-url={
                      "https://project2022bv.netlify.app" + item.fields.slug
                    } //REPLACE WITH OWN URL
                    data-item-custom1-name={
                      item.frontmatter.customField
                        ? item.frontmatter.customField.name
                        : null
                    }
                    data-item-custom1-options={this.createString(
                      item.frontmatter.customField.values
                    )}
                    data-item-custom1-value={this.state.selected}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Item

export const query = graphql`
  query ShopItems($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      fields {
        slug
      }
      frontmatter {
        title
        description
        price
        id
        image
        customField {
          name
          values {
            name
            priceChange
          }
        }
      }
    }
  }
`
