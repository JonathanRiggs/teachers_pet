-- CreateTable
CREATE TABLE "Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Teachers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "classroom" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "testing" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    CONSTRAINT "Teachers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Parents" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "contact" TEXT NOT NULL,
    "car" TEXT NOT NULL,
    "pickup" TEXT NOT NULL,
    CONSTRAINT "Parents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Students" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "grade" TEXT NOT NULL,
    "classroom" TEXT NOT NULL,
    CONSTRAINT "Students_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teachers" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Students_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "teacherToStudents" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "studentId" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL,
    CONSTRAINT "teacherToStudents_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teachers" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "teacherToStudents_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Students" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "parentsToStudents" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "parentId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,
    CONSTRAINT "parentsToStudents_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Parents" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "parentsToStudents_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Students" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "parentsToTeacher" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "parentId" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL,
    CONSTRAINT "parentsToTeacher_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Parents" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "parentsToTeacher_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teachers" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Assignments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "details" TEXT,
    "link" TEXT,
    "studentId" INTEGER NOT NULL,
    "parentId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Resources" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "details" TEXT,
    "link" TEXT,
    "studentId" INTEGER NOT NULL,
    "parentId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Grades" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "grade" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "notes" TEXT,
    "studentId" INTEGER NOT NULL,
    "parentId" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "SpellingWords" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "word" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "notes" TEXT,
    "studentId" INTEGER NOT NULL,
    "parentId" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Behavior" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "level" TEXT NOT NULL,
    "issue" TEXT NOT NULL,
    "details" TEXT,
    "studentId" INTEGER NOT NULL,
    "parentId" INTEGER NOT NULL,
    "teacherId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ParentToTeacher" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ParentToTeacher_A_fkey" FOREIGN KEY ("A") REFERENCES "Parents" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ParentToTeacher_B_fkey" FOREIGN KEY ("B") REFERENCES "Teachers" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Teachers_userId_key" ON "Teachers"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Parents_userId_key" ON "Parents"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Students_userId_key" ON "Students"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Students_teacherId_key" ON "Students"("teacherId");

-- CreateIndex
CREATE UNIQUE INDEX "teacherToStudents_studentId_key" ON "teacherToStudents"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "teacherToStudents_teacherId_key" ON "teacherToStudents"("teacherId");

-- CreateIndex
CREATE UNIQUE INDEX "parentsToStudents_parentId_key" ON "parentsToStudents"("parentId");

-- CreateIndex
CREATE UNIQUE INDEX "parentsToStudents_studentId_key" ON "parentsToStudents"("studentId");

-- CreateIndex
CREATE UNIQUE INDEX "parentsToTeacher_parentId_key" ON "parentsToTeacher"("parentId");

-- CreateIndex
CREATE UNIQUE INDEX "parentsToTeacher_teacherId_key" ON "parentsToTeacher"("teacherId");

-- CreateIndex
CREATE UNIQUE INDEX "_ParentToTeacher_AB_unique" ON "_ParentToTeacher"("A", "B");

-- CreateIndex
CREATE INDEX "_ParentToTeacher_B_index" ON "_ParentToTeacher"("B");
