import * as React from "react"
import { cn } from "@/lib/utils"

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
    return <div data-slot="card-content" className={cn("px-6", className)} {...props} />
}

function LiquidCard({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div className="relative">
            <div
                data-slot="card"
                style={{ backdropFilter: 'url("#container-glass")' }}
                className={cn(
                    "bg-white/40 flex flex-col gap-6 rounded-xl border border-gray-200 py-6 shadow-xl transition-all",
                    className
                )}
                {...props}
            />
            <GlassFilter />
        </div>
    )
}

function GlassFilter() {
    return (
        <svg className="hidden">
            <defs>
                <filter id="container-glass" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
                    <feTurbulence type="fractalNoise" baseFrequency="0.02 0.02" numOctaves="1" seed="1" result="turbulence" />
                    <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
                    <feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="120" xChannelSelector="R" yChannelSelector="B" result="displaced" />
                    <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
                    <feComposite in="finalBlur" in2="finalBlur" operator="over" />
                </filter>
            </defs>
        </svg>
    );
}
export { CardContent, LiquidCard }
