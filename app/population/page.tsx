"use client";

import { useState } from "react";
import FilterSection from "../components/FilterSection";

export default function PopulationPage() {
  // Filter state
  const [startYear, setStartYear] = useState(2015);
  const [endYear, setEndYear] = useState(2024);
  const [country, setCountry] = useState("USA");

  // Example years and countries
  const years = Array.from({ length: 10 }, (_, i) => 2015 + i);
  const countries = ["USA", "Canada", "UK", "Germany", "India"];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Population</h2>
      <FilterSection
        years={years}
        countries={countries}
        startYear={startYear}
        endYear={endYear}
        country={country}
        setStartYear={setStartYear}
        setEndYear={setEndYear}
        setCountry={setCountry}
      />
      <p>Welcome to the Population page.</p>
    </div>
  );
}