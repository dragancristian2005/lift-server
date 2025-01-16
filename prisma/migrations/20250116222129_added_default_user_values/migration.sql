-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "height" INTEGER NOT NULL DEFAULT 0,
    "weight" INTEGER NOT NULL DEFAULT 0,
    "bodyFat" INTEGER NOT NULL DEFAULT 0,
    "goal_weight" INTEGER NOT NULL DEFAULT 0,
    "goal_body_fat" INTEGER NOT NULL DEFAULT 0,
    "calorie_intake" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_users" ("bodyFat", "calorie_intake", "email", "goal_body_fat", "goal_weight", "height", "id", "password", "username", "weight") SELECT "bodyFat", "calorie_intake", "email", "goal_body_fat", "goal_weight", "height", "id", "password", "username", "weight" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
