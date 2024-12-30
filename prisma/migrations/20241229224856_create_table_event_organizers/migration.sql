-- CreateTable
CREATE TABLE "event_organizers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,

    CONSTRAINT "event_organizers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "event_organizers_code_key" ON "event_organizers"("code");

-- AddForeignKey
ALTER TABLE "event_organizers" ADD CONSTRAINT "event_organizers_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
