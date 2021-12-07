import React from "react";
import Star from "@material-ui/icons/Star";
import { StarOutline } from "@material-ui/icons";
import "./progressBars.css";

export default function ProgressBars() {
  return (
    <div className="progress-bar-container">
      <div className="progress-bars">
        <label>
          <Star style={{ fontSize: "16px", color: "#777" }} />
          <Star style={{ fontSize: "16px", color: "#777" }} />
          <Star style={{ fontSize: "16px", color: "#777" }} />
          <Star style={{ fontSize: "16px", color: "#777" }} />
          <Star style={{ fontSize: "16px", color: "#777" }} />
        </label>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "130px", backgroundColor: "#E89F0E" }}
          ></div>
        </div>
        <div className="outside-label">
          <p>(2940)</p>
        </div>
      </div>
      <div className="progress-bars">
        <label>
          <Star style={{ fontSize: "16px", color: "#777" }} />
          <Star style={{ fontSize: "16px", color: "#777" }} />
          <Star style={{ fontSize: "16px", color: "#777" }} />
          <Star style={{ fontSize: "16px", color: "#777" }} />
          <StarOutline style={{ fontSize: "16px", color: "#777" }} />
        </label>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "130px", backgroundColor: "#E89F0E" }}
          ></div>
        </div>
        <div className="outside-label">
          <p>(2940)</p>
        </div>
      </div>
      <div className="progress-bars">
        <label>
          <Star style={{ fontSize: "16px", color: "#777" }} />
          <Star style={{ fontSize: "16px", color: "#777" }} />
          <Star style={{ fontSize: "16px", color: "#777" }} />
          <StarOutline style={{ fontSize: "16px", color: "#777" }} />
          <StarOutline style={{ fontSize: "16px", color: "#777" }} />
        </label>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "130px", backgroundColor: "#E89F0E" }}
          ></div>
        </div>
        <div className="outside-label">
          <p>(2940)</p>
        </div>
      </div>
      <div className="progress-bars">
        <label>
          <Star style={{ fontSize: "16px", color: "#777" }} />
          <Star style={{ fontSize: "16px", color: "#777" }} />
          <StarOutline style={{ fontSize: "16px", color: "#777" }} />
          <StarOutline style={{ fontSize: "16px", color: "#777" }} />
          <StarOutline style={{ fontSize: "16px", color: "#777" }} />
        </label>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="50"
            style={{ width: "130px", backgroundColor: "#E89F0E" }}
          ></div>
        </div>
        <div className="outside-label">
          <p>(2940)</p>
        </div>
      </div>
      <div className="progress-bars">
        <label>
          <Star style={{ fontSize: "16px", color: "#777" }} />
          <StarOutline style={{ fontSize: "16px", color: "#777" }} />
          <StarOutline style={{ fontSize: "16px", color: "#777" }} />
          <StarOutline style={{ fontSize: "16px", color: "#777" }} />
          <StarOutline style={{ fontSize: "16px", color: "#777" }} />
        </label>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "130px", backgroundColor: "#E89F0E" }}
          ></div>
        </div>
        <div className="outside-label">
          <p>(2940)</p>
        </div>
      </div>
    </div>
  );
}
