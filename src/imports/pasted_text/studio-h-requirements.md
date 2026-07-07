# STUDIO H – MASTER PROJECT REQUIREMENTS DOCUMENT (FINAL)

## Project Overview

Build a premium luxury photography business platform for Studio H.

The website must combine:

* Cinematic 3D Experience
* Online Booking System
* Payment Processing
* Client Dashboard
* Gallery Delivery
* AI Face Search
* CRM
* CMS
* Blog Platform
* SEO Optimization

The objective is to create a platform that manages the entire photography business from lead generation to final gallery delivery.

---

# Brand Identity

Company Name:

Studio H

Brand Style:

* Luxury
* Cinematic
* Premium
* Elegant
* Modern
* Minimal

Visual Theme:

Primary Background:

* Obsidian Black (#050505)

Secondary Background:

* Charcoal (#0c0c0c)

Primary Text:

* Silk White (#f5f5f7)

Accent:

* Champagne Gold (#d4af37)

Typography:

Headings:

* Playfair Display

Body:

* Inter

---

# Technology Stack

## Frontend

* Next.js 16 App Router
* React
* TypeScript
* Tailwind CSS v4
* Shadcn UI
* Framer Motion
* GSAP
* GSAP ScrollTrigger
* Lenis Smooth Scroll

Purpose:

* Premium UI
* SEO Optimization
* Fast Performance
* Responsive Design

---

## 3D Experience

* Three.js
* React Three Fiber
* Drei

Features:

* Interactive 3D Camera
* Lens Reveal Animation
* Scroll Storytelling
* Portfolio Tunnel
* Mouse Parallax
* Cinematic Effects

---

## Backend

* FastAPI
* Python
* SQLAlchemy ORM
* Alembic Migrations
* Uvicorn

Purpose:

* API Layer
* Business Logic
* CRM
* CMS
* AI Services
* Booking Engine

---

## Database

* PostgreSQL

Provider:

* Supabase

Stores:

* Users
* Bookings
* Packages
* Payments
* Blogs
* Galleries
* CRM Data
* CMS Data
* Face Embeddings

---

## Authentication

Provider:

* Clerk

Features:

* Sign Up
* Sign In
* Forgot Password
* Reset Password
* Email Verification
* Session Management

Roles:

* Super Admin
* Admin
* Photographer
* Editor
* Client

---

## Booking System

Provider:

* Cal.com

Features:

* Availability Management
* Calendar Scheduling
* Team Scheduling
* Google Calendar Sync
* Outlook Calendar Sync

Studio H Custom Layer:

* Service Configurator
* Package Builder
* Add-On Selection
* Dynamic Pricing
* Quote Generation

---

## Payment Gateway

Provider:

* Razorpay

Supported:

* UPI
* Credit Cards
* Debit Cards
* Wallets
* Net Banking

Payment Types:

* Advance Payment
* Partial Payment
* Full Payment
* Remaining Balance

---

## Email System

Business Email:

* Zoho Mail

Emails:

* [hello@thestudioh.in](mailto:hello@thestudioh.in)
* [bookings@thestudioh.in](mailto:bookings@thestudioh.in)
* [gallery@thestudioh.in](mailto:gallery@thestudioh.in)
* [admin@thestudioh.in](mailto:admin@thestudioh.in)

Automated Emails:

* Resend

Used For:

* Booking Confirmation
* Payment Receipt
* Gallery Delivery
* Password Reset
* Notifications

---

## Storage

Images:

* Cloudinary

Videos:

* AWS S3

Features:

* CDN Delivery
* Image Optimization
* Secure URLs
* Batch Uploads

---

## AI Face Search

Libraries:

* InsightFace
* OpenCV
* NumPy

Features:

* Face Detection
* Face Matching
* Selfie Search
* Event Photo Search

---

## Notifications

Email:

* Resend

SMS:

* Twilio

WhatsApp:

* Interakt

---

## Analytics

* Google Analytics 4
* Microsoft Clarity
* Meta Pixel

---

## Hosting

Frontend:

* Vercel

Backend:

* Railway

Database:

* Supabase

Storage:

* Cloudinary
* AWS S3

Domain:

* thestudioh.in

---

# Website Structure

## Authentication Pages

Pages:

* /login
* /register
* /forgot-password
* /reset-password

---

## Public Website

### Home Page

Sections:

1. Cinematic Hero
2. About Preview
3. Mission & Vision
4. Services Preview
5. Portfolio Preview
6. Featured Testimonials
7. Booking CTA
8. Latest Blogs
9. Contact CTA
10. Footer

---

### About Page

Sections:

* Company Story
* Founder Message
* Mission
* Vision
* Values

---

### Services Page

Show:

* All Services
* Packages
* Pricing
* Add-Ons

---

### Portfolio Page

Categories:

* Wedding
* Pre-Wedding
* Corporate
* Fashion
* Events

Features:

* Masonry Layout
* Video Support
* Lightbox

---

### Testimonials Page

Features:

* All Reviews
* Ratings
* Event Type
* Images
* Videos

---

### Blog Page

Features:

* Categories
* Tags
* SEO Articles

Managed by Admin.

---

### Contact Page

Features:

* Contact Form
* Phone
* WhatsApp
* Email
* Map

---

# Footer

Must Include:

* Quick Links
* Services
* Contact
* Social Media

Legal:

* Terms & Conditions
* Privacy Policy
* Refund Policy
* Cancellation Policy

Admin Access:

Footer Admin Icon

Link:

/admin/login

---

# Booking Engine

Route:

/book-service

Inspired By:

* Blinkit
* Swiggy
* Urban Company

---

## Service Categories

Photography:

* Wedding
* Pre-Wedding
* Engagement
* Reception
* Corporate
* Fashion
* Product
* Birthday

Videography:

* Wedding Films
* Corporate Films
* Reels

Add-Ons:

* Drone Coverage
* Premium Album
* Extra Photographer
* Extra Videographer
* Express Editing
* Live Streaming

---

## Package Types

Basic

Premium

Luxury

Each Package Contains:

* Price
* Deliverables
* Team Size
* Hours Included
* Edited Photos
* Video Deliverables

---

## Booking Flow

1. Select Service
2. Select Package
3. Select Duration
4. Select Add-Ons
5. Select Date
6. Availability Check
7. Cost Breakdown
8. Quote Generation
9. Razorpay Payment
10. Confirmation

---

## Dynamic Pricing

Factors:

* Package
* Duration
* Add-Ons
* Team Size
* Seasonal Pricing
* Discounts

---

## Quote Generator

Generate:

* PDF Quote
* Email Quote
* WhatsApp Quote

---

# Client Dashboard

Client Can:

* View Bookings
* View Payments
* Download Invoices
* Access Galleries
* Download Photos
* Download Videos
* Track Project Status

---

# Gallery System

Features:

* Event Galleries
* Private Galleries
* Public Galleries
* Password Protection
* Favorites
* Downloads
* Sharing

---

# AI Face Search

Workflow:

Upload Selfie
↓
Face Detection
↓
Embedding Generation
↓
Match Event Photos
↓
Display Results

---

# CRM System

Pipeline:

New Lead
↓
Contacted
↓
Proposal Sent
↓
Negotiation
↓
Booked
↓
Shoot Scheduled
↓
Editing
↓
Delivered

Features:

* Lead Assignment
* Notes
* Revenue Tracking
* Follow-Ups

---

# CMS System

Admin Can Edit:

* Homepage
* About
* Services
* Pricing
* Portfolio
* Testimonials
* Blog
* Contact Details
* SEO
* Legal Pages

Without coding.

---

# Team Management

Roles:

* Super Admin
* Admin
* Photographer
* Editor

Features:

* Assign Events
* Assign Tasks
* Manage Permissions
* Attendance Tracking

---

# SEO

Features:

* Dynamic Metadata
* Structured Data
* Sitemap
* Robots.txt
* Open Graph
* Canonical URLs

Target Keywords:

* Wedding Photographer Bangalore
* Luxury Wedding Photographer Bangalore
* Event Photographer Bangalore
* Photography Studio Bangalore

---

# Final Goal

Create a luxury, cinematic, business-management platform that allows Studio H to:

* Showcase work
* Generate leads
* Accept bookings
* Collect payments
* Deliver galleries
* Manage clients
* Manage team members
* Run marketing campaigns
* Scale operations

from one centralized system.
