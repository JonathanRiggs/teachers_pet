-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Parents" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "contact" TEXT NOT NULL,
    "car" TEXT NOT NULL,
    "pickup" TEXT NOT NULL,
    CONSTRAINT "Parents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Parents" ("car", "contact", "id", "pickup", "userId") SELECT "car", "contact", "id", "pickup", "userId" FROM "Parents";
DROP TABLE "Parents";
ALTER TABLE "new_Parents" RENAME TO "Parents";
CREATE UNIQUE INDEX "Parents_userId_key" ON "Parents"("userId");
CREATE TABLE "new_Students" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "grade" TEXT NOT NULL,
    "classroom" TEXT NOT NULL,
    CONSTRAINT "Students_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teachers" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Students_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Students" ("classroom", "grade", "id", "name", "teacherId", "userId") SELECT "classroom", "grade", "id", "name", "teacherId", "userId" FROM "Students";
DROP TABLE "Students";
ALTER TABLE "new_Students" RENAME TO "Students";
CREATE UNIQUE INDEX "Students_userId_key" ON "Students"("userId");
CREATE UNIQUE INDEX "Students_teacherId_key" ON "Students"("teacherId");
CREATE TABLE "new_Teachers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "classroom" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "testing" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    CONSTRAINT "Teachers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Teachers" ("classroom", "details", "id", "style", "testing", "userId") SELECT "classroom", "details", "id", "style", "testing", "userId" FROM "Teachers";
DROP TABLE "Teachers";
ALTER TABLE "new_Teachers" RENAME TO "Teachers";
CREATE UNIQUE INDEX "Teachers_userId_key" ON "Teachers"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
