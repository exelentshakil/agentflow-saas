'use client';

import React, { useState } from 'react';
import {
  Workflow,
  Database,
  Cpu,
  ShieldCheck,
  Zap,
  CheckCircle2,
  RefreshCw,
  Layers,
  ArrowRight,
  Sparkles,
  Lock,
  Terminal,
  FileText,
  AlertTriangle,
  Server,
  Activity,
  Sliders,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export function StripeInteractiveShowcase() {
  // Interactive State for Card 1: n8n Workflow Simulator
  const [n8nStep, setN8nStep] = useState<number>(3);
  const [n8nRunning, setN8nRunning] = useState<boolean>(false);

  // Interactive State for Card 2: Vector RAG Cosine Threshold
  const [ragQueryIndex, setRagQueryIndex] = useState<number>(0);
  const sampleQueries = [
    { title: 'SLA Master Contract', score: 0.948, doc: 'Enterprise_SLA_2026.pdf', latency: '12ms' },
    { title: 'Customer API Rate Limits', score: 0.912, doc: 'API_Specs_v3.md', latency: '9ms' },
    { title: 'Data Retention & GDPR SOP', score: 0.884, doc: 'Compliance_Matrix.pdf', latency: '15ms' },
  ];

  // Interactive State for Card 3: Agent Tool-Calling Simulator
  const [selectedTool, setSelectedTool] = useState<'customer_lookup' | 'invoice_generator' | 'slack_alert'>('customer_lookup');

  // Interactive State for Card 4: HITL Approval Gate
  const [hitlStatus, setHitlStatus] = useState<'pending' | 'approved' | 'rejected'>('pending');

  // Interactive State for Card 5: Dual LLM Failover Simulator
  const [activeProvider, setActiveProvider] = useState<'openai' | 'gemini'>('openai');
  const [failoverTriggering, setFailoverTriggering] = useState<boolean>(false);

  // Interactive State for Card 6: Inngest Queue Throughput
  const [eventVolume, setEventVolume] = useState<number>(2480);

  const handleRunN8n = () => {
    setN8nRunning(true);
    setN8nStep(0);
    setTimeout(() => setN8nStep(1), 300);
    setTimeout(() => setN8nStep(2), 650);
    setTimeout(() => {
      setN8nStep(3);
      setN8nRunning(false);
    }, 1000);
  };

  const handleTriggerFailover = () => {
    setFailoverTriggering(true);
    setTimeout(() => {
      setActiveProvider((prev) => (prev === 'openai' ? 'gemini' : 'openai'));
      setFailoverTriggering(false);
    }, 500);
  };

  return (
    <section id="workflows" className="py-16 sm:py-24 border-t border-[var(--color-border)] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Stripe Two-Tone Category Eyebrow & Master Title */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#533AFD]/20 bg-[#533AFD]/8 px-3 py-1 text-xs font-mono text-[#533AFD] dark:text-[#7A68FF] mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Modular Enterprise AI Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.025em] text-[var(--color-text-primary)] leading-tight">
            Production AI &amp; automations built for SaaS.{' '}
            <span className="text-[var(--color-text-secondary)] opacity-75 font-normal">
              Orchestrate RAG pipelines, autonomous agents, and n8n workflows with strict governance.
            </span>
          </h2>
        </div>

        {/* 6-Card Interactive Moving Elements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: n8n Workflow Execution Engine & Webhook Triggers */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#533AFD]/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  n8n Automation Engine
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Workflow className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Event-driven n8n webhook workflows
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Connect inbound SaaS webhooks, multi-step LLM classifiers, and automated database sync.
              </p>
            </div>

            {/* Interactive n8n Workflow Node Runner */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="rounded-lg bg-[var(--color-panel-subtle)] border border-[var(--color-border)] p-3 space-y-2 font-mono text-[11px]">
                <div className="flex items-center justify-between text-[10px] text-[var(--color-text-muted)] pb-1 border-b border-[var(--color-border)]">
                  <span>Workflow #WF-N8N-SaaS</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Active Webhook</span>
                </div>

                {/* Node Pipeline Steps */}
                <div className="space-y-1.5 pt-1">
                  <div className={`p-1.5 rounded flex items-center justify-between text-[10px] transition-all ${
                    n8nStep >= 1 ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20' : 'bg-transparent text-[var(--color-text-muted)]'
                  }`}>
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      1. Inbound Webhook (Stripe/CRM)
                    </span>
                    <span>2ms</span>
                  </div>

                  <div className={`p-1.5 rounded flex items-center justify-between text-[10px] transition-all ${
                    n8nStep >= 2 ? 'bg-[#533AFD]/10 text-[#533AFD] dark:text-[#7A68FF] border border-[#533AFD]/20' : 'bg-transparent text-[var(--color-text-muted)]'
                  }`}>
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      2. LLM Extraction &amp; Classify
                    </span>
                    <span>38ms</span>
                  </div>

                  <div className={`p-1.5 rounded flex items-center justify-between text-[10px] transition-all ${
                    n8nStep >= 3 ? 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20' : 'bg-transparent text-[var(--color-text-muted)]'
                  }`}>
                    <span className="flex items-center gap-1.5">
                      <Database className="w-3 h-3" />
                      3. Supabase pgvector Sync
                    </span>
                    <span>14ms</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center px-1">
                <span className="text-[10px] font-mono text-[var(--color-text-muted)]">
                  {n8nRunning ? 'Executing pipeline...' : 'Execution: 200 OK'}
                </span>
                <button
                  type="button"
                  disabled={n8nRunning}
                  onClick={handleRunN8n}
                  className="text-[10px] font-mono text-[#533AFD] dark:text-[#7A68FF] hover:underline cursor-pointer font-bold inline-flex items-center gap-1"
                >
                  <RefreshCw className={`w-3 h-3 ${n8nRunning ? 'animate-spin' : ''}`} />
                  Trigger Webhook Test
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Vector RAG & Semantic Document Search */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Vector RAG &amp; Embeddings
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Database className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Supabase pgvector semantic search
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Retrieve accurate company and customer documentation with zero hallucination guarantee.
              </p>
            </div>

            {/* Interactive Vector Search Preview */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              {/* Sample Document Query Switcher */}
              <div className="grid grid-cols-3 gap-1 bg-[var(--color-panel-subtle)] p-1 rounded-[6px] border border-[var(--color-border)]">
                {sampleQueries.map((q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setRagQueryIndex(idx)}
                    className={`text-[9px] font-mono py-1 px-1 rounded-[4px] truncate font-medium transition-all cursor-pointer ${
                      ragQueryIndex === idx
                        ? 'bg-[var(--color-surface)] text-[#533AFD] dark:text-[#7A68FF] shadow-xs font-bold'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                    }`}
                  >
                    Query #{idx + 1}
                  </button>
                ))}
              </div>

              {/* Dynamic RAG Match Card */}
              <div className="rounded-[6px] border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3 space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-[var(--color-text-muted)]">Target Chunk:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    {sampleQueries[ragQueryIndex].score * 100}% Cosine Match
                  </span>
                </div>
                <div className="p-2 rounded bg-[var(--color-surface)] border border-[var(--color-border)] text-[10px] font-mono space-y-1">
                  <div className="text-[var(--color-text-primary)] font-semibold truncate">
                    📄 {sampleQueries[ragQueryIndex].doc}
                  </div>
                  <div className="text-[var(--color-text-secondary)] text-[9px] line-clamp-2">
                    Verified semantic context chunk retrieved from pgvector indexed catalog.
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[var(--color-text-muted)]">
                <span>Embeddings: text-embedding-3</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                  {sampleQueries[ragQueryIndex].latency} P99
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Autonomous AI Agents & API Tool-Calling */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Autonomous AI Agents
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Cpu className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Function calling &amp; internal APIs
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Connect autonomous agent reasoning directly to SaaS REST endpoints and webhooks safely.
              </p>
            </div>

            {/* Live Agent Terminal Box */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-2">
              <div className="rounded-[6px] bg-[#0A0D14] text-slate-200 p-3 font-mono text-[11px] space-y-2 border border-slate-800">
                <div className="flex items-center justify-between text-slate-400 text-[10px] pb-1 border-b border-slate-800">
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Agent #SAAS-OPS-01
                  </span>
                  <span>Tool Calling Active</span>
                </div>
                <div className="text-slate-300 text-[10px]">
                  <span className="text-[#00D4FF]">exec_tool &gt;</span> {selectedTool}()
                </div>
                <div className="rounded bg-slate-900/90 p-2 border border-slate-800/80 space-y-1 text-[10px]">
                  <div className="text-emerald-400 flex items-center justify-between">
                    <span>✓ REST Schema Verified</span>
                    <span>200 OK</span>
                  </div>
                  <div className="text-slate-400 truncate">
                    payload: <span className="text-slate-200">&#123; customer_id: &quot;cus_9921&quot;, status: &quot;active&quot; &#125;</span>
                  </div>
                </div>
              </div>

              {/* Tool Switcher Buttons */}
              <div className="grid grid-cols-3 gap-1 pt-1">
                {(['customer_lookup', 'invoice_generator', 'slack_alert'] as const).map((tool) => (
                  <button
                    key={tool}
                    type="button"
                    onClick={() => setSelectedTool(tool)}
                    className={`text-[9px] font-mono py-1 rounded border transition-colors cursor-pointer ${
                      selectedTool === tool
                        ? 'border-[#533AFD] bg-[#533AFD]/10 text-[#533AFD] dark:text-[#7A68FF] font-bold'
                        : 'border-[var(--color-border)] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]'
                    }`}
                  >
                    {tool.replace('_', ' ')}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Card 4: Human-in-the-Loop (HITL) Policy Shield & Approval Gate */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  HITL Governance
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <ShieldCheck className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Human-in-the-loop approval steps
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Enforce mandatory human sign-off on sensitive, financial, or data-mutating actions.
              </p>
            </div>

            {/* Interactive HITL Decision Card */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3 space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-bold">
                    <AlertTriangle className="w-3 h-3" />
                    High-Risk State Change
                  </span>
                  <span className="text-[9px] bg-amber-500/10 text-amber-700 dark:text-amber-300 px-1.5 py-0.5 rounded font-mono">
                    Policy Gate
                  </span>
                </div>
                
                <div className="text-xs font-semibold text-[var(--color-text-primary)]">
                  Action: Stripe Refund Dispatch ($500.00)
                </div>
                <div className="text-[10px] text-[var(--color-text-secondary)] font-mono">
                  Target: Customer Acme Corp • SLA Clause 4.2
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setHitlStatus('approved')}
                    className={`flex-1 py-1 rounded text-[10px] font-mono font-bold transition-all cursor-pointer ${
                      hitlStatus === 'approved'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'border border-emerald-600/30 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30'
                    }`}
                  >
                    ✓ Approve Action
                  </button>
                  <button
                    type="button"
                    onClick={() => setHitlStatus('rejected')}
                    className={`flex-1 py-1 rounded text-[10px] font-mono font-bold transition-all cursor-pointer ${
                      hitlStatus === 'rejected'
                        ? 'bg-rose-600 text-white shadow-xs'
                        : 'border border-rose-600/30 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30'
                    }`}
                  >
                    ✕ Reject Action
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[var(--color-text-muted)]">
                <span>Audit Trail: Immutable Log</span>
                <span className={`font-bold ${
                  hitlStatus === 'approved' ? 'text-emerald-600' : hitlStatus === 'rejected' ? 'text-rose-600' : 'text-amber-600'
                }`}>
                  Status: {hitlStatus.toUpperCase()}
                </span>
              </div>
            </div>
          </div>

          {/* Card 5: Dual LLM Failover & Real-Time Routing */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Dual-Provider Routing
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Server className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Zero-downtime multi-LLM failover
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                OpenAI GPT-4o-mini primary with automated Google Gemini 2.0 Flash failover circuit.
              </p>
            </div>

            {/* Interactive Provider Router */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-2.5">
              <div className="grid grid-cols-2 gap-2 text-left">
                <div
                  className={`p-2 rounded-[6px] border transition-all ${
                    activeProvider === 'openai'
                      ? 'border-[#533AFD] bg-[#533AFD]/5 dark:bg-[#7A68FF]/10'
                      : 'border-[var(--color-border)] bg-[var(--color-panel-subtle)]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[9px] font-mono text-[var(--color-text-muted)]">
                    <span>OPENAI GPT-4o</span>
                    {activeProvider === 'openai' && <span className="text-[#533AFD] font-bold">PRIMARY</span>}
                  </div>
                  <div className="text-xs font-bold font-mono text-emerald-600 dark:text-emerald-400">78ms P99</div>
                </div>

                <div
                  className={`p-2 rounded-[6px] border transition-all ${
                    activeProvider === 'gemini'
                      ? 'border-[#533AFD] bg-[#533AFD]/5 dark:bg-[#7A68FF]/10'
                      : 'border-[var(--color-border)] bg-[var(--color-panel-subtle)]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[9px] font-mono text-[var(--color-text-muted)]">
                    <span>GEMINI 2.0 FLASH</span>
                    {activeProvider === 'gemini' && <span className="text-[#533AFD] font-bold">ACTIVE</span>}
                  </div>
                  <div className="text-xs font-bold font-mono text-[#533AFD] dark:text-[#7A68FF]">64ms P99</div>
                </div>
              </div>

              {/* Failover Simulator Trigger */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-[10px] font-mono text-[var(--color-text-muted)]">Automatic Circuit Breaker</span>
                <button
                  type="button"
                  disabled={failoverTriggering}
                  onClick={handleTriggerFailover}
                  className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-[#533AFD] dark:text-[#7A68FF] hover:underline cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw className={`w-2.5 h-2.5 ${failoverTriggering ? 'animate-spin' : ''}`} />
                  Test Provider Failover
                </button>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[var(--color-text-muted)] pt-1 border-t border-[var(--color-border)]/60">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  100% Upwork SLA
                </span>
                <span>Sub-100ms Latency</span>
              </div>
            </div>
          </div>

          {/* Card 6: Event-Driven Automation Bus & Telemetry */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Event Queue &amp; Ingestion
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Layers className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Inngest event queue &amp; retries
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Process thousands of asynchronous AI tasks with automated backpressure and zero dropped events.
              </p>
            </div>

            {/* Inngest Telemetry Feed */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="text-[var(--color-text-muted)]">24h Task Ingestion:</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">98,420 Events</span>
              </div>

              <div className="rounded-[6px] border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-2.5 space-y-2 text-[10px] font-mono">
                <div className="flex items-center justify-between font-bold text-[var(--color-text-secondary)] pb-1 border-b border-[var(--color-border)]/60">
                  <span>Queue Topic</span>
                  <span>Retries</span>
                  <span>P99 Status</span>
                </div>
                <div className="flex items-center justify-between text-[var(--color-text-primary)]">
                  <span className="truncate max-w-[110px]">rag.doc.embed</span>
                  <span className="text-emerald-600">0 dropped</span>
                  <span className="text-[#533AFD] font-bold">14ms</span>
                </div>
                <div className="flex items-center justify-between text-[var(--color-text-primary)]">
                  <span className="truncate max-w-[110px]">agent.tool.dispatch</span>
                  <span className="text-emerald-600">0 dropped</span>
                  <span className="text-[#533AFD] font-bold">32ms</span>
                </div>
                <div className="flex items-center justify-between text-[var(--color-text-primary)]">
                  <span className="truncate max-w-[110px]">n8n.webhook.sync</span>
                  <span className="text-emerald-600">0 dropped</span>
                  <span className="text-[#533AFD] font-bold">18ms</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[var(--color-text-muted)] pt-1">
                <span>Supabase PostgreSQL bus</span>
                <span className="text-emerald-600 font-bold">100% Guaranteed</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
