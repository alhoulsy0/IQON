import React from "react";

interface QertexLogoProps {
    className?: string;
    animated?: boolean;
}

export const QertexLogo = ({ className = "w-10 h-10", animated = true }: QertexLogoProps) => {
    return (
        <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* --- Prism Singularity Container --- */}
            {/* A collection of floating shards forming a loose 'Q' */}

            <g className={`${animated ? "animate-[spin_20s_linear_infinite]" : ""} origin-center`}>

                {/* Shard 1 (Top Left) */}
                <path
                    d="M14 6L22 10L16 18L10 12L14 6Z"
                    fill="white"
                    fillOpacity="0.8"
                />

                {/* Shard 2 (Top Right) */}
                <path
                    d="M26 8L32 14L28 22L20 16L26 8Z"
                    fill="white"
                    fillOpacity="0.6"
                />

                {/* Shard 3 (Bottom Left) */}
                <path
                    d="M8 20L14 26L10 34L4 24L8 20Z"
                    fill="white"
                    fillOpacity="0.7"
                />

                {/* Shard 4 (Bottom Right - The Body) */}
                <path
                    d="M26 24L30 20L34 28L28 28L26 24Z"
                    fill="white"
                    fillOpacity="0.5"
                />

                {/* --- The Red Vertex (Singularity Tail) --- */}
                {/* The defining shard that completes the Q and represents the Core/Vertex */}
                <path
                    d="M22 24L34 36L28 22L22 24Z"
                    fill="#E60023"
                    className="drop-shadow-[0_0_8px_rgba(230,0,35,0.8)]"
                />
            </g>

            {/* --- The Singularity Point (Center) --- */}
            <circle
                cx="20"
                cy="20"
                r="2"
                fill="white"
                className={animated ? "animate-pulse" : ""}
            />
            {/* Orbit rings */}
            <circle cx="20" cy="20" r="16" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" strokeDasharray="4 4" />

        </svg>
    );
};
