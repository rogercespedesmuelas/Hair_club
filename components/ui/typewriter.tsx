"use client"

import { useEffect, useState } from "react"

export interface TextSegment {
    text: string
    bold?: boolean
}

interface TypewriterProps {
    segments: TextSegment[]
    speed?: number
    delayBetweenWords?: number
    cursor?: boolean
    cursorChar?: string
    loop?: boolean
}

export function Typewriter({
    segments,
    speed = 40,
    delayBetweenWords = 2000,
    cursor = true,
    cursorChar = "|",
    loop = true,
}: TypewriterProps) {
    const [displayTextSegments, setDisplayTextSegments] = useState<TextSegment[]>([])
    const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0)
    const [currentCharIndex, setCurrentCharIndex] = useState(0)
    const [showCursor, setShowCursor] = useState(true)
    const [isFinished, setIsFinished] = useState(false)

    useEffect(() => {
        if (isFinished) return

        const timeout = setTimeout(() => {
            const currentSegment = segments[currentSegmentIndex]

            if (currentCharIndex < currentSegment.text.length) {
                // Typing current segment
                const newSegments = [...segments.slice(0, currentSegmentIndex)]
                newSegments.push({
                    ...currentSegment,
                    text: currentSegment.text.substring(0, currentCharIndex + 1)
                })
                setDisplayTextSegments(newSegments)
                setCurrentCharIndex(currentCharIndex + 1)
            } else if (currentSegmentIndex < segments.length - 1) {
                // Move to next segment
                setCurrentSegmentIndex(currentSegmentIndex + 1)
                setCurrentCharIndex(0)
            } else {
                // Finished all segments
                if (loop) {
                    setTimeout(() => {
                        setDisplayTextSegments([])
                        setCurrentSegmentIndex(0)
                        setCurrentCharIndex(0)
                    }, delayBetweenWords)
                } else {
                    setIsFinished(true)
                }
            }
        }, speed)

        return () => clearTimeout(timeout)
    }, [currentCharIndex, currentSegmentIndex, segments, speed, loop, delayBetweenWords, isFinished])

    useEffect(() => {
        if (!cursor || isFinished) {
            if (isFinished) setShowCursor(false)
            return
        }
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev)
        }, 500)
        return () => clearInterval(cursorInterval)
    }, [cursor, isFinished])

    return (
        <div className="inline-block">
            {displayTextSegments.map((segment, i) => (
                <span key={i} className={segment.bold ? "font-bold" : ""}>
                    {segment.text}
                </span>
            ))}
            {cursor && showCursor && (
                <span className="ml-0.5 transition-opacity duration-75">
                    {cursorChar}
                </span>
            )}
        </div>
    )
}
