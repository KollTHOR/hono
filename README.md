# Lucia Authentication Test Site with Next.js 14, Drizzle ORM, and Turso

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/KollTHOR/lucia-auth-nextjs14.git
cd lucia-auth-nextjs14
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Configuration

### Environment Variables

Create a `.env` file in the root of your project and add the necessary environment variables:

```env
# Example .env
TURSO_CONNECTION_URL=
TURSO_AUTH_TOKEN=
```

### Database Setup

Make sure your Turso database is set up and the schema is configured. This project uses [Drizzle ORM](https://orm.drizzle.team/) to interact with the database.

Run migrations:

```bash
npm run migrate
# or
yarn migrate
# or
pnpm migrate
# or
bun migrate
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Lucia Documentation](https://lucia-auth.com/) - learn about Lucia Authentication.
- [Drizzle ORM Documentation](https://orm.drizzle.team/) - learn about Drizzle ORM.
- [Turso Documentation](https://turso.tech/) - learn about Turso.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
