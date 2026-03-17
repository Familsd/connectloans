Connect Loans – Loan Consultancy Website
A modern loan consultancy website built with Next.js and TypeScript to capture and manage loan enquiries for Connect Loans.

The platform allows users to submit loan applications, which are securely stored and trigger real-time email notifications.

Overview

Connect Loans is a financial consultancy platform that assists users in obtaining different types of loans.

Supported loan services:

Housing Loans,
Plot Purchase Loans,
Industrial Property Loans,
Loan Against Property (LAP),
Lease Rental Discounting (LRD),
Business Loans,
Working Capital Finance.

The website functions as a lead generation system where users submit enquiries and the admin team receives them instantly.

Features

Modern responsive UI

Animated components

Loan enquiry form

Email notification on submission

Secure lead storage

SEO optimized pages

Serverless infrastructure

Fast global CDN hosting

Technology Stack
Layer	Technology
Frontend	Next.js + React
Language	TypeScript
UI	TailwindCSS + Radix UI
Components	shadcn/ui
Database	Supabase
Email Service	Resend
Hosting	Vercel
DNS	Vercel DNS
Security/CDN	Cloudflare
System Architecture
               User Browser
                     │
                     ▼
         Connect Loans Website (Next.js)
                     │
                     ▼
              Vercel Hosting CDN
                     │
                     ▼
              Next.js API Routes
                     │
         ┌───────────┴───────────┐
         ▼                       ▼
     Supabase DB             Resend API
 (Store Lead Data)        (Send Email Alert)
         │
         ▼
   Admin Lead Dashboard
Domain Flow
User enters domain
connectloans.in
      │
      ▼
GoDaddy Domain
      │
      ▼
Vercel DNS
      │
      ▼
Vercel Hosting
      │
      ▼
Next.js Application
Project Structure
connect-loans
│
├── app/                # Next.js routes and pages
├── components/         # Reusable UI components
├── lib/                # Helper utilities
├── public/             # Static assets
├── styles/             # Global styles
│
├── .env.local          # Environment variables
├── package.json        # Dependencies
├── tailwind.config.ts  # Tailwind configuration
└── README.md
Prerequisites

Install the following tools before running the project.

Node.js 18+

npm or yarn

Git

Check installation:

node -v
npm -v
Installation

Clone the repository.

git clone https://github.com/your-username/connect-loans.git

Navigate into the project.

cd connect-loans

Install dependencies.

npm install
Environment Variables

Create a file in the root folder.

.env.local

Add the following variables.

NEXT_PUBLIC_SITE_URL=https://connectloans.in

SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_public_key

RESEND_API_KEY=your_resend_api_key

ADMIN_EMAIL=admin@connectloans.in

These variables configure:

Database connection

Email notification system

Application configuration

Run the Project Locally

Start the development server.

npm run dev

Open in browser.

http://localhost:3000
Build the Project

To build production files:

npm run build

Start production server:

npm run start
Form Submission Flow

When a user submits a loan enquiry:

User submits form
      │
      ▼
Next.js API Route
      │
      ▼
Supabase Database
      │
      ▼
Resend Email API
      │
      ▼
Admin receives new lead email
Example Lead Data
Name	Phone	Loan Type	Amount	Date
Rahul	9876543210	Housing Loan	25 Lakhs	2026-03-10
Deployment

This project is deployed using Vercel.

Steps:

Push code to GitHub

Import repository in Vercel

Configure environment variables

Deploy automatically

Benefits of Vercel:

Automatic builds

Global CDN

SSL certificates

Continuous deployment

Cost Estimate
Service	Cost
Vercel Hosting	Free / $20
Supabase Database	Free Tier
Resend Email	Free Tier
Cloudflare CDN	Free

Total operational cost:

$0 – $20 per month
Future Improvements

Planned enhancements:

Admin dashboard

Loan eligibility calculator

CRM lead management

WhatsApp lead alerts

Automated lead reports

Marketing analytics

Advanced SEO pages

Scalable Architecture (Future)

If traffic increases significantly, the system can migrate to:

Next.js
     ↓
AWS Amplify
     ↓
API Gateway
     ↓
Lambda
     ↓
DynamoDB
     ↓
AWS SES

This supports enterprise-scale workloads.

Author

Developed for:

Connect Loans
Loan Consultancy Platform
