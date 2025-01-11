-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_exercises_muscles" (
    "exercise_id" TEXT NOT NULL,
    "muscle_id" TEXT NOT NULL,

    PRIMARY KEY ("exercise_id", "muscle_id"),
    CONSTRAINT "exercises_muscles_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "exercises" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "exercises_muscles_muscle_id_fkey" FOREIGN KEY ("muscle_id") REFERENCES "muscles" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_exercises_muscles" ("exercise_id", "muscle_id") SELECT "exercise_id", "muscle_id" FROM "exercises_muscles";
DROP TABLE "exercises_muscles";
ALTER TABLE "new_exercises_muscles" RENAME TO "exercises_muscles";
CREATE TABLE "new_workouts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "workouts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_workouts" ("date", "id", "name", "user_id") SELECT "date", "id", "name", "user_id" FROM "workouts";
DROP TABLE "workouts";
ALTER TABLE "new_workouts" RENAME TO "workouts";
CREATE TABLE "new_workouts_exercises" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "workout_id" TEXT NOT NULL,
    "exercise_id" TEXT,
    CONSTRAINT "workouts_exercises_workout_id_fkey" FOREIGN KEY ("workout_id") REFERENCES "workouts" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "workouts_exercises_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "exercises" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_workouts_exercises" ("exercise_id", "id", "workout_id") SELECT "exercise_id", "id", "workout_id" FROM "workouts_exercises";
DROP TABLE "workouts_exercises";
ALTER TABLE "new_workouts_exercises" RENAME TO "workouts_exercises";
CREATE TABLE "new_workouts_exercises_sets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "reps" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "workout_exercise_id" TEXT NOT NULL,
    CONSTRAINT "workouts_exercises_sets_workout_exercise_id_fkey" FOREIGN KEY ("workout_exercise_id") REFERENCES "workouts_exercises" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_workouts_exercises_sets" ("id", "reps", "weight", "workout_exercise_id") SELECT "id", "reps", "weight", "workout_exercise_id" FROM "workouts_exercises_sets";
DROP TABLE "workouts_exercises_sets";
ALTER TABLE "new_workouts_exercises_sets" RENAME TO "workouts_exercises_sets";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
