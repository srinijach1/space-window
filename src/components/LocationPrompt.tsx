"use client";

type Props = {
    onUseLocation: () => void;
    loading: boolean;
}

export default function LocationPrompt ({ onUseLocation, loading }: Props) {
    return (
        
        <div className="mx-auto mt-12 max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md">
            <h2 className ="text-3xl font-semibold">
                Welcome to Space Window.
            </h2>

            <p className="mt-4 text-gray-300">
                To show you the Moon, planets, ISS flyovers, and sky conditions, we need your location.
            </p>

            <button
                onClick={onUseLocation}
                disabled={loading}
                className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500 disabled: opacity-50">
                  {loading ? "Getting location..." : "📍 Use My Location"}
            </button>

            <p className="mt-6 text-sm text-gray-400">
                We respect your privacy. Your location is only used to calculate your local sky. We don&39;t store or share your data.
            </p>
        </div>
    )

}