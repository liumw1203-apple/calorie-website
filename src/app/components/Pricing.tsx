"use client";

import React from "react";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export default function AIPricingSectionDemo() {
  const tiers: PricingTier[] = [
    {
      name: "Basic",
      price: "$9.99",
      description: "Perfect for getting started with AI-powered weight loss",
      features: [
        "Personalized meal plans",
        "Basic workout recommendations",
        "Weekly progress tracking",
        "Email support"
      ],
      cta: "Start Basic Plan"
    },
    {
      name: "Pro",
      price: "$19.99",
      description: "Advanced features for serious weight loss goals",
      features: [
        "Everything in Basic",
        "Advanced AI diet optimization",
        "Custom workout programs",
        "Real-time nutrition tracking",
        "24/7 chat support",
        "Progress analytics dashboard"
      ],
      cta: "Get Pro Plan",
      highlighted: true
    },
    {
      name: "Premium",
      price: "$39.99",
      description: "Ultimate weight loss experience with personal coaching",
      features: [
        "Everything in Pro",
        "1-on-1 virtual coaching",
        "Priority support",
        "Personalized supplement recommendations",
        "Advanced body metrics tracking",
        "Custom meal recipes"
      ],
      cta: "Choose Premium"
    }
  ];

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Choose Your Path to Success
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Select the plan that best fits your weight loss journey
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`flex flex-col justify-between p-8 ${
                tier.highlighted
                  ? "relative border-primary bg-primary/5 before:absolute before:-inset-px before:-z-10 before:rounded-[inherit] before:bg-gradient-to-b before:from-primary/25 before:to-primary/5"
                  : ""
              }`}
            >
              <div>
                <h3 className="text-lg font-semibold leading-8">{tier.name}</h3>
                <p className="mt-4 text-sm text-muted-foreground">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
                  <span className="text-sm font-semibold leading-6">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                className={`mt-8 w-full ${tier.highlighted ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}`}
                variant={tier.highlighted ? "default" : "outline"}
              >
                {tier.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 