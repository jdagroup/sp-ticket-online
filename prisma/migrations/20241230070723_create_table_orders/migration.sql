/*
  Warnings:

  - Added the required column `status` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "status_order" AS ENUM ('pending', 'paid', 'expire', 'cancel');

-- AlterTable
ALTER TABLE "events" ADD COLUMN     "status" "event_status" NOT NULL;

-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "event_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "ticket_price" INTEGER NOT NULL,
    "total_price" INTEGER NOT NULL,
    "status" "status_order" NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
