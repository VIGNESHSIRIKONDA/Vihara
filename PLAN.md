# Vihara Workshops - Project Plan

## 1. Project Overview
A premium, artistic workshop booking platform for "Vihara Workshops" in Hyderabad.
**Key Goals:**
- Showcase workshops with an aesthetic, premium design.
- Enable secure, real-time booking and payment.
- Manage workshop capacity strictly (12-15 seats).
- Admin dashboard to manage workshops and view bookings.

## 2. Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS (Custom config for Gold/Black theme)
- **Database:** PostgreSQL (via Supabase or Neon) + Prisma ORM
- **Payments:** Razorpay Integration
- **State Management:** React Hook Form (for bookings), Context API (for theme/cart if needed)
- **Icons:** Lucide React / Heroicons
- **Fonts:** Playfair Display (Serif), Inter/Poppins (Sans-serif)

## 3. Database Schema (Draft)

### `Workshop`
- `id`: UUID
- `title`: String
- `slug`: String (unique)
- `description`: Text
- `price`: Float
- `capacity`: Int (e.g., 15)
- `date`: DateTime
- `location`: String
- `image_url`: String
- `category`: String (e.g., "Painting", "Pottery")

### `Booking`
- `id`: UUID
- `workshop_id`: UUID (Foreign Key)
- `user_name`: String
- `user_email`: String
- `user_phone`: String
- `seats`: Int
- `total_amount`: Float
- `payment_status`: Enum (PENDING, PAID, FAILED)
- `payment_id`: String (Razorpay ID)
- `created_at`: DateTime

### `Admin`
- `id`: UUID
- `email`: String
- `password_hash`: String

## 4. Frontend Architecture

### Pages (App Router)
- `/` (Hero, About, Featured Workshops, Testimonials)
- `/workshops` (List of all workshops with filters)
- `/workshops/[slug]` (Detail page, capacity check, booking form)
- `/about` (Story, Values)
- `/contact` (WhatsApp link, Map)
- `/admin` (Protected route for management)

### Key Components
- `Navbar`: Sticky, transparent-to-black glassmorphism.
- `HeroSection`: Video/Image background with gold typography.
- `WorkshopCard`: Black card, gold border, image, price, "Book Now" button.
- `BookingForm`: Steps (Details -> Payment).
- `Footer`: Links, Socials.

## 5. Implementation Steps
1.  **Setup:** Initialize Next.js project, configure Tailwind with brand colors.
2.  **Database:** Set up Prisma schema and connect to a local/dev Postgres instance.
3.  **UI Components:** Build the core design system (Buttons, Headings, Cards).
4.  **Pages:** Implement Homepage and Workshop List.
5.  **Backend Logic:** Create API routes for fetching workshops and creating bookings (with locking).
6.  **Payment:** Integrate Razorpay flow.
7.  **Admin:** Simple dashboard to add/edit workshops.
