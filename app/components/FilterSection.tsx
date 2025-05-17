import { Dispatch, SetStateAction } from "react";

interface FilterSectionProps {
  years: number[];
  countries: string[];
  startYear: number;
  endYear: number;
  country: string;
  setStartYear: Dispatch<SetStateAction<number>>;
  setEndYear: Dispatch<SetStateAction<number>>;
  setCountry: Dispatch<SetStateAction<string>>;
}

export default function FilterSection({
  years,
  countries,
  startYear,
  endYear,
  country,
  setStartYear,
  setEndYear,
  setCountry,
}: FilterSectionProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-6 items-end">
      <div>
        <label className="block text-sm font-medium mb-1">Start Year</label>
        <select
          className="border rounded px-2 py-1"
          value={startYear}
          onChange={(e) => setStartYear(Number(e.target.value))}
          title="Start Year"
        >
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">End Year</label>
        <select
          className="border rounded px-2 py-1"
          value={endYear}
          onChange={(e) => setEndYear(Number(e.target.value))}
          title="End Year"
        >
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Country</label>
        <select
          className="border rounded px-2 py-1"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          title="Country"
        >
          {countries.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
