# AFH Web Studio - Replit Guide

## Overview

AFH Web Studio is a SaaS landing page for a web design service specifically targeting Adult Family Homes (AFHs). The application showcases website templates, features, pricing plans, and case studies to help AFH operators understand the value proposition and convert them into customers. The site includes a working demo template (Everbloom Care) and a comprehensive service presentation with contact forms for lead generation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a React-based Single Page Application (SPA) architecture with the following key decisions:

**React with TypeScript**: Provides type safety and modern development experience while maintaining component reusability across the marketing site.

**Wouter for Routing**: Lightweight client-side routing solution chosen over React Router to minimize bundle size for a marketing site with simple navigation needs.

**Shadcn/ui Component Library**: Pre-built, accessible components using Radix UI primitives with Tailwind CSS styling. This choice accelerates development while ensuring consistent design and accessibility compliance.

**TanStack Query**: Handles server state management and API interactions, though the current implementation primarily uses mock data and form submissions.

### Styling and Design System
**Tailwind CSS**: Utility-first CSS framework providing rapid styling with consistent design tokens through CSS custom properties.

**Theme System**: Implements light/dark mode support with CSS variables and a React context provider for theme switching.

**Responsive Design**: Mobile-first approach using Tailwind's responsive utilities to ensure optimal experience across devices.

### State Management
**React Hook Form**: Handles form state and validation for contact forms, reducing boilerplate while providing excellent performance through uncontrolled components.

**React Context**: Manages global application state for theme preferences and mobile menu visibility.

### Development and Build Architecture
**Vite**: Modern build tool providing fast development server, hot module replacement, and optimized production builds. Configured with React plugin and development error overlay for enhanced DX.

**TypeScript**: Strict type checking enabled across the entire application with path mapping for clean imports.

**ESLint Configuration**: Code quality enforcement through TypeScript-aware linting rules.

### Backend Architecture
**Express.js Server**: Node.js backend providing API endpoints and static file serving. Uses middleware for request logging and error handling.

**Serverless-Ready**: Application structured to support both traditional hosting and serverless deployment patterns.

**Session Management**: Configured for PostgreSQL-based session storage using connect-pg-simple, though not actively used in current implementation.

### Database Layer
**Drizzle ORM**: Type-safe database interactions with PostgreSQL dialect. Schema defined in shared directory for type consistency between frontend and backend.

**Database Schema**: Currently includes basic user table structure with UUID primary keys and unique constraints.

**Migration System**: Drizzle Kit configured for database schema migrations and pushing changes to PostgreSQL.

### Development Workflow
**Monorepo Structure**: Client and server code organized in separate directories with shared schema definitions for type safety across boundaries.

**Hot Reloading**: Development setup with Vite HMR for frontend and tsx for backend development with automatic restarts.

**Build Process**: Separate build commands for client (Vite) and server (ESBuild) optimized for production deployment.

## External Dependencies

### UI and Styling
- **@radix-ui/**: Comprehensive set of accessible component primitives for building the design system
- **Tailwind CSS**: Utility-first CSS framework for rapid styling and consistent design tokens
- **class-variance-authority**: Type-safe utility for creating component variants with Tailwind classes
- **Lucide React**: Modern icon library providing consistent iconography throughout the application

### Forms and Validation
- **React Hook Form**: Performant form library with minimal re-renders and built-in validation
- **@hookform/resolvers**: Integration layer between React Hook Form and validation libraries
- **Zod**: TypeScript-first schema validation for form inputs and API responses

### Database and ORM
- **Drizzle ORM**: Modern TypeScript ORM providing type safety and excellent developer experience
- **@neondatabase/serverless**: Serverless-optimized PostgreSQL client for Neon database connections
- **drizzle-zod**: Integration between Drizzle schemas and Zod validation

### Development Tools
- **Vite**: Next-generation frontend build tool with native ES modules and fast HMR
- **TypeScript**: Static type checking and enhanced development experience
- **ESBuild**: Fast bundler for server-side code compilation

### Replit Integration
- **@replit/vite-plugin-runtime-error-modal**: Development error handling overlay for better debugging experience
- **@replit/vite-plugin-cartographer**: Development tooling for Replit environment integration

### Third-Party Services
The application is designed to integrate with:
- **Neon Database**: PostgreSQL hosting for production data storage
- **Form Submission Services**: Contact forms ready for integration with email services or CRM platforms
- **Analytics Platforms**: Structure in place for Google Analytics or similar tracking services