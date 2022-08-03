/*
  Warnings:

  - Added the required column `updated_at` to the `ufs` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ufs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ufName" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_ufs" ("id", "ufName") SELECT "id", "ufName" FROM "ufs";
DROP TABLE "ufs";
ALTER TABLE "new_ufs" RENAME TO "ufs";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
