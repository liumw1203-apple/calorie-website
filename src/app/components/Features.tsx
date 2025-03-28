"use client";

import React, { ReactNode } from "react";
import { ArrowRightIcon } from "lucide-react";
import { 
  Utensils, 
  LineChart, 
  Brain, 
  Calendar, 
  Scale
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "../components/ui/button";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

const BentoGrid = ({
  children,
  className,
}: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

interface BentoCardProps {
  name: string;
  className?: string;
  background?: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: BentoCardProps) => (
  <div
    className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-background border border-border",
      "transform-gpu shadow-md hover:shadow-lg transition-all duration-200",
      className,
    )}
  >
    {background && <div>{background}</div>}
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-2 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-12 w-12 text-primary origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold text-foreground">
        {name}
      </h3>
      <p className="max-w-lg text-muted-foreground">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

const features = [
  {
    Icon: Utensils,
    name: "Personalized Meal Planning",
    description: "AI-generated meal plans tailored to your preferences, dietary restrictions, and weight loss goals.",
    href: "/",
    cta: "Learn more",
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: LineChart,
    name: "Real-Time Progress Tracking",
    description: "Monitor your weight loss journey with advanced analytics and visual progress reports.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Brain,
    name: "Smart Recommendations",
    description: "Get AI-powered suggestions for workouts, meals, and lifestyle changes based on your progress.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: Calendar,
    name: "Adaptive Scheduling",
    description: "Our AI adjusts your meal and workout plans based on your calendar and real-life constraints.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Scale,
    name: "Intelligent Weight Analysis",
    description: "Advanced algorithms analyze your weight fluctuations to provide meaningful insights beyond the numbers.",
    href: "/",
    cta: "Learn more",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
  },
];

function AIWeightLossFeatures() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
          AI-Powered Weight Loss
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Our intelligent platform uses cutting-edge AI to personalize your weight loss journey and maximize results.
        </p>
      </div>
      
      <BentoGrid className="lg:grid-rows-2">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}

export default AIWeightLossFeatures; 