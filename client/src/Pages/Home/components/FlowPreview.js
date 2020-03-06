import React from "react";


function FlowPreview() {
    return (
        <div className="container">
  <div className="row">
    <div className="col">
      <h2>Name of Flow</h2>
      <img
        className="b3" alt=""
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwiki.tripwireinteractive.com%2Fimages%2F4%2F47%2FPlaceholder.png&f=1&nofb=1"
      />
    </div>
    <div className="col">
      <div className="card">
        <div className="card-body">
          <p>Creator</p>
          <p>Difficulty</p>
          <p>Rating</p>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <div className="row">
    <div className="col">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <h2>Pose</h2>
              <ol>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ol>
            </div>
            <div className="col">
              <h2>Duration</h2>
              <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card" />
      <h2>Teacher Notes</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ad
        impedit debitis numquam voluptatibus, excepturi quos placeat magnam
        incidunt, illo fugit, nemo temporibus recusandae corporis! Quasi quidem
        id exercitationem officia?
      </p>
    </div>
  </div>
</div>

    )
}

export default FlowPreview;