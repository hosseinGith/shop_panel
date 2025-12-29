import React from "react";

export default function User({ job, name }: { job: string; name: string }) {
  return (
    <div>
      <div className="w-20 rounded-full h-20 bg-blue-500"></div>
      <div className="whitespace-nowrap">{name}</div>
      <div className="text-(--low-text-color)">{job}</div>
    </div>
  );
}
