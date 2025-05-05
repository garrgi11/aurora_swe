# Aurora

## Overview

Aurora is a React-based ecommerce platform dedicated to AI tools and services. Users can browse, filter, and select from a wide variety of AI-powered products—ranging from writing assistants to trading bots—right from the storefront. Upon signup and purchase, API keys and usage credentials for each tool are delivered directly to the user’s email.

## Key Features

- **Filter Panel**: Instantly narrow down products by Use-Case, Industry, I/O Type, Customization Level, and Pricing & Access.  
- **Product Gallery**: Dynamic grid displaying AI tools with thumbnails, names, brief descriptions, and price tiers.  
- **Search Bar**: Quick keyword search across product titles and descriptions.  
- **Authentication & Signup**: Secure user registration and login flow; email verification upon signup.  
- **Email Delivery**: Automated sending of API keys and access credentials after successful purchase.  
- **Payment Integration**: Seamless checkout experience with Stripe-powered payment processing.  
- **Responsive Navbar**: Branded logo and site name, with cart icon, user menu, and search input.  
- **Component-Based Architecture**: Reusable React components for easy extension and maintenance.

## Technology Stack

- **Front-End**: React and JavaScript with functional components and hooks  
- **Styling**: Tailwind CSS for utility-first, responsive design  
- **State Management**: React Context API (or Redux) for global state (filters, cart, user)  
- **Routing**: React Router for SPA navigation  
- **Email & Auth**: Firebase Auth + Email Service  
- **Payments**: Stripe API for secure transactions

## Getting Started

### Prerequisites

- Node.js (v14+)  
- npm or Yarn  
- A Stripe account and API keys  
- Firebase project (for auth and email service)

### Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/aurora-ai-marketplace.git
   cd aurora-ai-marketplace
