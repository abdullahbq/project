import React from "react"
import { graphql } from "gatsby"
import Image from "../components/Images/Images"
import styled from "styled-components"
import Layout from "../components/Layout/Layout"

const Heading = styled.h1`
  font-weight: 900;
  font-size: 1.5em;
  margin: 20px 0;
`

const Price = styled.p`
  margin: 20px 0;
  padding: 10px;
  font-weight: 700;
`
const Description = styled.p`
  margin: 20px 0;
  padding: 10px;
`

const Dropdown = styled.select`
  display: block;
  padding: 10px;
  margin: 10px 0;
  font-weight: 700;
  border: none;
  outline: none;
`
const DropdownOption = styled.option`
  padding: 10px;
  font-weight: 700;
  border: none;
  outline: none;
`

const BuyButton = styled.button`
  padding: 20px;
  font-weight: 700;
`

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
        <Heading>{item.frontmatter.title}</Heading>

        <Image
          className=""
          style={{ margin: "0 auto", height: "200px", width: "100%" }}
          filename={item.frontmatter.image}
          alt={item.frontmatter.image}
        />

        <Price>
          £
          {this.updatePrice(
            item.frontmatter.price,
            item.frontmatter.customField.values
          )}
        </Price>
        <Description>{item.frontmatter.description}</Description>
        <Dropdown
          id={item.frontmatter.customField.name}
          onChange={e => this.setSelected(e.target.value)}
          value={this.state.selected}
        >
          {item.frontmatter.customField.values.map(option => (
            <DropdownOption key={option.name}>{option.name}</DropdownOption>
          ))}
        </Dropdown>

        <BuyButton
          className="snipcart-add-item"
          data-item-id={item.frontmatter.id}
          data-item-price={item.frontmatter.price}
          data-item-name={item.frontmatter.title}
          data-item-description={item.frontmatter.description}
          data-item-image={item.frontmatter.image}
          data-item-url={
            "https://gatsby-snipcart-starter.netlify.com" + item.fields.slug
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
          Add to basket
        </BuyButton>
      </Layout>
    )
  }
}

export default Item

export const query = graphql`
  query ProductItems($slug: String!) {
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
