-- CreateTable
CREATE TABLE "urls" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "alias" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "urls_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "urls_alias_key" ON "urls"("alias");
