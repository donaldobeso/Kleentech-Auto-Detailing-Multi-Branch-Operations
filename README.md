# KleenTech Auto Detailing — Multi-Branch Management Platform

[![Live Demo](https://img.shields.io/badge/Demo-kleentechcapstone.vercel.app-2563eb?style=for-the-badge&logo=vercel&logoColor=white)](https://kleentechcapstone.vercel.app/)
[![React 19](https://img.shields.io/badge/React-19.2-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4.0-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-PG17-3ecf8e?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![PayMongo](https://img.shields.io/badge/Payments-PayMongo-00c853?style=for-the-badge)](https://paymongo.com/)

A Multi-branch operations platform designed for an automotive detailing business. Built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Supabase PostgreSQL 17**, KleenTech coordinates automotive detailing workflows through real-time bay allocation, role-based access control (RBAC) for five authenticated roles, an automated 5-step customer booking wizard, and a touch-optimized cashier POS ledger.

> [!NOTE]
> **Architecture Showcase:** This repository contains the public case study, system architecture documentation, and visual showcase assets for the KleenTech platform. The underlying core production implementation is maintained in a private repository.

---

## 🌐 Live Deployment
- **Preview Deployment:** [https://kleentechcapstone.vercel.app/](https://kleentechcapstone.vercel.app/)
- **Infrastructure:** Vercel Global Edge Network with client-side SPA routing and Supabase PostgreSQL 17 backend.

---

## 📸 System Visual Tour

### 1. Customer Experience & Booking Lifecycle (In Progress)
Modern, mobile-responsive portal providing frictionless appointment scheduling, vehicle registration, and transparent pricing across vehicle tiers.

| Landing & Precision Detailing | 5-Step Smart Booking Wizard |
| :---: | :---: |
| ![Landing Page](docs/screenshots/screenshot_customer-landing-page.png) | ![Booking Wizard](docs/screenshots/screenshot_customer_booking-form.png) |

| Live Appointment Tracking & History | Tiered VIP Memberships |
| :---: | :---: |
| ![Appointments](docs/screenshots/screenshot_customer-appointment.png) | ![Memberships](docs/screenshots/screenshot_customer_membership.png) |

---

### 2. Front Desk Command & POS Cashier (In Progress)
Real-time operations hub for receptionists to monitor physical detailing bays, coordinate vehicle arrivals, and settle counter balances.

| Real-Time Detailing Bay Grid (Dark Mode) | POS Cashier & Terminal (Light Mode) |
| :---: | :---: |
| ![Bay Grid Dark](docs/screenshots/screenshot_receptionist_darkmode.png) | ![POS Light](docs/screenshots/screenshot_receptionist_lightmode.png) |

---

### 3. Technician Station (Bay Terminal & Mobile Queue)
Dedicated interface engineered for automotive detailers on the service floor. Features real-time vehicle intake queue, bay standby timers, pre-flight equipment checklists, and quality assurance sign-offs.

| Station Detailing Bay Terminal | Mobile Field Floor Experience |
| :---: | :---: |
| ![Technician Station](docs/screenshots/screenshot_technician.png) | ![Technician Mobile](docs/screenshots/screenshot_technician-mobile.png) |

---

### 4. Branch Operations & Workforce Management
Operational command center for branch managers to allocate weekly staff shifts, adjust vehicle-tier price matrices, and monitor daily bay capacity across detailers.

![Workforce Allocation & Shift Matrix](docs/screenshots/screenshot_branch-manager.png)

---

### 5. Executive Governance & Financial Audit (In progress)
Super-admin control plane offering unified cross-branch visibility into financial transactions, staff assignments, and audit logs.

![Global Financial Ledger](docs/screenshots/screenshot_super-admin.png)

---

## 🏗️ Technical Architecture

### Two-Portal Platform & 5-Role Role-Based Access Control (RBAC)
The platform enforces strict separation between public customer booking flows and authenticated staff operations across both the UI layer and the database kernel:

```mermaid
graph TD
    classDef portal fill:#1e293b,stroke:#3b82f6,stroke-width:2px,color:#f8fafc;
    classDef role fill:#0f172a,stroke:#64748b,stroke-width:1.5px,color:#f8fafc;
    classDef root fill:#0284c7,stroke:#38bdf8,stroke-width:2px,color:#ffffff,font-weight:bold;

    Root["KleenTech Multi-Branch Platform"]:::root

    Root --> CustPortal["Customer Portal<br/><code>/customer/*</code>"]:::portal
    Root --> StaffPortal["Staff Operations Portal<br/><code>/dashboard/*</code>"]:::portal

    CustPortal --> RoleCust["Registered Customer<br/>(Self-Service Bookings & Receipts)"]:::role
    CustPortal --> RoleGuest["Guest Visitor<br/>(Service Catalog & Location Info)"]:::role

    StaffPortal --> RoleRec["Receptionist<br/>(Front Desk Bay Grid & POS)"]:::role
    StaffPortal --> RoleTech["Technician<br/>(Floor Bay Queue & QA Checklist)"]:::role
    StaffPortal --> RoleMgr["Branch Manager<br/>(Workforce Roster & Price Matrix)"]:::role
    StaffPortal --> RoleAdmin["Super Admin<br/>(Global Ledger & Cross-Branch Audit)"]:::role
```

| Persona | Primary Responsibilities | Security Scope |
| :--- | :--- | :--- |
| **Customer** | Service selection, slot booking, membership subscription, payment receipts. | Own user ID & registered vehicles. |
| **Receptionist** | Real-time bay occupancy, walk-in registration, lounge queues, POS cashiering. | Branch-scoped front desk operations. |
| **Technician** | Vehicle intake inspection, bay timer countdown, QA checklist sign-off. | Assigned bay & technician job queue. |
| **Branch Manager** | Weekly technician rostering, service tier pricing, branch revenue reports. | Full branch-level operational control. |
| **Super Admin** | Multi-branch provisioning, system audit logs, global financial ledger. | Unrestricted cross-branch governance. |

---

## 🛡️ Database & Security Guardrails
- **PostgreSQL 17 Row-Level Security (RLS):** Every table in `public` has RLS enabled with `(SELECT auth.uid())` statement caching to prevent cross-tenant data leakage.
- **Privilege Escalation Triggers:** `BEFORE UPDATE` database triggers prevent client-side alteration of sensitive columns (`role`, `branch_id`, financial totals, and transaction states).
- **Payment Signature Verification:** PayMongo webhooks verify cryptographic `Paymongo-Signature` via Web Crypto API **HMAC-SHA256** inside Deno Edge Functions before updating order states.
- **Race Condition Prevention:** Detailing bay scheduling enforces row locking (`FOR UPDATE`) inside atomic `SECURITY DEFINER` stored procedures to prevent conflicting bay reservations through database-level locking.

---

## ⚡ Tech Stack & Tools

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | React 19.2 + TypeScript 5.8 | Modern component architecture & compile-time type safety. |
| **Styling & Design** | Tailwind CSS v4.0 + Native CSS Tokens | High-contrast dark/light mode with zero runtime CSS-in-JS overhead. |
| **Build & Bundler** | Vite 8 | Instant HMR and optimized production treeshaking. |
| **Backend & Database** | Supabase (PostgreSQL 17 + PostgREST) | Serverless data persistence, Realtime WebSocket sync, and Auth. |
| **Edge Functions** | Deno TypeScript Functions | Webhook processing, PayMongo payment intents, and Web Push. |
| **Quality & E2E** | Vitest + Playwright + GitHub Actions | Unit tests, and multi-role testing. |
| **Hosting** | Vercel Edge Network | Low-latency global static asset delivery and SPA rewrites. |

---

## 📄 License
Copyright © 2026 Donald Obeso. All Rights Reserved.  
This public showcase case study and documentation are shared for portfolio and technical demonstration purposes.
