"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import FilterSection from "../components/FilterSection";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function EconomyPage() {
  // Filter state
  const [startYear, setStartYear] = useState(2015);
  const [endYear, setEndYear] = useState(2024);
  const [country, setCountry] = useState("USA");

  // State for live GDP data
  const [gdpData, setGdpData] = useState<number[] | null>(null);
  const [gdpLabels, setGdpLabels] = useState<number[] | null>(null);
  const [loading, setLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  // Helper to get World Bank country code
  const countryCodes: Record<string, string> = {
    USA: "US",
    Canada: "CA",
    UK: "GB",
    Germany: "DE",
    India: "IN",
  };

  const fetchGdpData = useCallback(async () => {
    setLoading(true);
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    const code = countryCodes[country] || "US";
    const url = `https://api.worldbank.org/v2/country/${code}/indicator/NY.GDP.MKTP.CD?format=json&date=${startYear}:${endYear}`;
    try {
      const res = await fetch(url, { signal: controller.signal });
      const json = await res.json();
      if (Array.isArray(json) && Array.isArray(json[1])) {
        const dataArr = json[1]
          .filter((d: any) => d.value !== null)
          .reverse();
        setGdpLabels(dataArr.map((d: any) => Number(d.date)));
        setGdpData(dataArr.map((d: any) => d.value));
      } else {
        setGdpLabels([]);
        setGdpData([]);
      }
    } catch (e) {
      if (e instanceof Error && e.name !== "AbortError") {
        setGdpLabels([]);
        setGdpData([]);
      }
    } finally {
      setLoading(false);
    }
  }, [country, startYear, endYear]);

  useEffect(() => {
    fetchGdpData();
    return () => abortRef.current?.abort();
  }, [fetchGdpData]);

  // Example years and countries
  const years = Array.from({ length: 10 }, (_, i) => 2015 + i);
  const countries = ["USA", "Canada", "UK", "Germany", "India"];

  // Filtered labels for charts
  const labels = years.filter((y) => y >= startYear && y <= endYear);

  // Random data for charts
  const randomData = (n: number) => Array.from({ length: n }, () => Math.floor(Math.random() * 100 + 10));

  // Chart data
  const lineData =
    gdpData && gdpLabels && gdpData.length > 0 && gdpLabels.length > 0
      ? {
          labels: gdpLabels,
          datasets: [
            {
              label: `GDP (${country})`,
              data: gdpData,
              borderColor: "#3b82f6",
              backgroundColor: "#93c5fd",
              tension: 0.4,
            },
          ],
        }
      : {
          labels,
          datasets: [
            {
              label: `GDP Growth (${country})`,
              data: randomData(labels.length),
              borderColor: "#3b82f6",
              backgroundColor: "#93c5fd",
              tension: 0.4,
            },
          ],
        };

  const barData = {
    labels,
    datasets: [
      {
        label: `Unemployment Rate (${country})`,
        data: randomData(labels.length),
        backgroundColor: "#f59e42",
      },
    ],
  };

  const donutData = {
    labels: ["Agriculture", "Industry", "Services"],
    datasets: [
      {
        label: "Sector Share",
        data: randomData(3),
        backgroundColor: ["#10b981", "#6366f1", "#f59e42"],
      },
    ],
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Economy</h2>
      {/* Filter Section */}
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
      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded shadow p-4">
          {loading ? (
            <div className="text-center text-gray-500">Loading GDP data...</div>
          ) : (
            <Line data={lineData} options={{ responsive: true, plugins: { legend: { display: true } } }} />
          )}
        </div>
        <div className="bg-white rounded shadow p-4">
          <Bar data={barData} options={{ responsive: true, plugins: { legend: { display: true } } }} />
        </div>
        <div className="bg-white rounded shadow p-4">
          <Doughnut data={donutData} options={{ responsive: true, plugins: { legend: { display: true } } }} />
        </div>
        <div className="bg-white rounded shadow p-4 flex items-center justify-center text-gray-400">
          <span>More charts coming soon...</span>
        </div>
      </div>
    </div>
  );
}