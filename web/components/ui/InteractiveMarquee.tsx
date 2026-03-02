"use client";

import React, { useRef, useEffect } from "react";

interface InteractiveMarqueeProps {
    children: React.ReactNode;
    speed?: number; // Time it took in CSS (e.g. 50 = 50s for 1 cycle)
    reverse?: boolean;
}

export function InteractiveMarquee({ children, speed = 50, reverse = false }: InteractiveMarqueeProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const offsetRef = useRef(0);
    const isDragging = useRef(false);
    const dragStartX = useRef(0);
    const lastOffset = useRef(0);
    const hoverPause = useRef(false);

    useEffect(() => {
        let animationId: number;
        let lastTime: number;

        const animate = (time: number) => {
            if (!lastTime) lastTime = time;
            const deltaTime = time - lastTime;
            lastTime = time;

            if (containerRef.current && !isDragging.current && !hoverPause.current) {
                // Using robust offset logic
                const itemsCount = containerRef.current.children.length;
                if (itemsCount > 0) {
                    const halfWidth = containerRef.current.scrollWidth / 2;
                    const pixelsPerSecond = halfWidth / speed;
                    const deltaOffset = (pixelsPerSecond * deltaTime) / 1000;

                    offsetRef.current += reverse ? -deltaOffset : deltaOffset;

                    if (offsetRef.current >= halfWidth) offsetRef.current -= halfWidth;
                    if (offsetRef.current < 0) offsetRef.current += halfWidth;

                    containerRef.current.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
                }
            }
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, [speed, reverse]);

    const onPointerDown = (e: React.PointerEvent) => {
        isDragging.current = true;
        dragStartX.current = e.clientX;
        lastOffset.current = offsetRef.current;
        if (containerRef.current) {
            containerRef.current.style.transition = "none";
        }
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: React.PointerEvent) => {
        if (!isDragging.current || !containerRef.current) return;
        const deltaX = e.clientX - dragStartX.current;

        let newOffset = lastOffset.current - deltaX;
        const halfWidth = containerRef.current.scrollWidth / 2;

        while (newOffset >= halfWidth) newOffset -= halfWidth;
        while (newOffset < 0) newOffset += halfWidth;

        offsetRef.current = newOffset;
        containerRef.current.style.transform = `translate3d(-${newOffset}px, 0, 0)`;
    };

    const onPointerUp = (e: React.PointerEvent) => {
        isDragging.current = false;
        e.currentTarget.releasePointerCapture(e.pointerId);
    };

    const onClickCapture = (e: React.MouseEvent) => {
        // If the user dragged more than 5 pixels, prevent the click
        if (Math.abs(lastOffset.current - offsetRef.current) > 5) {
            e.preventDefault();
            e.stopPropagation();
        }
    };

    const onPointerEnter = (e: React.PointerEvent) => {
        if (e.pointerType === "mouse") {
            hoverPause.current = true;
        }
    };

    const onPointerLeave = (e: React.PointerEvent) => {
        if (e.pointerType === "mouse") {
            hoverPause.current = false;
        }
    };

    return (
        <div
            className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
            style={{ touchAction: "pan-y" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onClickCapture={onClickCapture}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
        >
            <div className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-r from-bg-main to-transparent" />
            <div className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none bg-gradient-to-l from-bg-main to-transparent" />
            <div
                ref={containerRef}
                className="flex w-max will-change-transform"
            >
                {children}
                {children}
            </div>
        </div>
    );
}
