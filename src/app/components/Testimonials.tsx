"use client";

import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

// Types
interface TestimonialAuthor {
  name: string;
  handle?: string;
  avatar: string;
  role?: string;
}

interface BeforeAfterResult {
  before: string;
  after: string;
  metric: string;
  improvement: string;
}

interface Testimonial {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  results?: BeforeAfterResult;
}

interface TestimonialsSectionProps {
  title?: string;
  description?: string;
  testimonials: Testimonial[];
  className?: string;
}

// Example Usage
export default function TestimonialsSectionDemo() {
  const testimonials = [
    {
      author: {
        name: "Emma Thompson",
        handle: "@emmaai",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
        role: "Marketing Director"
      },
      text: "Using this platform has transformed how we handle customer engagement. The speed and accuracy are unprecedented.",
      href: "https://twitter.com/emmaai",
      results: {
        before: "2 hrs/day",
        after: "15 min/day",
        metric: "time",
        improvement: "87%"
      }
    },
    {
      author: {
        name: "David Park",
        handle: "@davidtech",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        role: "CTO at TechFlow"
      },
      text: "The integration is flawless. We've reduced our development time by 60% since implementing this solution.",
      href: "https://twitter.com/davidtech",
      results: {
        before: "$25,000/mo",
        after: "$10,000/mo",
        metric: "cost",
        improvement: "60%"
      }
    },
    {
      author: {
        name: "Sofia Rodriguez",
        handle: "@sofiaml",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
        role: "Data Scientist"
      },
      text: "Finally, a tool that actually understands context! The accuracy in processing is impressive and has improved our workflow significantly.",
      results: {
        before: "65% accuracy",
        after: "98% accuracy",
        metric: "accuracy",
        improvement: "33%"
      }
    }
  ];

  return (
    <section className="bg-background text-foreground py-12 sm:py-24 md:py-32 px-4">
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            Success Stories from Our Users
          </h2>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            See how our AI-powered weight loss platform has helped people achieve their goals
          </p>
        </div>

        <div className="w-full">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-8">
            <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
              <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                {[...Array(2)].map((_, setIndex) => (
                  testimonials.map((testimonial, i) => (
                    <Card key={`${setIndex}-${i}`} className="mx-2 max-w-[320px] p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Avatar>
                          <AvatarImage src={testimonial.author.avatar} alt={testimonial.author.name} />
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{testimonial.author.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.author.role}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                      {testimonial.results && (
                        <div className="mt-4 bg-muted/30 p-3 rounded-lg">
                          <div className="flex justify-between mb-2">
                            <span className="text-xs">Before: {testimonial.results.before}</span>
                            <span className="text-xs">After: {testimonial.results.after}</span>
                          </div>
                          <div className="text-xs text-emerald-600">
                            {testimonial.results.improvement} improvement in {testimonial.results.metric}
                          </div>
                        </div>
                      )}
                    </Card>
                  ))
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 