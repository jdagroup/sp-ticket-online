-- CreateEnum
CREATE TYPE "event_status" AS ENUM ('pending', 'open_registration', 'close_registration', 'done', 'event_postpone', 'event_cancel');

-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL,
    "eo_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "date_start" TIMESTAMP(3) NOT NULL,
    "date_end" TIMESTAMP(3) NOT NULL,
    "ticket_price" INTEGER NOT NULL,
    "ticket_amount" INTEGER NOT NULL,
    "ticket_reg_open" TIMESTAMP(3) NOT NULL,
    "ticket_reg_close" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "events" ADD CONSTRAINT "events_eo_id_fkey" FOREIGN KEY ("eo_id") REFERENCES "event_organizers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
