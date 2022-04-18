import React from "react"
import {
  Bootstrap,
  Calendar3,
  CpuFill,
  GeoFill,
  House,
  Speedometer2,
  Toggles2,
  Tools,
} from "react-bootstrap-icons"

const Items = [
  {
    icon: <Bootstrap />,
    title: "Bootstrap Title",
    description: "Bootstrap description paragraph.",
  },
  {
    icon: <Calendar3 />,
    title: "Calender 3",
    description: "Calender 3 Calender 3 Calender 3",
  },

  {
    icon: <CpuFill />,
    title: "Calender 3",
    description: "Calender 3 Calender 3 Calender 3",
  },
  {
    icon: <GeoFill />,
    title: "Calender 3",
    description: "Calender 3 Calender 3 Calender 3",
  },
  {
    icon: <House />,
    title: "Calender 3",
    description: "Calender 3 Calender 3 Calender 3",
  },
  {
    icon: <Speedometer2 />,
    title: "Calender 3",
    description: "Calender 3 Calender 3 Calender 3",
  },
  {
    icon: <Toggles2 />,
    title: "Calender 3",
    description: "Calender 3 Calender 3 Calender 3",
  },
  {
    icon: <Tools />,
    title: "Calender 3",
    description: "Calender 3 Calender 3 Calender 3",
  },
]

const Features = () => {
  return (
    <div className="container px-4 py-5">
      <h2 className="fat-text pb-2 border-bottom text-center">Features</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        {Items.map((item, i) => {
          return (
            <div key={i} className="col text-center ">
              <div className="card hover card-body shadow">
                <div
                  className="bi text-muted flex-shrink-0"
                  style={{ fontSize: "3rem" }}
                >
                  {item.icon}
                </div>

                <div>
                  <h4 className="fw-bold mb-0">{item.title}</h4>
                  <small className="text-muted">{item.description}</small>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Features
