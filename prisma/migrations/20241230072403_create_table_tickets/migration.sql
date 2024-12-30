-- CreateTable
CREATE TABLE "tickets" (
    "id" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    "ticket_number" INTEGER NOT NULL,
    "code" VARCHAR(8) NOT NULL,
    "check_in" TIMESTAMP(3) NOT NULL,
    "check_in_by" TEXT NOT NULL,
    "check_out" TIMESTAMP(3) NOT NULL,
    "check_out_by" TEXT NOT NULL,

    CONSTRAINT "tickets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tickets_code_key" ON "tickets"("code");

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_check_in_by_fkey" FOREIGN KEY ("check_in_by") REFERENCES "event_organizers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_check_out_by_fkey" FOREIGN KEY ("check_out_by") REFERENCES "event_organizers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
