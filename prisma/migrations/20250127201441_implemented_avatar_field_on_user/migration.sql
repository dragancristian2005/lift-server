/*
  Warnings:

  - You are about to drop the column `profile_picture` on the `users` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "files" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "originalName" TEXT NOT NULL,
    "blurHash" TEXT,
    "filePath" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profile_picture_id" TEXT,
    "height" INTEGER NOT NULL DEFAULT 0,
    "weight" INTEGER NOT NULL DEFAULT 0,
    "bodyFat" INTEGER NOT NULL DEFAULT 0,
    "goal_weight" INTEGER NOT NULL DEFAULT 0,
    "goal_body_fat" INTEGER NOT NULL DEFAULT 0,
    "calorie_intake" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "users_profile_picture_id_fkey" FOREIGN KEY ("profile_picture_id") REFERENCES "files" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_users" ("bodyFat", "calorie_intake", "email", "goal_body_fat", "goal_weight", "height", "id", "password", "username", "weight") SELECT "bodyFat", "calorie_intake", "email", "goal_body_fat", "goal_weight", "height", "id", "password", "username", "weight" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
CREATE UNIQUE INDEX "users_profile_picture_id_key" ON "users"("profile_picture_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
