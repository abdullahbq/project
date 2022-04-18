import React from "react"
import Image from "../Images/Images"

const imgs = [
  {
    author: "The Lazy Artist Gallery",
    tag: "People",
    src: "blog1",
  },
  {
    author: "Daria Shevtsova",
    tag: "Food",
    src: "blog2",
  },
  {
    author: "Kasuma",
    tag: "Animals",
    src: "blog3",
  },
  {
    author: "Dominika Roseclay",
    tag: "Plants",
    src: "blog1",
  },
  {
    author: "Scott Webb",
    tag: "Plants",
    src: "blog2",
  },
  {
    author: "Jeffrey Czum",
    tag: "People",
    src: "blog3",
  },
  {
    author: "Dominika Roseclay",
    tag: "Food",
    src: "blog2",
  },
  {
    author: "Valeria Boltneva",
    tag: "Animals",
    src: "blog3",
  },
]

const filters = [
  { name: "People", status: false },
  { name: "Animals", status: false },
  { name: "Plants", status: false },
  { name: "Food", status: false },
]

const Filters = ({ onClickAll, all, onClick, filters }) => (
  <div className="text-center mb-2">
    <button
      type="button"
      className={
        all
          ? "btn m-1 bg-secondary text-light shadow"
          : "btn btn-outline-primary m-1"
      }
      onClick={onClickAll}
    >
      All
    </button>
    {filters.map((filter, i) => (
      <button
        type="button"
        key={i}
        className={
          filter.status
            ? "btn m-1 bg-secondary text-light shadow"
            : "btn btn-outline-primary m-1"
        }
        data-index={i}
        onClick={onClick}
      >
        {filter.name}
      </button>
    ))}
  </div>
)

const Cards = ({ imgs }) => (
  <div className="row justify-content-center">
    {imgs.map((img, i) => (
      <div key={i} className="col-lg-3 col-md-4 col-sm-6">
        <div className="card shadow mb-4">
          <div className="figure">
            <Image
              filename={`${img.src}.jpg`}
              style={{ borderRadius: "10px" }}
              alt={img.src}
            />
            <div className="figcaption">
              <h5 className="fw-bold text-light">{img.author} </h5>
              <span className="text-warning">{img.tag}</span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
)

class Products extends React.Component {
  state = {
    imgs,
    filters,
    all: true,
  }

  setFilter = e => {
    e.preventDefault()
    const { filters } = this.state
    const { index } = e.currentTarget.dataset

    filters[index].status = !filters[index].status
    this.setState({
      filters,
    })

    this.updateFilters()
    this.updateImgs()
  }

  setAll = () => {
    const { filters } = this.state

    filters.forEach(filter => {
      filter.status = false
    })

    this.setState({
      all: true,
      filters,
    })
  }

  updateFilters() {
    const allFiltersTrue = filters.every(filter => filter.status === true)
    const allFiltersFalse = filters.every(filter => filter.status === false)

    if (allFiltersTrue || allFiltersFalse) {
      this.setAll()
    } else {
      this.setState({
        all: false,
      })
    }
  }

  updateImgs() {
    const { filters } = this.state
    let newImgs = []
    let a = 0

    imgs.forEach(img => {
      filters.forEach(filter => {
        if (img.tag === filter.name && filter.status === true) {
          newImgs[a] = img
          a++
        }
      })
    })

    this.setState({
      imgs: newImgs,
    })
  }

  render() {
    const { filters, all } = this.state
    return (
      <section className="projects-section">
        <div className="container py-5">
          <h2 className="fat-text pb-2 border-bottom text-center">Products</h2>
          <Filters
            onClickAll={this.setAll}
            all={all}
            onClick={this.setFilter}
            filters={filters}
          />
          {all ? <Cards imgs={imgs} /> : <Cards imgs={this.state.imgs} />}
        </div>
      </section>
    )
  }
}

export default Products
