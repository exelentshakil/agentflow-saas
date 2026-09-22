'use client';

import React, { useState, useEffect } from 'react';
import {
  Layers,
  Sparkles,
  ShieldCheck,
  Cpu,
  ArrowUpRight,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { siteConfig } from '@/config/site';

// 4 Distinct Dope Wavy Sparkline Datasets for High-Signal Visual Fluidity
const n8nThroughputTrend = [
  { t: 'Jan', v: 42.2 },
  { t: 'Mar', v: 58.5 },
  { t: 'May', v: 66.8 },
  { t: 'Jul', v: 78.4 },
  { t: 'Sep', v: 88.1 },
  { t: 'Nov', v: 94.5 },
  { t: 'Dec', v: 98.4 },
];

const vectorRagPrecisionTrend = [
  { t: 'W1', v: 0.88 },
  { t: 'W2', v: 0.90 },
  { t: 'W3', v: 0.91 },
  { t: 'W4', v: 0.92 },
  { t: 'W5', v: 0.93 },
  { t: 'W6', v: 0.938 },
  { t: 'W7', v: 0.942 },
];

const hitlPolicyAdherenceSla = [
  { t: 'Mon', v: 99.4 },
  { t: 'Tue', v: 99.8 },
  { t: 'Wed', v: 100.0 },
  { t: 'Thu', v: 100.0 },
  { t: 'Fri', v: 100.0 },
  { t: 'Sat', v: 100.0 },
  { t: 'Sun', v: 100.0 },
];

const dualModelLatencyTrend = [
  { t: 'Run 1', v: 118.0 },
  { t: 'Run 2', v: 98.5 },
  { t: 'Run 3', v: 88.1 },
  { t: 'Run 4', v: 84.8 },
  { t: 'Run 5', v: 81.4 },
  { t: 'Run 6', v: 79.1 },
  { t: 'Run 7', v: 78.0 },
];

// High-Density Multi-Agent Context Bus Telemetry Timeline (Dope Fluid Waves)
const telemetryStream = [
  { time: '09:00', ops: 3820, latency: 14.8, stage: 'Inbound SaaS Webhook & Tokenization' },
  { time: '10:00', ops: 4790, latency: 14.1, stage: 'Vector RAG Document Semantic Embedding' },
  { time: '11:00', ops: 4210, latency: 13.9, stage: 'Supabase pgvector Cosine Search' },
  { time: '12:00', ops: 5680, latency: 14.4, stage: 'Autonomous Tool-Calling Agent Dispatch' },
  { time: '13:00', ops: 5120, latency: 13.8, stage: 'SaaS Customer API REST Execution' },
  { time: '14:00', ops: 6450, latency: 13.2, stage: 'Human-in-the-Loop Policy Evaluation' },
  { time: '15:00', ops: 5890, latency: 13.5, stage: 'Supervisor One-Click Approval Gate' },
  { time: '16:00', ops: 6820, latency: 12.8, stage: 'n8n Event Bus Cross-API Broadcast' },
  { time: '17:00', ops: 6180, latency: 13.4, stage: 'Dual LLM Failover Health Check' },
  { time: '18:00', ops: 6450, latency: 13.2, stage: 'Immutable Audit Trail State Commit' },
];

export function MetricsGrid() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const icons = [Layers, Sparkles, ShieldCheck, Cpu];
  const badgeStyles = [
    'bg-[#533AFD]/8 text-[#533AFD] dark:bg-[#7A68FF]/15 dark:text-[#7A68FF] border-[#533AFD]/20 dark:border-[#7A68FF]/30',
    'bg-emerald-50/80 dark:bg-emerald-950/30 text-[#057A55] dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-800/40',
    'bg-amber-50/80 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 border-amber-200/80 dark:border-amber-800/40',
    'bg-teal-50/80 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300 border-teal-200/80 dark:border-teal-800/40',
  ];

  // Dynamic grid: 4 columns for 4 metrics on desktop
  const gridColsClass =
    siteConfig.metrics.length === 4
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
      : siteConfig.metrics.length === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : 'grid-cols-1 md:grid-cols-3';

  // Render varied, custom wavy progress sparklines per card index
  const renderCardChart = (idx: number) => {
    if (!mounted) return null;

    if (idx === 0) {
      // Card 0: n8n Task Throughput (Stripe Blurple wavy gradient area)
      return (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={n8nThroughputTrend} margin={{ top: 2, right: 2, left: 2, bottom: 0 }}>
            <defs>
              <linearGradient id="n8nGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#533AFD" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#533AFD" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <YAxis hide domain={['dataMin - 5', 'dataMax + 5']} />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] px-2.5 py-1 text-xs font-medium shadow-xs text-[var(--color-text-primary)]">
                      <span className="font-bold text-[#533AFD] dark:text-[#7A68FF]">{payload[0].value}k</span> Tasks/Day
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="v"
              stroke="#533AFD"
              strokeWidth={2}
              fill="url(#n8nGrad)"
            />
          </AreaChart>
        </ResponsiveContainer>
      );
    }

    if (idx === 1) {
      // Card 1: Vector RAG Cosine Accuracy (Emerald wavy gradient area)
      return (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={vectorRagPrecisionTrend} margin={{ top: 2, right: 2, left: 2, bottom: 0 }}>
            <defs>
              <linearGradient id="ragGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#057A55" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#057A55" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <YAxis hide domain={[0.85, 0.96]} />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] px-2.5 py-1 text-xs font-medium shadow-xs text-[var(--color-text-primary)]">
                      <span className="font-bold text-[#057A55] dark:text-emerald-400">{payload[0].value}</span> Cosine
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="v"
              stroke="#057A55"
              strokeWidth={2}
              fill="url(#ragGrad)"
            />
          </AreaChart>
        </ResponsiveContainer>
      );
    }

    if (idx === 2) {
      // Card 2: HITL Policy Gate Enforcement Rate (Amber wavy gradient area)
      return (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={hitlPolicyAdherenceSla} margin={{ top: 2, right: 2, left: 2, bottom: 0 }}>
            <defs>
              <linearGradient id="hitlGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D97706" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#D97706" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <YAxis hide domain={[98.5, 100.5]} />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] px-2.5 py-1 text-xs font-medium shadow-xs text-[var(--color-text-primary)]">
                      {data.t}: <span className="font-bold text-amber-600 dark:text-amber-400">{data.v}%</span> HITL Policy
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="v"
              stroke="#D97706"
              strokeWidth={2}
              fill="url(#hitlGrad)"
            />
          </AreaChart>
        </ResponsiveContainer>
      );
    }

    // Card 3: Dual Model Latency (Teal wavy gradient area)
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={dualModelLatencyTrend} margin={{ top: 2, right: 2, left: 2, bottom: 0 }}>
          <defs>
            <linearGradient id="latencyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0d9488" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#0d9488" stopOpacity={0.0} />
            </linearGradient>
          </defs>
          <YAxis hide domain={[60, 130]} />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload;
                return (
                  <div className="rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] px-2.5 py-1 text-xs font-medium shadow-xs text-[var(--color-text-primary)]">
                    {data.t}: <span className="font-bold text-teal-600 dark:text-teal-400">{data.v}ms</span> P99
                  </div>
                );
              }
              return null;
            }}
          />
          <Area
            type="monotone"
            dataKey="v"
            stroke="#0d9488"
            strokeWidth={2}
            fill="url(#latencyGrad)"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  };

  return (
    <div className="w-full space-y-4">
      {/* 4-Column High-Density KPI Cards with Balanced Stripe Hierarchy */}
      <div className={`grid ${gridColsClass} gap-3 sm:gap-4`}>
        {siteConfig.metrics.map((metric, idx) => {
          const Icon = icons[idx % icons.length];
          const badgeStyle = badgeStyles[idx % badgeStyles.length];

          return (
            <div
              key={metric.id}
              className="rounded-[6px] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between overflow-hidden"
            >
              {/* Card Header: Category Eyebrow + Badge (Anti-Collision Isolated) */}
              <div className="p-4 pb-2 flex items-center justify-between gap-2 min-w-0">
                <span 
                  className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] truncate min-w-0"
                  title={metric.title}
                >
                  {metric.title}
                </span>
                <span
                  className={`inline-flex items-center rounded-[4px] px-2 py-0.5 text-[11px] font-semibold border ${badgeStyle} shrink-0 whitespace-nowrap`}
                >
                  <Icon className="h-3 w-3 mr-1 shrink-0" />
                  {metric.badge}
                </span>
              </div>

              {/* Card Body: Primary Bold Metric & Dope Wavy Sparkline */}
              <div className="p-4 pt-1 space-y-3">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">
                    {metric.value}
                  </span>
                  <span className="inline-flex items-center text-xs sm:text-[13px] font-bold text-[#057A55] dark:text-emerald-400">
                    <ArrowUpRight className="h-3 w-3 mr-0.5 shrink-0" />
                    {metric.change}
                  </span>
                </div>

                {/* Embedded Dope Wavy Sparkline */}
                <div className="h-12 w-full pt-1">
                  {renderCardChart(idx)}
                </div>

                {/* Subtext Footer with separator and live pulse indicator */}
                <div className="text-xs text-[var(--color-text-secondary)] font-medium border-t border-[var(--color-border)]/70 pt-2 flex items-center justify-between">
                  <span className="truncate pr-2">{metric.subtext}</span>
                  <span className="h-2 w-2 rounded-full bg-[#00D924] animate-pulse shrink-0" title="Active telemetry node" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Real-time Sub-50ms Telemetry Stream Strip */}
      <div className="rounded-[6px] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:p-5 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-[var(--color-border)]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#00D924] animate-pulse shrink-0" />
              <span className="text-sm sm:text-[15px] font-bold tracking-tight text-[var(--color-text-primary)]">
                Multi-Agent Context Bus • Sub-50ms Handoff Telemetry
              </span>
              <span className="rounded-[4px] bg-[#533AFD]/8 text-[#533AFD] border border-[#533AFD]/20 dark:bg-[#7A68FF]/15 dark:text-[#7A68FF] dark:border-[#7A68FF]/30 px-2.5 py-0.5 text-xs font-semibold">
                Live Stream
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-1">
              Real-time context serialization &amp; throughput across Inbound Webhook → Vector RAG → Tool Calling → HITL Policy Gate
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-[13px] text-[var(--color-text-secondary)]">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#533AFD]" />
              Handoffs: <strong className="text-[var(--color-text-primary)]">6,450 / min</strong>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#057A55]" />
              P99: <strong className="text-[#057A55] dark:text-emerald-400">13.2ms</strong>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#00D4FF]" />
              Zero Loss: <strong className="text-[#00D4FF] dark:text-[#00D4FF]">100%</strong>
            </span>
          </div>
        </div>

        {/* Detailed Horizontal Telemetry Area Wave */}
        <div className="h-44 sm:h-52 w-full">
          {mounted && (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={telemetryStream} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="telemetryGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#533AFD" stopOpacity={0.32} />
                    <stop offset="60%" stopColor="#533AFD" stopOpacity={0.08} />
                    <stop offset="95%" stopColor="#533AFD" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" opacity={0.35} vertical={false} />
                <XAxis
                  dataKey="time"
                  stroke="#94a3b8"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#94a3b8"
                  fontSize={11}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(val) => `${(val / 1000).toFixed(1)}k`}
                  domain={['dataMin - 800', 'dataMax + 400']}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="rounded-[6px] border border-[var(--color-border)] bg-[var(--color-surface)] p-2.5 shadow-lg text-xs font-mono space-y-1 backdrop-blur-md">
                          <div className="font-bold text-[var(--color-text-primary)] flex items-center justify-between gap-4">
                            <span>{data.time} UTC</span>
                            <span className="text-[10px] text-[#057A55] dark:text-emerald-400 font-normal">Active</span>
                          </div>
                          <div className="text-[11px] text-[var(--color-text-secondary)] border-b border-[var(--color-border)]/60 pb-1">
                            {data.stage}
                          </div>
                          <div className="text-[#533AFD] dark:text-[#7A68FF] flex items-center justify-between gap-4 pt-0.5">
                            <span>Throughput: {data.ops.toLocaleString()} ops</span>
                            <span className="text-emerald-600 font-bold">{data.latency}ms</span>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="ops"
                  stroke="#533AFD"
                  strokeWidth={2.5}
                  fill="url(#telemetryGrad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
}
