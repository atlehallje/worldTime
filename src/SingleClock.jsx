import { useEffect, useState } from "react";
import { timeZones } from "./timeZones";
import { useParams } from "react-router-dom";

export default function SingleClock({ city, timeZone, country }) {
    const { cityKey } = useParams();

    const [time, setTime] = useState(
        new Date().toLocaleTimeString("sv-SE", {
            timeZone: timeZones[cityKey].timeZone,
        })
    );

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setTime(
                date.toLocaleTimeString("sv-SE", {
                    timeZone: timeZones[cityKey].timeZone,
                })
            );
        }, 1000);
    }, []);

    return (
        <div
            className="flex md:flex-col justify-between items-center 
    md:items-start p-6 bg-slate-200 rounded-md w-full md:w-auto mb-4 md:inline-block"
        >
            <div className="text-2xl text-gray-600">
                {timeZones[cityKey].city}
            </div>
            <div className="text-blue-700 text-sm font-bold md:mb-4">
                {timeZones[cityKey].country.toUpperCase()}
            </div>
            <div className="text-4xl text-gray-900 font-semibold font-mono">
                {time}
            </div>
        </div>
    );
}