-- CreateEnum
CREATE TYPE "user_status" AS ENUM ('waiting_confirmation', 'active', 'banned');

-- CreateEnum
CREATE TYPE "user_role" AS ENUM ('user', 'organizer', 'admin', 'superadmin');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "email_verified_at" TIMESTAMP(3),
    "status" "user_status" NOT NULL,
    "role" "user_role" NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
