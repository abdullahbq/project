import React from "react"
import { Bootstrap, Calendar3, CpuFill, GeoFill, House, Speedometer2, Toggles2, Tools } from "react-bootstrap-icons"

const Features = () => {
  return (
    <div class="container px-4 py-5" id="icon-grid">
      <h2 class="pb-2 border-bottom text-center">Features</h2>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        <div class="col d-flex align-items-start">
          <Bootstrap
            class="bi text-muted flex-shrink-0 me-3"
            style={{ height: "50px", width: "50px" }}
          />
          <div>
            <h4 class="fw-bold mb-0">Featured title</h4>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <CpuFill
            class="bi text-muted flex-shrink-0 me-3"
            style={{ height: "50px", width: "50px" }}
          />
          <div>
            <h4 class="fw-bold mb-0">Featured title</h4>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <Calendar3
            class="bi text-muted flex-shrink-0 me-3"
            style={{ height: "50px", width: "50px" }}
          />
          <div>
            <h4 class="fw-bold mb-0">Featured title</h4>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <House class="bi text-muted flex-shrink-0 me-3"
            style={{ height: "50px", width: "50px" }}/>
           <div>
            <h4 class="fw-bold mb-0">Featured title</h4>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <Speedometer2 class="bi text-muted flex-shrink-0 me-3"
            style={{ height: "50px", width: "50px" }}/>
          <div>
            <h4 class="fw-bold mb-0">Featured title</h4>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <Toggles2 class="bi text-muted flex-shrink-0 me-3"
            style={{ height: "50px", width: "50px" }}/>
           <div>
            <h4 class="fw-bold mb-0">Featured title</h4>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <GeoFill class="bi text-muted flex-shrink-0 me-3"
            style={{ height: "50px", width: "50px" }}/>
           <div>
            <h4 class="fw-bold mb-0">Featured title</h4>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <Tools class="bi text-muted flex-shrink-0 me-3"
            style={{ height: "50px", width: "50px" }}/>
          <div>
            <h4 class="fw-bold mb-0">Featured title</h4>
            <p>Paragraph of text beneath the heading to explain the heading.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
