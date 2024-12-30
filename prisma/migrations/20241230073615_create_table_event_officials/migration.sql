-- CreateTable
CREATE TABLE "event_officials" (
    "event_id" TEXT NOT NULL,
    "official_id" TEXT NOT NULL,

    CONSTRAINT "event_officials_pkey" PRIMARY KEY ("event_id","official_id")
);

-- AddForeignKey
ALTER TABLE "event_officials" ADD CONSTRAINT "event_officials_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_officials" ADD CONSTRAINT "event_officials_official_id_fkey" FOREIGN KEY ("official_id") REFERENCES "eo_officials"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
