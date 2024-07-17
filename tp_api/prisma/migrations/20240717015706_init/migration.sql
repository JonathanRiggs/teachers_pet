/*
  Warnings:

  - Added the required column `teacherId` to the `Assignments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherId` to the `Resources` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Assignments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "details" TEXT,
    "link" TEXT,
    "studentId" INTEGER NOT NULL,
    "parentId" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL
);
INSERT INTO "new_Assignments" ("details", "id", "link", "name", "parentId", "studentId") SELECT "details", "id", "link", "name", "parentId", "studentId" FROM "Assignments";
DROP TABLE "Assignments";
ALTER TABLE "new_Assignments" RENAME TO "Assignments";
CREATE TABLE "new_Resources" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "details" TEXT,
    "link" TEXT,
    "studentId" INTEGER NOT NULL,
    "parentId" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL
);
INSERT INTO "new_Resources" ("details", "id", "link", "name", "parentId", "studentId") SELECT "details", "id", "link", "name", "parentId", "studentId" FROM "Resources";
DROP TABLE "Resources";
ALTER TABLE "new_Resources" RENAME TO "Resources";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
