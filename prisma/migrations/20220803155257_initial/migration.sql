-- CreateTable
CREATE TABLE "cities" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "ufs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ufName" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "cities_name_key" ON "cities"("name");
