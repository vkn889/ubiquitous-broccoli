"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Tag } from "@/components/tag";
import { ExternalLink } from "@/components/external-link";
import { Folder } from "@/components/ui/folder-components";
import TiltedCard from "@/components/ui/TiltedCard";
import {
  shippedProjects,
  buildingProjects,
  type Project,
} from "@/data/projects";

type Category = "shipped" | "building";
type FolderColor = "blue" | "black" | "grey" | "yellow" | "orange" | "red";

function CategoryFolder({
  label,
  count,
  color,
  active,
  onToggle,
}: {
  label: string;
  count: number;
  color: FolderColor;
  active: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={active}
      className={
        "flex w-full flex-col items-center gap-5 rounded-3xl border p-8 text-center outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent " +
        (active
          ? "border-accent bg-accent-dim"
          : "border-line bg-bg hover:border-line-strong")
      }
    >
      <span className="flex h-[280px] items-center justify-center">
        <span className="block scale-[1.65]">
          <Folder color={color} size="lg" />
        </span>
      </span>
      <span className="block">
        <span className="block text-xl font-bold tracking-tight text-fg">
          {label}
        </span>
        <span className="mt-1 block text-sm text-muted">
          {count} {count === 1 ? "project" : "projects"} · tap to{" "}
          {active ? "close" : "open"}
        </span>
      </span>
    </button>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-bg">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="flex w-full items-center gap-4 p-4 text-left transition-colors duration-200 hover:bg-accent-dim/40"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.imageAlt}
          className="hidden h-14 w-20 shrink-0 rounded-lg object-cover sm:block"
          loading="lazy"
        />
        <span className="min-w-0 flex-1">
          <span className="block truncate text-base font-semibold text-fg">
            {project.title}
          </span>
          <span className="mt-0.5 block truncate text-xs text-muted">
            {project.brief}
          </span>
        </span>
        <ChevronDown
          className={
            "h-5 w-5 shrink-0 text-muted transition-transform duration-200 " +
            (expanded ? "rotate-180" : "")
          }
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="detail"
            initial={reduce ? undefined : { height: 0, opacity: 0 }}
            animate={reduce ? undefined : { height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-6 border-t border-line p-4 sm:p-6 md:grid-cols-2 md:gap-10">
              <div className="relative">
                <TiltedCard
                  imageSrc={project.image}
                  altText={project.imageAlt}
                  containerHeight="220px"
                  containerWidth="100%"
                  imageHeight="220px"
                  imageWidth="100%"
                  rotateAmplitude={9}
                  scaleOnHover={1.04}
                  showMobileWarning={false}
                  showTooltip={false}
                />
              </div>
              <div>
                <span
                  className={
                    "inline-block rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider " +
                    (project.status === "shipped"
                      ? "bg-accent-dim text-accent"
                      : "border border-line text-muted")
                  }
                >
                  {project.status === "shipped" ? "Shipped" : "In progress"}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-fg/75">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <li key={t}>
                      <Tag>{t}</Tag>
                    </li>
                  ))}
                </ul>
                {project.links.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                    {project.links.map((link) => (
                      <ExternalLink
                        key={link.url}
                        href={link.url}
                        label={link.label}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Projects() {
  const [active, setActive] = useState<Category | null>("shipped");
  const reduce = useReducedMotion();

  const toggle = (c: Category) => setActive((cur) => (cur === c ? null : c));

  const list = active === "shipped" ? shippedProjects : buildingProjects;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-28 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-[var(--container-content)] px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-muted">
            <span className="text-accent">02</span>
            <span className="h-px w-8 bg-line-strong" />
            <span>selected work</span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            id="projects-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-fg sm:text-4xl md:text-5xl"
          >
            Things I&apos;ve built.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-fg/75">
            Two folders. Open one to see the projects inside, then expand any
            project for the full story.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <CategoryFolder
              label="Shipped"
              count={shippedProjects.length}
              color="blue"
              active={active === "shipped"}
              onToggle={() => toggle("shipped")}
            />
            <CategoryFolder
              label="In progress"
              count={buildingProjects.length}
              color="orange"
              active={active === "building"}
              onToggle={() => toggle("building")}
            />
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active}
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 space-y-3"
            >
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
                {active === "shipped" ? "Shipped" : "In progress"}
              </p>
              {list.map((p) => (
                <ProjectRow key={p.slug} project={p} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
