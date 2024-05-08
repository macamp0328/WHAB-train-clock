"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState("");
  const [minute, setMinute] = useState("");

  useEffect(() => {
    const fetchTime = async () => {
      try {
        const response = await fetch(
          "https://worldtimeapi.org/api/timezone/America/Chicago"
        );
        const data = await response.json();
        const dateTime = new Date(data.datetime);
        const timeString = dateTime.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        });
        setTime(timeString);
        setMinute(dateTime.getMinutes().toString());
      } catch (error) {
        console.error("Failed to fetch time:", error);
      }
    };

    fetchTime();
    const interval = setInterval(fetchTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const backgroundColor =
    minute.endsWith("0") || minute.endsWith("5")
      ? "bg-green-500"
      : "bg-red-500";
  return (
    <main
      className={`h-screen flex justify-center items-center ${backgroundColor} text-black`}
    >
      <h1 className="text-9xl font-bold">{time}</h1>
    </main>
  );
}
