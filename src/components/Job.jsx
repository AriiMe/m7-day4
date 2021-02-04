/** @format */

import React from "react";

export const Job = ({ location, company_url, title }) => (
  <li key={location} style={{ cursor: "pointer" }}>
    <div className="media card-body">
      <img
        className="book-image"
        style={{ height: "20px" }}
        src={company_url}
        alt="companylogo"
      />
      <div>
        <p className="card-title font-weight-bold">{location}</p>
        <p>{title}</p>
      </div>
    </div>
  </li>
);
