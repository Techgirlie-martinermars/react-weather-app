import React from "react";

export default function DateDisplay() {
  const now = new Date();
  const options = { weekday: "long", hour: "2-digit", minute: "2-digit" };
  const formattedDate = now.toLocaleDateString("en-US", options);

  return (
    <div className="date-display">
      <strong>{formattedDate}</strong>
    </div>
  );
}
