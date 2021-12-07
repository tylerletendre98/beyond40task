import React from "react";
import Star from "@material-ui/icons/Star";
import { StarOutline } from "@material-ui/icons";
import ProgressBar from "react-bootstrap/ProgressBar";
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
        <div>
          <ProgressBar now={87} variant="warning" style={{ width: "130px" }} />
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
        <div>
          <ProgressBar now={20} variant="warning" style={{ width: "130px" }} />
        </div>
        <div className="outside-label">
          <p>(230)</p>
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
        <div>
          <ProgressBar now={3} variant="warning" style={{ width: "130px" }} />
        </div>
        <div className="outside-label">
          <p>(50)</p>
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
        <div>
          <ProgressBar now={10} variant="warning" style={{ width: "130px" }} />
        </div>
        <div className="outside-label">
          <p>(5)</p>
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
        <div>
          <ProgressBar now={9} variant="warning" style={{ width: "130px" }} />
        </div>
        <div className="outside-label">
          <p>(7)</p>
        </div>
      </div>
    </div>
  );
}
