import { PrismaClient } from '@prisma/client';
import { createHash } from 'crypto';
const prisma = new PrismaClient();

async function main() {
  const cristi = await prisma.user.upsert({
    where: { email: 'cristi@test.com' },
    update: {},
    create: {
      username: 'cristi',
      email: 'cristi@test.com',
      password: createHash('sha256').update('password123').digest('base64'),
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
      password: createHash('sha256').update('password123').digest('base64'),
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
      id: 'cm5p64zjl000008jy91fygcph',
      name: 'Chest Killer',
      date: new Date(),
      finished: new Date(),
      userId: cristi.id,
    },
  });

  const bicepKiller = await prisma.workout.upsert({
    where: { id: 'cm5s9w7nw000008jy1nng72ko' },
    update: {},
    create: {
      id: 'cm5s9w7nw000008jy1nng72ko',
      name: 'Bicep Killer',
      date: new Date(),
      finished: new Date(),
      userId: damian.id,
    },
  });

  const tricepsKiller = await prisma.workout.upsert({
    where: { id: 'cm5y3od9m000008med5jt2e8j' },
    update: {},
    create: {
      id: 'cm5y3od9m000008med5jt2e8j',
      name: 'Triceps Killer',
      date: new Date(),
      finished: new Date(),
      userId: cristi.id,
    },
  });

  const chest = await prisma.muscle.upsert({
    where: { id: 'cm5s9wnub000208jy66im1qp9' },
    update: {},
    create: {
      id: 'cm5s9wnub000208jy66im1qp9',
      name: 'Chest',
      muscleImg:
        'https://aminoco.com/cdn/shop/articles/FeaturedImage_PulledChestMuscle.jpg?v=1592870496',
      information:
        "The chest is a large muscle group that should be trained with a variety of exercises for optimal results. The chest is made up of two muscles: the pectoralis major and the pectoralis minor. The pectoralis major is the larger of the two muscles and is the muscle that most people are referring to when they talk about the chest. The pectoralis minor is a smaller muscle that lies underneath the pectoralis major. Both muscles are responsible for moving the arms and shoulders, and they play a key role in upper body strength and stability. When training the chest, it's important to include a variety of exercises that target both the pectoralis major and minor. This will help to ensure that you are working all of the muscles in the chest and getting a well-rounded workout.",
    },
  });

  const bicepsBrachi = await prisma.muscle.upsert({
    where: { id: 'cm5s9wxe3000308jyhn7r0ez7' },
    update: {},
    create: {
      id: 'cm5s9wxe3000308jyhn7r0ez7',
      name: 'Biceps Brachi',
      muscleImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpe3T3zUiAGsM0l7tu6s0su_bbHTLOitKveA&s',
      information:
        "The biceps are a muscle group that is located on the front of the upper arm. They are responsible for flexing the elbow joint and rotating the forearm. The biceps are made up of two muscles: the biceps brachii and the brachialis. The biceps brachii is the larger of the two muscles and is the muscle that most people are referring to when they talk about the biceps. The brachialis is a smaller muscle that lies underneath the biceps brachii. Both muscles are responsible for moving the arm and shoulder, and they play a key role in upper body strength and stability. When training the biceps, it's important to include a variety of exercises that target both the biceps brachii and the brachialis. This will help to ensure that you are working all of the muscles in the biceps and getting a well-rounded workout.",
    },
  });

  const brachioradialis = await prisma.muscle.upsert({
    where: { id: 'cm5s9x8rx000008jyanpl09ek' },
    update: {},
    create: {
      id: 'cm5s9x8rx000008jyanpl09ek',
      name: 'Brachioradialis',
      muscleImg:
        'https://lh6.googleusercontent.com/proxy/27qO6ZGA6JZ-Rwb7WJPtEB6-F39LpQqJRu6Cz6HFQlBQ9KdOMMlj6JRH8J6upE_dVyxZnqvNyRCDdNkQ9AP5MLtUitaTXwahZ7Wt9EpVPZT2Za7E1UeD9UNJuBBi1MGvPzLqDO2VftIwHOjT8_Fn9ekj4ZSdBFasMwi6CN6u',
      information:
        "The brachioradialis are a muscle group that is located on the front of the lower arm. They are responsible for flexing the wrist and fingers, and they play a key role in grip strength and stability. The brachioradialis are made up of several muscles, including the flexor carpi radialis, the flexor carpi ulnaris, and the palmaris longus. These muscles work together to move the wrist and fingers, and they play a key role in upper body strength and stability. When training the brachioradialis, it's important to include a variety of exercises that target all of the",
    },
  });

  const deltoidsFront = await prisma.muscle.upsert({
    where: { id: 'cm5s9xgdb000108jycla5fo1j' },
    update: {},
    create: {
      id: 'cm5s9xgdb000108jycla5fo1j',
      name: 'Deltoids Front',
      muscleImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQjpo9nNCaGjmBvkSutaN2Qc0-Y8V-taHbKw&s',
      information:
        "The front delts are a muscle group that is located on the front of the shoulder. They are responsible for moving the arm and shoulder, and they play a key role in upper body strength and stability. The front delts are made up of three muscles: the anterior deltoid, the lateral deltoid, and the posterior deltoid. The anterior deltoid is the largest of the three muscles and is the muscle that most people are referring to when they talk about the front delts. The lateral deltoid is a smaller muscle that lies underneath the anterior deltoid. The posterior deltoid is the smallest of the three muscles and is located on the back of the shoulder. All three muscles work together to move the arm and shoulder, and they play a key role in upper body strength and stability. When training the front delts, it's important to include a variety of exercises that target all three muscles. This will help to ensure that you are working all of the muscles in the front delts and getting a well-rounded workout.",
    },
  });

  const triceps = await prisma.muscle.upsert({
    where: { id: 'cm5s9xn7b000208jyfv7neimh' },
    update: {},
    create: {
      id: 'cm5s9xn7b000208jyfv7neimh',
      name: 'Triceps',
      muscleImg:
        'https://i.shgcdn.com/c39f9e9e-8e0a-4fa9-9ead-7ab7c3415c9d/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
      information:
        "The triceps are a muscle group that is located on the back of the upper arm. They are responsible for extending the elbow joint and straightening the arm. The triceps are made up of three muscles: the long head, the lateral head, and the medial head. The long head is the largest of the three muscles and is the muscle that most people are referring to when they talk about the triceps. The lateral head is a smaller muscle that lies underneath the long head. The medial head is the smallest of the three muscles and is located on the inside of the arm. All three muscles work together to extend the elbow joint and straighten the arm, and they play a key role in upper body strength and stability. When training the triceps, it's important to include a variety of exercises that target all three muscles. This will help to ensure that you are working all of the muscles in the triceps and getting a well-rounded workout.",
    },
  });

  const benchPress = await prisma.exercise.upsert({
    where: { id: 'cm5s9y0jd000308jygp03c5z7' },
    update: {},
    create: {
      id: 'cm5s9y0jd000308jygp03c5z7',
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
    where: { id: 'cm5s9y7qj000408jyb4b3fmz5' },
    update: {},
    create: {
      id: 'cm5s9y7qj000408jyb4b3fmz5',
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
    where: { id: 'cm5s9ye4j000508jy8x5bc4b0' },
    update: {},
    create: {
      id: 'cm5s9ye4j000508jy8x5bc4b0',
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
    where: { id: 'cm5s9ypzi000608jy0g953rfu' },
    update: {},
    create: {
      id: 'cm5s9ypzi000608jy0g953rfu',
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
    where: { id: 'cm5s9yz46000708jybq8n02i0' },
    update: {},
    create: {
      id: 'cm5s9yz46000708jybq8n02i0',
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
    where: { id: 'cm5s9z5h5000808jy6nbsfz95' },
    update: {},
    create: {
      id: 'cm5s9z5h5000808jy6nbsfz95',
      name: 'Hammer Curls',
      image:
        'https://cdn.shopify.com/s/files/1/1876/4703/files/shutterstock_419477203_480x480.jpg?v=1636560233',
      difficulty: 'Beginner',
      demonstrationGif:
        'https://fitnessprogramer.com/wp-content/uploads/2021/02/Hammer-Curl.gif',
      description:
        "The hammer curl is a variation of the traditional bicep curl that targets the biceps muscles. It is performed by holding a pair of dumbbells with a neutral grip (palms facing each other) and curling the weights towards the shoulders. This exercise is great for building strength and size in the biceps, brachioradialis, and brachialis. It can also help to improve grip strength and reduce the risk of injury. When performing the hammer curl, it's important to use proper form and technique to ensure that you are targeting the intended muscles and getting the most out of the exercise.",
      type: 'Strength',
    },
  });

  const ezBarCurl = await prisma.exercise.upsert({
    where: { id: 'cm5s9zd67000908jy604casvi' },
    update: {},
    create: {
      id: 'cm5s9zd67000908jy604casvi',
      name: 'EZ Bar Curls',
      image:
        'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/EZ-Barbell-Curl-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4',
      difficulty: 'Beginner',
      demonstrationGif: 'https://gymvisual.com/img/p/5/1/8/8/5188.gif',
      description:
        "The EZ bar curl is a variation of the traditional bicep curl that targets the biceps muscles. It is performed by holding an EZ bar with a shoulder-width grip and curling the weight towards the shoulders. This exercise is great for building strength and size in the biceps, brachioradialis, and brachialis. It can also help to improve grip strength and reduce the risk of injury. When performing the EZ bar curl, it's important to use proper form and technique to ensure that you are targeting the intended muscles and getting the most out of the exercise.",
      type: 'Strength',
    },
  });

  const preacherCurl = await prisma.exercise.upsert({
    where: { id: 'cm5s9zkn0000a08jy1r0d11iu' },
    update: {},
    create: {
      id: 'cm5s9zkn0000a08jy1r0d11iu',
      name: 'Preacher Curls',
      image:
        'https://www.kettlebellkings.com/cdn/shop/articles/Preacher_Curl_Alternatives.png?v=1731324163',
      difficulty: 'Beginner',
      demonstrationGif:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiP7Z7AI48VPxSR_iCcEGP65ZDn22HNf7y5w&s',
      description:
        "The preacher curl is a variation of the traditional bicep curl that targets the biceps muscles. It is performed by sitting on a preacher bench and curling the weight towards the shoulders. This exercise is great for building strength and size in the biceps, brachioradialis, and brachialis. It can also help to improve grip strength and reduce the risk of injury. When performing the preacher curl, it's important to use proper form and technique to ensure that you are targeting the intended muscles and getting the most out of the exercise.",
      type: 'Strength',
    },
  });

  const overheadTricepsExtensions = await prisma.exercise.upsert({
    where: { id: 'cm5yhn55i000008l79gxv1q4r' },
    update: {},
    create: {
      id: 'cm5yhn55i000008l79gxv1q4r',
      name: 'Overhead Triceps Extensions',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIWdIzZpPFbjvYU7E_IqTcvKuqJtLrmlvwUA&s',
      difficulty: 'Intermediate',
      demonstrationGif:
        'https://i.pinimg.com/originals/e1/64/bf/e164bfe4db5977f639c427cf40871b56.gif',
      description:
        'The overhead triceps extension is an effective exercise for targeting the triceps muscles, which are located on the back of the upper arm. This exercise involves extending the arms overhead while holding a weight, such as a dumbbell or a barbell, and then lowering the weight behind the head before extending the arms back to the starting position.',
      type: 'Strength',
    },
  });

  const skullCrushers = await prisma.exercise.upsert({
    where: { id: 'cm5yhqnh1000208l7bw509a5s' },
    update: {},
    create: {
      id: 'cm5yhqnh1000208l7bw509a5s',
      name: 'Skull Crushers',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWKusz70M1CDNQOL-aoNKrWGXM_SjCWIxDRg&s',
      difficulty: 'Intermediate',
      demonstrationGif:
        'https://media.tenor.com/ToAHkKHVQP4AAAAM/on-lying-triceps-al%C4%B1n-press.gif',
      description:
        'Skull crushers, also known as lying triceps extensions, are an effective exercise for targeting the triceps muscles, which are located on the back of the upper arm. This exercise involves lying on a bench and extending the arms while holding a weight, such as a barbell or dumbbells, and then lowering the weight towards the forehead before extending the arms back to the starting position ',
      type: 'Strength',
    },
  });

  const pushUps = await prisma.exercise.upsert({
    where: { id: 'cm5yhx3gg000608l77p207xfm' },
    update: {},
    create: {
      id: 'cm5yhx3gg000608l77p207xfm',
      name: 'Push Ups',
      image:
        'https://kinxlearning.com/cdn/shop/files/Pushup_1400x.jpg?v=1705765225',
      difficulty: 'Beginner',
      demonstrationGif: 'https://gymvisual.com/img/p/1/0/0/8/3/10083.gif',
      description:
        'Push-ups are a fundamental bodyweight exercise that primarily targets the chest, shoulders, and triceps. They also engage the core and lower body muscles to a lesser extent.',
      type: 'Strength',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: overheadTricepsExtensions.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: overheadTricepsExtensions.id,
          muscleId: triceps.id,
        },
      ],
    }),
  ]);

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: pushUps.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: pushUps.id,
          muscleId: triceps.id,
        },
        {
          exerciseId: pushUps.id,
          muscleId: chest.id,
        },
      ],
    }),
  ]);

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: skullCrushers.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: skullCrushers.id,
          muscleId: triceps.id,
        },
      ],
    }),
  ]);

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({ where: { exerciseId: cableFly.id } }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: cableFly.id,
          muscleId: chest.id,
        },
        {
          exerciseId: cableFly.id,
          muscleId: deltoidsFront.id,
        },
      ],
    }),
  ]);

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: inclineBenchPress.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: inclineBenchPress.id,
          muscleId: chest.id,
        },
        {
          exerciseId: inclineBenchPress.id,
          muscleId: deltoidsFront.id,
        },
        {
          exerciseId: inclineBenchPress.id,
          muscleId: triceps.id,
        },
      ],
    }),
  ]);

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: benchPress.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: benchPress.id,
          muscleId: chest.id,
        },
        {
          exerciseId: benchPress.id,
          muscleId: deltoidsFront.id,
        },
        {
          exerciseId: benchPress.id,
          muscleId: triceps.id,
        },
      ],
    }),
  ]);

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: declineBenchPress.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: declineBenchPress.id,
          muscleId: chest.id,
        },
        {
          exerciseId: declineBenchPress.id,
          muscleId: deltoidsFront.id,
        },
        {
          exerciseId: declineBenchPress.id,
          muscleId: triceps.id,
        },
      ],
    }),
  ]);

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: bicepCurl.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: bicepCurl.id,
          muscleId: bicepsBrachi.id,
        },
        {
          exerciseId: bicepCurl.id,
          muscleId: brachioradialis.id,
        },
      ],
    }),
  ]);

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: hammerCurl.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: hammerCurl.id,
          muscleId: bicepsBrachi.id,
        },
        {
          exerciseId: hammerCurl.id,
          muscleId: brachioradialis.id,
        },
      ],
    }),
  ]);

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: ezBarCurl.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: ezBarCurl.id,
          muscleId: bicepsBrachi.id,
        },
        {
          exerciseId: ezBarCurl.id,
          muscleId: brachioradialis.id,
        },
      ],
    }),
  ]);

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: preacherCurl.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: preacherCurl.id,
          muscleId: bicepsBrachi.id,
        },
        {
          exerciseId: preacherCurl.id,
          muscleId: brachioradialis.id,
        },
      ],
    }),
  ]);

  await prisma.$transaction([
    prisma.workoutExercise.deleteMany({
      where: { workoutId: bicepKiller.id },
    }),
    prisma.workoutExercise.createMany({
      data: [
        {
          id: 'cm5sb2gda000408me5ipnb6fv',
          workoutId: bicepKiller.id,
          exerciseId: bicepCurl.id,
        },
        {
          id: 'cm5sb2lm1000508me5jcx2zy5',
          workoutId: bicepKiller.id,
          exerciseId: hammerCurl.id,
        },
        {
          id: 'cm5sb2rhz000608me1q2k8ky8',
          workoutId: bicepKiller.id,
          exerciseId: ezBarCurl.id,
        },
        {
          id: 'cm5sb2zcf000708me6f810cfq',
          workoutId: bicepKiller.id,
          exerciseId: preacherCurl.id,
        },
      ],
    }),
  ]);

  await prisma.$transaction([
    prisma.workoutExercise.deleteMany({
      where: { workoutId: chestKiller.id },
    }),
    prisma.workoutExercise.createMany({
      data: [
        {
          id: 'cm5sazwkm000008jl36x4gr7e',
          workoutId: chestKiller.id,
          exerciseId: benchPress.id,
        },
        {
          id: 'cm5sb12eo000008megywx63of',
          workoutId: chestKiller.id,
          exerciseId: inclineBenchPress.id,
        },
        {
          id: 'cm5sb158m000108medq3q6n1r',
          workoutId: chestKiller.id,
          exerciseId: cableFly.id,
        },
        {
          id: 'cm5sb1hto000208me4bkdh9nw',
          workoutId: chestKiller.id,
          exerciseId: declineBenchPress.id,
        },
      ],
    }),
  ]);

  await prisma.$transaction([
    prisma.workoutExercise.deleteMany({
      where: { workoutId: tricepsKiller.id },
    }),
    prisma.workoutExercise.createMany({
      data: [
        {
          id: 'cm5yhvtix000308l7hf5zafrz',
          workoutId: tricepsKiller.id,
          exerciseId: overheadTricepsExtensions.id,
        },
        {
          id: 'cm5yhvya8000408l7ekjc0w40',
          workoutId: tricepsKiller.id,
          exerciseId: skullCrushers.id,
        },
        {
          id: 'cm5yhw1sw000508l7cipsavn1',
          workoutId: tricepsKiller.id,
          exerciseId: pushUps.id,
        },
      ],
    }),
  ]);

  await prisma.workoutExercise.update({
    where: { id: 'cm5sazwkm000008jl36x4gr7e' },
    data: {
      workoutExerciseSet: {
        createMany: {
          data: [
            {
              reps: 12,
              weight: 25,
            },
            {
              reps: 10,
              weight: 30,
            },
            {
              reps: 8,
              weight: 32,
            },
            {
              reps: 8,
              weight: 32,
            },
          ],
        },
      },
    },
  });

  await prisma.workoutExercise.update({
    where: { id: 'cm5sb12eo000008megywx63of' },
    data: {
      workoutExerciseSet: {
        createMany: {
          data: [
            {
              reps: 12,
              weight: 25,
            },
            {
              reps: 10,
              weight: 30,
            },
            {
              reps: 8,
              weight: 32,
            },
            {
              reps: 8,
              weight: 32,
            },
          ],
        },
      },
    },
  });

  await prisma.workoutExercise.update({
    where: { id: 'cm5sb158m000108medq3q6n1r' },
    data: {
      workoutExerciseSet: {
        createMany: {
          data: [
            {
              reps: 12,
              weight: 25,
            },
            {
              reps: 10,
              weight: 30,
            },
            {
              reps: 8,
              weight: 32,
            },
            {
              reps: 8,
              weight: 32,
            },
          ],
        },
      },
    },
  });

  await prisma.workoutExercise.update({
    where: { id: 'cm5sb1hto000208me4bkdh9nw' },
    data: {
      workoutExerciseSet: {
        createMany: {
          data: [
            {
              reps: 12,
              weight: 25,
            },
            {
              reps: 10,
              weight: 30,
            },
            {
              reps: 8,
              weight: 32,
            },
            {
              reps: 8,
              weight: 32,
            },
          ],
        },
      },
    },
  });

  await prisma.workoutExercise.update({
    where: { id: 'cm5sb2gda000408me5ipnb6fv' },
    data: {
      workoutExerciseSet: {
        createMany: {
          data: [
            {
              reps: 12,
              weight: 25,
            },
            {
              reps: 10,
              weight: 30,
            },
            {
              reps: 8,
              weight: 32,
            },
            {
              reps: 8,
              weight: 32,
            },
          ],
        },
      },
    },
  });

  await prisma.workoutExercise.update({
    where: { id: 'cm5sb2lm1000508me5jcx2zy5' },
    data: {
      workoutExerciseSet: {
        createMany: {
          data: [
            {
              reps: 12,
              weight: 25,
            },
            {
              reps: 10,
              weight: 30,
            },
            {
              reps: 8,
              weight: 32,
            },
            {
              reps: 8,
              weight: 32,
            },
          ],
        },
      },
    },
  });

  await prisma.workoutExercise.update({
    where: { id: 'cm5sb2rhz000608me1q2k8ky8' },
    data: {
      workoutExerciseSet: {
        createMany: {
          data: [
            {
              reps: 12,
              weight: 25,
            },
            {
              reps: 10,
              weight: 30,
            },
            {
              reps: 8,
              weight: 32,
            },
            {
              reps: 8,
              weight: 32,
            },
          ],
        },
      },
    },
  });

  await prisma.workoutExercise.update({
    where: { id: 'cm5sb2zcf000708me6f810cfq' },
    data: {
      workoutExerciseSet: {
        createMany: {
          data: [
            {
              reps: 12,
              weight: 25,
            },
            {
              reps: 10,
              weight: 30,
            },
            {
              reps: 8,
              weight: 32,
            },
            {
              reps: 8,
              weight: 32,
            },
          ],
        },
      },
    },
  });

  await prisma.workoutExercise.update({
    where: { id: 'cm5yhvtix000308l7hf5zafrz' },
    data: {
      workoutExerciseSet: {
        createMany: {
          data: [
            {
              reps: 12,
              weight: 25,
            },
            {
              reps: 10,
              weight: 30,
            },
            {
              reps: 8,
              weight: 32,
            },
            {
              reps: 8,
              weight: 32,
            },
          ],
        },
      },
    },
  });

  await prisma.workoutExercise.update({
    where: { id: 'cm5yhvya8000408l7ekjc0w40' },
    data: {
      workoutExerciseSet: {
        createMany: {
          data: [
            {
              reps: 12,
              weight: 25,
            },
            {
              reps: 10,
              weight: 30,
            },
            {
              reps: 8,
              weight: 32,
            },
            {
              reps: 8,
              weight: 32,
            },
          ],
        },
      },
    },
  });

  await prisma.workoutExercise.update({
    where: { id: 'cm5yhw1sw000508l7cipsavn1' },
    data: {
      workoutExerciseSet: {
        createMany: {
          data: [
            {
              reps: 12,
              weight: 25,
            },
            {
              reps: 10,
              weight: 30,
            },
            {
              reps: 8,
              weight: 32,
            },
            {
              reps: 8,
              weight: 32,
            },
          ],
        },
      },
    },
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
