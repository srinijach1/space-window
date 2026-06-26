type InfoCardProps = {
    title: string;
    emoji: string;
    value: string;
};

export default function InfoCard ({
    title,
    emoji,
    value,
}: InfoCardProps) {
    return (
        <div className = "rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition hover:scale-[1.02] hover:bg-white/10">
            <div className="text-4xl">{emoji}</div>
            
            <h2 className="mt-4 text-xl font-semibold">
                {title}
            </h2>

            <p className="mt-2 text-gray-300">
                {value}
            </p>

        </div>
    );
}