"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { BrainCog, ArrowRight } from "lucide-react";

interface HeroAction {
  text: string;
  href: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  icon?: React.ReactNode;
}

interface AIHeroProps {
  badge?: {
    text: string;
    action?: {
      text: string;
      href: string;
    };
  };
  title: string;
  description: string;
  actions: HeroAction[];
  className?: string;
}

const AIHero = ({
  badge,
  title,
  description,
  actions,
  className,
}: AIHeroProps) => {
  return (
    <section
      className={cn(
        "relative z-0 flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-background",
        className
      )}
    >
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-10 blur-3xl" />
        <div className="absolute top-1/4 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Badge variant="outline" className="flex items-center gap-2 px-3 py-1">
              <BrainCog className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{badge.text}</span>
              {badge.action && (
                <a href={badge.action.href} className="flex items-center gap-1 text-foreground">
                  {badge.action.text}
                  <ArrowRight className="h-3 w-3" />
                </a>
              )}
            </Badge>
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-bold leading-tight tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          {description}
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {actions.map((action, index) => (
            <Button key={index} variant={action.variant || "default"} size="lg" asChild>
              <a href={action.href} className="flex items-center gap-2">
                {action.icon}
                {action.text}
              </a>
            </Button>
          ))}
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 w-full max-w-3xl"
        >
          <div className="relative aspect-video overflow-hidden rounded-lg border border-border/40 bg-card/30 p-2 shadow-xl backdrop-blur-sm">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-24 w-24 rounded-full bg-primary/20 p-6 backdrop-blur-sm">
                <BrainCog className="h-full w-full text-primary" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Example Usage
export default function AIWeightLossHero() {
  return (
    <AIHero
      badge={{
        text: "AI-Powered Weight Loss",
        action: {
          text: "Learn how it works",
          href: "#how-it-works",
        },
      }}
      title="Transform Your Body with AI-Powered Weight Loss"
      description="Our advanced AI analyzes your unique body composition, lifestyle, and goals to create a personalized weight loss plan that adapts as you progress. No more one-size-fits-all diets."
      actions={[
        {
          text: "Get Started Free",
          href: "/signup",
          variant: "default",
        },
        {
          text: "View Demo",
          href: "/demo",
          variant: "outline",
        },
      ]}
    />
  );
} 