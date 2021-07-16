import React from "react";
import Image from "next/image";

export default function Job({ data, key, viewBy }) {
  return (
    <div className="col">
      {
        viewBy === "grid" ? (
          <div className="card shadow-sm">
            <Image
              src="/job-icon.png" // Route of the image file
              height={144} // Desired size with correct aspect ratio
              width={144} // Desired size with correct aspect ratio
              alt="Your Name"
            />

            <div className="card-body">
              <h4>{data.OBJtitle}</h4>
              <h6>{data.OBJtitleDisplay}</h6>
              <p className="card-text">
                {data.shortDesc}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Instant Apply
                  </button>
                </div>
                <small className="text-muted">{data.postedDate}</small>
              </div>
            </div>
          </div>
        ) : (
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <Image
                  src="/job-icon.png" // Route of the image file
                  height={180} // Desired size with correct aspect ratio
                  width={400} // Desired size with correct aspect ratio
                  alt="Your Name"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{data.OBJtitle}</h5>
                  <p className="card-text">{data.OBJtitleDisplay}</p>
                  <p className="card-text"><small className="text-muted">Last updated {data.shortDesc} ago</small></p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}
