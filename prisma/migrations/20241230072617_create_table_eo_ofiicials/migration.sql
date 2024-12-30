-- CreateTable
CREATE TABLE "eo_officials" (
    "id" TEXT NOT NULL,
    "eo_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "eo_officials_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "eo_officials" ADD CONSTRAINT "eo_officials_eo_id_fkey" FOREIGN KEY ("eo_id") REFERENCES "event_organizers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
