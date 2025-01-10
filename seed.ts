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

  const forearms = await prisma.muscle.upsert({
    where: { id: 'cm5p64zjl000008jy91fygcph' },
    update: {},
    create: {
      name: 'Forearms',
      muscleImg:
        'https://lh6.googleusercontent.com/proxy/27qO6ZGA6JZ-Rwb7WJPtEB6-F39LpQqJRu6Cz6HFQlBQ9KdOMMlj6JRH8J6upE_dVyxZnqvNyRCDdNkQ9AP5MLtUitaTXwahZ7Wt9EpVPZT2Za7E1UeD9UNJuBBi1MGvPzLqDO2VftIwHOjT8_Fn9ekj4ZSdBFasMwi6CN6u',
      information:
        "The forearms are a muscle group that is located on the front of the lower arm. They are responsible for flexing the wrist and fingers, and they play a key role in grip strength and stability. The forearms are made up of several muscles, including the flexor carpi radialis, the flexor carpi ulnaris, and the palmaris longus. These muscles work together to move the wrist and fingers, and they play a key role in upper body strength and stability. When training the forearms, it's important to include a variety of exercises that target all of the",
    },
  });

  const frontDelts = await prisma.muscle.upsert({
    where: { id: 'cm5p64zjl000008jy91fygcph' },
    update: {},
    create: {
      name: 'Front Delts',
      muscleImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQjpo9nNCaGjmBvkSutaN2Qc0-Y8V-taHbKw&s',
      information:
        "The front delts are a muscle group that is located on the front of the shoulder. They are responsible for moving the arm and shoulder, and they play a key role in upper body strength and stability. The front delts are made up of three muscles: the anterior deltoid, the lateral deltoid, and the posterior deltoid. The anterior deltoid is the largest of the three muscles and is the muscle that most people are referring to when they talk about the front delts. The lateral deltoid is a smaller muscle that lies underneath the anterior deltoid. The posterior deltoid is the smallest of the three muscles and is located on the back of the shoulder. All three muscles work together to move the arm and shoulder, and they play a key role in upper body strength and stability. When training the front delts, it's important to include a variety of exercises that target all three muscles. This will help to ensure that you are working all of the muscles in the front delts and getting a well-rounded workout.",
    },
  });

  const triceps = await prisma.muscle.upsert({
    where: { id: 'cm5p64zjl000008jy91fygcph' },
    update: {},
    create: {
      name: 'Triceps',
      muscleImg:
        'https://i.shgcdn.com/c39f9e9e-8e0a-4fa9-9ead-7ab7c3415c9d/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
      information:
        "The triceps are a muscle group that is located on the back of the upper arm. They are responsible for extending the elbow joint and straightening the arm. The triceps are made up of three muscles: the long head, the lateral head, and the medial head. The long head is the largest of the three muscles and is the muscle that most people are referring to when they talk about the triceps. The lateral head is a smaller muscle that lies underneath the long head. The medial head is the smallest of the three muscles and is located on the inside of the arm. All three muscles work together to extend the elbow joint and straighten the arm, and they play a key role in upper body strength and stability. When training the triceps, it's important to include a variety of exercises that target all three muscles. This will help to ensure that you are working all of the muscles in the triceps and getting a well-rounded workout.",
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

  const cableFly = await prisma.exercise.upsert({
    where: { id: 'cm5p64zjl000008jy91fygcph' },
    update: {},
    create: {
      name: 'Cable Fly',
      image:
        'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/cable-cross-over-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4',
      difficulty: 'Intermediate',
      demonstrationGif:
        'https://burnfit.io/wp-content/uploads/2023/11/STD_CABLE_FLY.gif',
      description:
        "The cable fly is a great exercise for targeting the chest muscles. It is performed by standing in the middle of a cable machine and pulling the cables together in front of you. This exercise is great for building strength and size in the chest, shoulders, and triceps. It can also help to improve shoulder stability and reduce the risk of injury. When performing the cable fly, it's important to use proper form and technique to ensure that you are targeting the intended muscles and getting the most out of the exercise.",
      type: 'Strength',
    },
  });

  const declineBenchPress = await prisma.exercise.upsert({
    where: { id: 'cm5p64zjl000008jy91fygcph' },
    update: {},
    create: {
      name: 'Decline Bench Press',
      image:
        'https://cdn.shopify.com/s/files/1/0252/3155/6686/files/How_to_do_Decline_Bench_Press_1.jpg?v=1721223035',
      difficulty: 'Intermediate',
      demonstrationGif: 'https://gymvisual.com/img/p/2/1/8/8/7/21887.gif',
      description:
        "The decline bench press is a variation of the traditional bench press that targets the lower chest. It is performed by setting the bench to a decline (usually between 15 and 45 degrees) and pressing the weight upwards while lying on the bench. This exercise is great for building strength and size in the lower chest, shoulders, and triceps. It can also help to improve shoulder stability and reduce the risk of injury. When performing the decline bench press, it's important to use proper form and technique to ensure that you are targeting the intended muscles and getting the most out of the exercise.",
      type: 'Strength',
    },
  });

  const bicepCurl = await prisma.exercise.upsert({
    where: { id: 'cm5p64zjl000008jy91fygcph' },
    update: {},
    create: {
      name: 'Bicep Curls',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPVjwtbfTZ9oBZ7qIVUcGeJS-2tMcaufuNdw&s',
      difficulty: 'Beginner',
      demonstrationGif: 'https://gymvisual.com/img/p/5/0/2/7/5027.gif',
      description:
        'The biceps curl is a traditional exercise targeting the biceps muscles. It is performed by flexing the elbow joint, bringing the weight towards the shoulder.',
      type: 'Strength',
    },
  });

  const hammerCurl = await prisma.exercise.upsert({
    where: { id: 'cm5p64zjl000008jy91fygcph' },
    update: {},
    create: {
      name: 'Hammer Curls',
      image:
        'https://cdn.shopify.com/s/files/1/1876/4703/files/shutterstock_419477203_480x480.jpg?v=1636560233',
      difficulty: 'Beginner',
      demonstrationGif:
        'https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif',
      description:
        "The hammer curl is a variation of the traditional bicep curl that targets the biceps muscles. It is performed by holding a pair of dumbbells with a neutral grip (palms facing each other) and curling the weights towards the shoulders. This exercise is great for building strength and size in the biceps, forearms, and brachialis. It can also help to improve grip strength and reduce the risk of injury. When performing the hammer curl, it's important to use proper form and technique to ensure that you are targeting the intended muscles and getting the most out of the exercise.",
      type: 'Strength',
    },
  });

  const ezBarCurl = await prisma.exercise.upsert({
    where: { id: 'cm5p64zjl000008jy91fygcph' },
    update: {},
    create: {
      name: 'EZ Bar Curls',
      image:
        'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/EZ-Barbell-Curl-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4',
      difficulty: 'Beginner',
      demonstrationGif: 'https://gymvisual.com/img/p/5/1/8/8/5188.gif',
      description:
        "The EZ bar curl is a variation of the traditional bicep curl that targets the biceps muscles. It is performed by holding an EZ bar with a shoulder-width grip and curling the weight towards the shoulders. This exercise is great for building strength and size in the biceps, forearms, and brachialis. It can also help to improve grip strength and reduce the risk of injury. When performing the EZ bar curl, it's important to use proper form and technique to ensure that you are targeting the intended muscles and getting the most out of the exercise.",
      type: 'Strength',
    },
  });

  const preacherCurl = await prisma.exercise.upsert({
    where: { id: 'cm5p64zjl000008jy91fygcph' },
    update: {},
    create: {
      name: 'Preacher Curls',
      image:
        'https://www.kettlebellkings.com/cdn/shop/articles/Preacher_Curl_Alternatives.png?v=1731324163',
      difficulty: 'Beginner',
      demonstrationGif:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiP7Z7AI48VPxSR_iCcEGP65ZDn22HNf7y5w&s',
      description:
        "The preacher curl is a variation of the traditional bicep curl that targets the biceps muscles. It is performed by sitting on a preacher bench and curling the weight towards the shoulders. This exercise is great for building strength and size in the biceps, forearms, and brachialis. It can also help to improve grip strength and reduce the risk of injury. When performing the preacher curl, it's important to use proper form and technique to ensure that you are targeting the intended muscles and getting the most out of the exercise.",
      type: 'Strength',
    },
  });

  await prisma.exerciseMuscle.createMany({
    data: [
      {
        exerciseId: cableFly.id,
        muscleId: chest.id,
      },
      {
        exerciseId: cableFly.id,
        muscleId: frontDelts.id,
      },
    ],
  });

  await prisma.exerciseMuscle.createMany({
    data: [
      {
        exerciseId: inclineBenchPress.id,
        muscleId: chest.id,
      },
      {
        exerciseId: inclineBenchPress.id,
        muscleId: frontDelts.id,
      },
      {
        exerciseId: inclineBenchPress.id,
        muscleId: triceps.id,
      },
    ],
  });

  await prisma.exerciseMuscle.createMany({
    data: [
      {
        exerciseId: benchPress.id,
        muscleId: chest.id,
      },
      {
        exerciseId: benchPress.id,
        muscleId: frontDelts.id,
      },
      {
        exerciseId: benchPress.id,
        muscleId: triceps.id,
      },
    ],
  });

  await prisma.exerciseMuscle.createMany({
    data: [
      {
        exerciseId: declineBenchPress.id,
        muscleId: chest.id,
      },
      {
        exerciseId: declineBenchPress.id,
        muscleId: frontDelts.id,
      },
      {
        exerciseId: declineBenchPress.id,
        muscleId: triceps.id,
      },
    ],
  });

  await prisma.exerciseMuscle.createMany({
    data: [
      {
        exerciseId: bicepCurl.id,
        muscleId: biceps.id,
      },
      {
        exerciseId: bicepCurl.id,
        muscleId: forearms.id,
      },
    ],
  });

  await prisma.exerciseMuscle.createMany({
    data: [
      {
        exerciseId: hammerCurl.id,
        muscleId: biceps.id,
      },
      {
        exerciseId: hammerCurl.id,
        muscleId: forearms.id,
      },
    ],
  });

  await prisma.exerciseMuscle.createMany({
    data: [
      {
        exerciseId: ezBarCurl.id,
        muscleId: biceps.id,
      },
      {
        exerciseId: ezBarCurl.id,
        muscleId: forearms.id,
      },
    ],
  });

  await prisma.exerciseMuscle.createMany({
    data: [
      {
        exerciseId: preacherCurl.id,
        muscleId: biceps.id,
      },
      {
        exerciseId: preacherCurl.id,
        muscleId: forearms.id,
      },
    ],
  });

  await prisma.workoutExercise.createMany({
    data: [
      {
        workoutId: bicepKiller.id,
        exerciseId: bicepCurl.id,
      },
      {
        workoutId: bicepKiller.id,
        exerciseId: hammerCurl.id,
      },
      {
        workoutId: bicepKiller.id,
        exerciseId: ezBarCurl.id,
      },
      {
        workoutId: bicepKiller.id,
        exerciseId: preacherCurl.id,
      },
    ],
  });

  await prisma.workoutExercise.createMany({
    data: [
      {
        workoutId: chestKiller.id,
        exerciseId: benchPress.id,
      },
      {
        workoutId: chestKiller.id,
        exerciseId: inclineBenchPress.id,
      },
      {
        workoutId: chestKiller.id,
        exerciseId: cableFly.id,
      },
      {
        workoutId: chestKiller.id,
        exerciseId: declineBenchPress.id,
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

  await prisma.workoutExerciseSet.createMany({
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
      {
        reps: 8,
        weight: 32,
        workoutExerciseId: createdChestKillerExercises[0].id,
      },
    ],
  });

  await prisma.workoutExerciseSet.createMany({
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
      {
        reps: 8,
        weight: 32,
        workoutExerciseId: createdChestKillerExercises[1].id,
      },
    ],
  });

  await prisma.workoutExerciseSet.createMany({
    data: [
      {
        reps: 12,
        weight: 15,
        workoutExerciseId: createdChestKillerExercises[2].id,
      },
      {
        reps: 10,
        weight: 17,
        workoutExerciseId: createdChestKillerExercises[2].id,
      },
      {
        reps: 8,
        weight: 20,
        workoutExerciseId: createdChestKillerExercises[2].id,
      },
      {
        reps: 8,
        weight: 20,
        workoutExerciseId: createdChestKillerExercises[2].id,
      },
    ],
  });

  await prisma.workoutExerciseSet.createMany({
    data: [
      {
        reps: 12,
        weight: 20,
        workoutExerciseId: createdChestKillerExercises[3].id,
      },
      {
        reps: 10,
        weight: 22,
        workoutExerciseId: createdChestKillerExercises[3].id,
      },
      {
        reps: 8,
        weight: 25,
        workoutExerciseId: createdChestKillerExercises[3].id,
      },
      {
        reps: 8,
        weight: 25,
        workoutExerciseId: createdChestKillerExercises[3].id,
      },
    ],
  });

  await prisma.workoutExerciseSet.createMany({
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

  await prisma.workoutExerciseSet.createMany({
    data: [
      {
        reps: 12,
        weight: 12,
        workoutExerciseId: createdBicepKillerExercises[1].id,
      },
      {
        reps: 10,
        weight: 15,
        workoutExerciseId: createdBicepKillerExercises[1].id,
      },
      {
        reps: 8,
        weight: 17,
        workoutExerciseId: createdBicepKillerExercises[1].id,
      },
    ],
  });

  await prisma.workoutExerciseSet.createMany({
    data: [
      {
        reps: 12,
        weight: 20,
        workoutExerciseId: createdBicepKillerExercises[2].id,
      },
      {
        reps: 10,
        weight: 25,
        workoutExerciseId: createdBicepKillerExercises[2].id,
      },
      {
        reps: 8,
        weight: 27,
        workoutExerciseId: createdBicepKillerExercises[2].id,
      },
    ],
  });

  await prisma.workoutExerciseSet.createMany({
    data: [
      {
        reps: 12,
        weight: 17,
        workoutExerciseId: createdBicepKillerExercises[3].id,
      },
      {
        reps: 10,
        weight: 20,
        workoutExerciseId: createdBicepKillerExercises[3].id,
      },
      {
        reps: 8,
        weight: 22,
        workoutExerciseId: createdBicepKillerExercises[3].id,
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
