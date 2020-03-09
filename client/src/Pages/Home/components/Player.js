import React from "react";

function Player() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h2>Name of Flow</h2>
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <img
                        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.shape.mdpcdn.com%2Fsites%2Fshape.com%2Ffiles%2Fstyles%2Fslide%2Fpublic%2F2._side-plank-420x420_0.jpg&f=1&nofb=1"
                        alt="" />
                    </div>
                    <div className="col-5">
                      <p>Name of Pose</p>
                      <p>Creator</p>
                      <p>Timer Current Pose</p>
                      <p>Timer Overall</p>
                      <p>Teacher Notes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="card">
        <div className="card-body">
          <h2 className="text-center">Upcoming Poses</h2>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h4>Name of Pose</h4>
                  <img
                    className="centered"
                    src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.shape.mdpcdn.com%2Fsites%2Fshape.com%2Ffiles%2Fstyles%2Fslide%2Fpublic%2F2._side-plank-420x420_0.jpg&f=1&nofb=1"
                    alt="" />
                  <p>Pose Duration</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h4>Name of Pose</h4>
                  <img
                    className="centered"
                    src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.shape.mdpcdn.com%2Fsites%2Fshape.com%2Ffiles%2Fstyles%2Fslide%2Fpublic%2F2._side-plank-420x420_0.jpg&f=1&nofb=1"
                    alt="" />
                  <p>Pose Duration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Player;