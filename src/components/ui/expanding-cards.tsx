"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardItem {
  id: string | number;
  title: string;
  description: string;
  imgSrc: string;
  icon: React.ReactNode;
  linkHref: string;
}

interface ExpandingCardsProps extends React.HTMLAttributes<HTMLUListElement> {
  items: CardItem[];
  defaultActiveIndex?: number;
}

export const ExpandingCards = React.forwardRef<
  HTMLUListElement,
  ExpandingCardsProps
>(({ className, items, defaultActiveIndex = 0, ...props }, ref) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(
    defaultActiveIndex,
  );

  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const gridStyle = React.useMemo(() => {
    if (activeIndex === null) return {};

    if (isDesktop) {
      const columns = items
        .map((_, index) => (index === activeIndex ? "5fr" : "1fr"))
        .join(" ");
      return { gridTemplateColumns: columns };
    } else {
      const rows = items
        .map((_, index) => (index === activeIndex ? "5fr" : "1fr"))
        .join(" ");
      return { gridTemplateRows: rows };
    }
  }, [activeIndex, items.length, isDesktop]);

  const handleInteraction = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <ul
      className={cn(
        "w-full max-w-6xl mx-auto gap-2",
        "grid",
        "h-[600px] md:h-[500px]",
        "transition-[grid-template-columns,grid-template-rows] duration-500 ease-out",
        className,
      )}
      style={{
        ...gridStyle,
        ...(isDesktop
          ? { gridTemplateRows: "1fr" }
          : { gridTemplateColumns: "1fr" }),
      }}
      ref={ref}
      {...props}
    >
      {items.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <li
            key={item.id}
            className={cn(
              "group relative cursor-pointer overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm",
              "md:min-w-[80px]",
              "min-h-0 min-w-0",
            )}
            onMouseEnter={() => handleInteraction(index)}
            onFocus={() => handleInteraction(index)}
            onClick={() => handleInteraction(index)}
            tabIndex={0}
            data-active={isActive}
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover transition-all duration-300 ease-out group-data-[active=true]:scale-100 group-data-[active=true]:grayscale-0 scale-110 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Inactive state — rotated title centered in the card */}
            <div
              className={cn(
                "absolute inset-0 flex items-center justify-center",
                "transition-opacity duration-300 ease-out",
                "md:opacity-100 md:group-data-[active=true]:opacity-0",
                "opacity-0",
              )}
            >
              <h3 className="origin-center -rotate-90 whitespace-nowrap text-xs font-light uppercase tracking-[0.15em] text-white/70 select-none">
                {item.title}
              </h3>
            </div>

            {/* Active state — full content */}
            <div
              className="absolute inset-0 flex flex-col justify-end opacity-0 group-data-[active=true]:opacity-100 pointer-events-none group-data-[active=true]:pointer-events-auto"
              style={{ padding: '28px 28px 36px', transition: 'opacity 0.3s ease-out 0.1s' }}
            >
              <div style={{ marginBottom: '16px', color: 'rgba(255,255,255,0.9)' }}>
                {item.icon}
              </div>

              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#fff',
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  marginBottom: '12px',
                  textShadow: '0 2px 8px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.4)',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: 1.75,
                  maxWidth: '28rem',
                  textShadow: '0 1px 6px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.3)',
                }}
              >
                {item.description}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
});
ExpandingCards.displayName = "ExpandingCards";
