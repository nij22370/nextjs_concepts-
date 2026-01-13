"use client";
import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Pagination({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <nav className={cn("flex justify-center", className)}>{children}</nav>;
}

export function PaginationContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <ul className={cn("flex gap-1", className)}>{children}</ul>;
}

export function PaginationItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <li className={className}>{children}</li>;
}

export function PaginationLink({
  children,
  isActive,
  ...props
}: {
  children: React.ReactNode;
  isActive?: boolean;
} & React.ComponentProps<"a">) {
  return (
    <a
      className={cn(
        "px-2 py-1 border rounded",
        isActive ? "bg-blue-500 text-white" : "bg-gray-100 text-black"
      )}
      {...props}
    >
      {children}
    </a>
  );
}

export function PaginationPrevious(
  props: React.ComponentProps<typeof PaginationLink>
) {
  return (
    <PaginationLink {...props}>
      <ChevronLeftIcon className="inline w-4 h-4" /> Previous
    </PaginationLink>
  );
}

export function PaginationNext(
  props: React.ComponentProps<typeof PaginationLink>
) {
  return (
    <PaginationLink {...props}>
      Next <ChevronRightIcon className="inline w-4 h-4" />
    </PaginationLink>
  );
}

export function PaginationEllipsis() {
  return (
    <span>
      <MoreHorizontalIcon className="w-4 h-4 inline" />
    </span>
  );
}
