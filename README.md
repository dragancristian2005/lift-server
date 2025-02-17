# Backend architecture for LIFT / Gym tracker

This repository contains the backend architecture for [LIFT / Gym tracker](https://github.com/dragancristian2005/lift-mobile) app.
</br>
Following is a list of endpoints by feature that the server offers:

# Authentication and user settings
- **GET** /profile
- **POST** /login
- **POST** /register
- **POST** /profile-picture
- **POST** /user-info

| Settings                                     | Login                               | Register                               |
|----------------------------------------------|-------------------------------------|----------------------------------------|
| ![Image 1](assets/readme/settingsScreen.jpg) | ![Image 2](assets/readme/login.jpg) | ![Image 3](assets/readme/register.jpg) |

# Exercises
- **GET** /exercises

| Exercises                                        | Exercise Details                       |
|--------------------------------------------------|----------------------------------------|
| ![Image 1](assets/readme/allExercisesScreen.jpg) | ![Image 3](assets/readme/exercise.jpg) |

# Workouts
- **GET** /user-workouts
- **GET** /latest-workout
- **POST** /create-workout
- **DELETE** /delete-workout
- **DELETE** /clear-workouts

| Workouts                                    | Latest Workout                           | Create Workout                                    |
|---------------------------------------------|------------------------------------------|---------------------------------------------------|
| ![Image 1](assets/readme/workoutScreen.jpg) | ![Image 2](assets/readme/homeScreen.jpg) | ![Image 3](assets/readme/createWorkoutScreen.jpg) |

# Statistics
- **GET** /week-streak
- **GET** /weekly-progress

| Streak                                     | Heatmap                               | 
|--------------------------------------------|---------------------------------------|
| ![Image 1](assets/readme/streakScreen.jpg) | ![Image 2](assets/readme/heatmap.png) |
