import React from "react"
import Accordion from "../Accordion/Accordion"

const Item = [
  {
    title: "Section 1",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
        laborum cupiditate possimus labore, hic temporibus velit dicta earum
        suscipit commodi eum enim atque at? Et perspiciatis dolore iure
        voluptatem.`,
  },
  {
    title: "Section 2",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
        reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
        quaerat iure quos dolorum accusantium ducimus in illum vero commodi
        pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
        quidem maiores doloremque est numquam praesentium eos voluptatem amet!
        Repudiandae, mollitia id reprehenderit a ab odit!`,
  },
  {
    title: "Section 3",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
        quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
        dolor ut sequi minus iste? Quas?`,
  },
]

const FAQ = () => {
  return (
    <div className="container py-5">
      <h2 className="fat-text pb-2 border-bottom text-center">FAQ</h2>
      <div className="row justify-content-center py-5">
        {Item.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  )
}

export default FAQ
