import React from "react"
import {
  Bootstrap,
  Calendar3,
  CpuFill,
  Facebook,
  GeoFill,
  House,
  Instagram,
  Linkedin,
  Speedometer2,
  Toggles2,
  Tools,
} from "react-bootstrap-icons"
import Image from "../Images/Images"

const Items = [
  {
    image: "member1.jpg",
    name: "Divya",
  },
  {
    image: "member2.jpg",
    name: "Bharti",
  },
  {
    image: "member3.jpg",
    name: "Bill Gates",
  },
  {
    image: "member4.jpg",
    name: "John Doe",
  },
]

const Team = () => {
  return (
    <div className="container text-center py-5">
      <h2 class="pb-2 border-bottom text-center">Team Members</h2>
      <div className="row justify-content-center">
        {Items.map((item, i) => {
          return (
            <div key={i} className="col-lg-3 col-md-6 col-sm-12">
              <div className="card card-body mb-4">
                <Image
                  className="d-block mx-lg-auto img-fluid"
                  style={{ margin: "0 auto",
                    height: "200px",
                    width: "200px",
                    borderRadius: "100%",
                  }}
                  filename={item.image}
                  alt="1"
                />
                <h3 className="m-2">{item.name}</h3>

                <ul class="list-unstyled justify-content-center d-flex mb-0">
                  <li class="m-3">
                    <Facebook />
                  </li>
                  <li class="m-3">
                    <Instagram />
                  </li>
                  <li class="m-3">
                    <Linkedin />
                  </li>
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Team
