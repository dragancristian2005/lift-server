import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const cristi = await prisma.user.upsert({
    where: { email: 'cristi@test.com' },
    update: {},
    create: {
      username: 'cristi',
      email: 'cristi@test.com',
      password: 'password123',
      height: 176,
      weight: 75,
      bodyFat: 19,
      goalWeight: 70,
      goalBodyFat: 15,
      calorieIntake: 2000,
    },
  });

  const damian = await prisma.user.upsert({
    where: { email: 'damian@test.com' },
    update: {},
    create: {
      username: 'damian',
      email: 'damian@test.com',
      password: 'password123',
      height: 190,
      weight: 95,
      bodyFat: 15,
      goalWeight: 90,
      goalBodyFat: 12,
      calorieIntake: 3000,
    },
  });

  const chestKiller = await prisma.workout.upsert({
    where: { id: 'cm5p64zjl000008jy91fygcph' },
    update: {},
    create: {
      name: 'Chest Killer',
      date: new Date(),
      userId: cristi.id,
    },
  });

  const bicepKiller = await prisma.workout.upsert({
    where: { id: 'cm5p64zjl000008jy91fygcph' },
    update: {},
    create: {
      name: 'Bicep Killer',
      date: new Date(),
      userId: damian.id,
    },
  });

  const chest = await prisma.muscle.upsert({
    where: { id: 'cm5p64zjl000008jy91fygcph' },
    update: {},
    create: {
      name: 'Chest',
      muscleImg:
        'https://aminoco.com/cdn/shop/articles/FeaturedImage_PulledChestMuscle.jpg?v=1592870496',
      information:
        "The chest is a large muscle group that should be trained with a variety of exercises for optimal results. The chest is made up of two muscles: the pectoralis major and the pectoralis minor. The pectoralis major is the larger of the two muscles and is the muscle that most people are referring to when they talk about the chest. The pectoralis minor is a smaller muscle that lies underneath the pectoralis major. Both muscles are responsible for moving the arms and shoulders, and they play a key role in upper body strength and stability. When training the chest, it's important to include a variety of exercises that target both the pectoralis major and minor. This will help to ensure that you are working all of the muscles in the chest and getting a well-rounded workout.",
    },
  });

  const biceps = await prisma.muscle.upsert({
    where: { id: 'cm5p64zjl000008jy91fygcph' },
    update: {},
    create: {
      name: 'Biceps',
      muscleImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpe3T3zUiAGsM0l7tu6s0su_bbHTLOitKveA&s',
      information:
        "The biceps are a muscle group that is located on the front of the upper arm. They are responsible for flexing the elbow joint and rotating the forearm. The biceps are made up of two muscles: the biceps brachii and the brachialis. The biceps brachii is the larger of the two muscles and is the muscle that most people are referring to when they talk about the biceps. The brachialis is a smaller muscle that lies underneath the biceps brachii. Both muscles are responsible for moving the arm and shoulder, and they play a key role in upper body strength and stability. When training the biceps, it's important to include a variety of exercises that target both the biceps brachii and the brachialis. This will help to ensure that you are working all of the muscles in the biceps and getting a well-rounded workout.",
    },
  });

  const benchPress = await prisma.exercise.upsert({
    where: { id: 'cm5p64zjl000008jy91fygcph' },
    update: {},
    create: {
      name: 'Bench Press',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfwagKnFx63uxxAI_rPgYBQIsFE3EFnfa4wQ&s',
      difficulty: 'Intermediate',
      demonstrationGif:
        'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bench-Press.gif',
      description:
        'The bench press is an upper-body weight training exercise in which the trainee presses a weight upwards while lying on a weight training bench.',
      type: 'Strength',
    },
  });

  const bicepCurl = await prisma.exercise.upsert({
    where: { id: 'cm5p64zjl000008jy91fygcph' },
    update: {},
    create: {
      name: 'Bicep Curl',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPVjwtbfTZ9oBZ7qIVUcGeJS-2tMcaufuNdw&s',
      difficulty: 'Beginner',
      demonstrationGif: 'https://gymvisual.com/img/p/5/0/2/7/5027.gif',
      description:
        'The biceps curl is a traditional exercise targeting the biceps muscles. It is performed by flexing the elbow joint, bringing the weight towards the shoulder.',
      type: 'Strength',
    },
  });

  const inclineBenchPress = await prisma.exercise.upsert({
    where: { id: 'cm5p64zjl000008jy91fygcph' },
    update: {},
    create: {
      name: 'Incline Bench Press',
      image:
        'https://image.myupchar.com/9694/webp/incline-bench-press-benefits-types-technique.webp',
      difficulty: 'Intermediate',
      demonstrationGif:
        'https://burnfit.io/wp-content/uploads/2023/11/BB_INC_PRESS.gif',
      description:
        "The incline bench press is a variation of the traditional bench press that targets the upper chest. It is performed by setting the bench to an incline (usually between 15 and 45 degrees) and pressing the weight upwards while lying on the bench. This exercise is great for building strength and size in the upper chest, shoulders, and triceps. It can also help to improve shoulder stability and reduce the risk of injury. When performing the incline bench press, it's important to use proper form and technique to ensure that you are targeting the intended muscles and getting the most out of the exercise.",
      type: 'Strength',
    },
  });

  const inclineBenchPressMuscle = await prisma.exerciseMuscle.createMany({
    data: [
      {
        exerciseId: inclineBenchPress.id,
        muscleId: chest.id,
      },
    ],
  });

  const benchPressMuscle = await prisma.exerciseMuscle.createMany({
    data: [
      {
        exerciseId: benchPress.id,
        muscleId: chest.id,
      },
    ],
  });

  const bicepCurlMuscle = await prisma.exerciseMuscle.createMany({
    data: [
      {
        exerciseId: bicepCurl.id,
        muscleId: biceps.id,
      },
    ],
  });

  const bicepKillerExercises = await prisma.workoutExercise.createMany({
    data: [
      {
        workoutId: bicepKiller.id,
        exerciseId: bicepCurl.id,
      },
    ],
  });

  const chestKillerExercises = await prisma.workoutExercise.createMany({
    data: [
      {
        workoutId: chestKiller.id,
        exerciseId: benchPress.id,
      },
      {
        workoutId: chestKiller.id,
        exerciseId: inclineBenchPress.id,
      },
    ],
  });

  const createdChestKillerExercises = await prisma.workoutExercise.findMany({
    where: {
      workoutId: chestKiller.id,
    },
  });

  const createdBicepKillerExercises = await prisma.workoutExercise.findMany({
    where: {
      workoutId: bicepKiller.id,
    },
  });

  const benchPressSets = await prisma.workoutExerciseSet.createMany({
    data: [
      {
        reps: 12,
        weight: 25,
        workoutExerciseId: createdChestKillerExercises[0].id,
      },
      {
        reps: 10,
        weight: 30,
        workoutExerciseId: createdChestKillerExercises[0].id,
      },
      {
        reps: 8,
        weight: 32,
        workoutExerciseId: createdChestKillerExercises[0].id,
      },
    ],
  });

  const inclineBenchPressSets = await prisma.workoutExerciseSet.createMany({
    data: [
      {
        reps: 12,
        weight: 25,
        workoutExerciseId: createdChestKillerExercises[1].id,
      },
      {
        reps: 10,
        weight: 30,
        workoutExerciseId: createdChestKillerExercises[1].id,
      },
      {
        reps: 8,
        weight: 32,
        workoutExerciseId: createdChestKillerExercises[1].id,
      },
    ],
  });

  const bicepCurlSets = await prisma.workoutExerciseSet.createMany({
    data: [
      {
        reps: 12,
        weight: 12,
        workoutExerciseId: createdBicepKillerExercises[0].id,
      },
      {
        reps: 10,
        weight: 15,
        workoutExerciseId: createdBicepKillerExercises[0].id,
      },
      {
        reps: 8,
        weight: 17,
        workoutExerciseId: createdBicepKillerExercises[0].id,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
