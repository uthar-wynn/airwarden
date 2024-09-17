#!/bin/sh

# Run Prisma migrations
npx prisma migrate deploy --accept-data-loss

# Start the application
npm start
