import React from "react";

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-slate-900">{title}</h1>

      {subtitle && <p className="mt-2 max-w-3xl text-slate-500">{subtitle}</p>}
    </div>
  );
}
