import React from "react"

function PlayerButton(){
    return(
<div className="row">
  <div className="col">
    <div className="card">
      <div className="card-body">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <img
                    alt=""
                  className="centered"
                  src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.shape.mdpcdn.com%2Fsites%2Fshape.com%2Ffiles%2Fstyles%2Fslide%2Fpublic%2F2._side-plank-420x420_0.jpg&f=1&nofb=1"
                />
              </div>
              <div className="col-5">
                <h2>Name of Flow</h2>
                <hr />
                <h4>Name of Pose</h4>
                <p>Creator</p>
                <p>Timer Current Pose</p>
                <p>Timer Overall</p>
                <p>Teacher Notes</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="row">
              <div className="col">
                <img
                    alt=""
                  className="button"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Octicons-playback-rewind.svg/800px-Octicons-playback-rewind.svg.png"
                />
              </div>
              <div className="col">
                <img
                    alt=""
                  className="button"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Octicons-playback-play.svg/800px-Octicons-playback-play.svg.png"
                />
                <img
                    alt=""
                  className="button"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Octicons-playback-pause.svg/800px-Octicons-playback-pause.svg.png"
                />
              </div>
              <div className="col" id="next">
                <img
                    alt=""
                  className="button"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Octicons-playback-fast-forward.svg/800px-Octicons-playback-fast-forward.svg.png"
                />
              </div>
            </div>
            <div className="col"></div>
            <div className="col" />
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  </div>
</div>
    )}

export default PlayerButton;