"use client";

import { useState } from "react";

export type LocationDate = {
    latitude: number;
    longitude: number;
};

export default function useLocation() {
    const [location, setLocation] = useState<LocationDate | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const requestLocation = () => {
        if (!navigator.geolocation){
            setError("Your browser doesn't support geolocation.");
            return;
        }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
        (position) => {
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });

            setLoading (false);

        },
        () => {
            setError("Location permission denied.");
            setLoading(false);
        }
    );

    };

    return {
        location,
        loading,
        error,
        requestLocation,
    };

}