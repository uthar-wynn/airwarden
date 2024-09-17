This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started

## 1. Setup Environment Variables

First, copy the `.env.example` to `.env` and fill in the neccesary variables:

- **Clerk**: Create an account with [`Clerk`](https://clerk.com/) and obtain your Clerk API Keys. Add these keys to the `.env` file:

```bash
CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
```

- **DATABASE_URL**:  Set up your database and provide the database URL in the `.env` file (this example is for MySQL, you can change it if you want, but don't forget to change the prisma.schema):

```bash
DATABASE_URL=mysql://username:password@localhost:3306/your-database
```

## 2. Install Dependencies

Install the necessary dependencies using your preferred package manager:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## 3. Set Up Prisma

Generate the Prisma client and push the database schema to your database:

```bash
npx prisma generate
npx prisma db push
```

- prisma generate: Generates the Prisma client based on your schema.
- prisma db push: Pushes the Prisma schema state to your database without generating migrations.

## 4. Run the Development Server

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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.