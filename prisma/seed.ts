import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
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

  const muscles = [
    {
      id: 'clg5yhs4s00010vlz1rxy6xxk', // Gluteus Medius
      name: 'Gluteus Medius',
      img: 'https://example.com/gluteus-medius.jpg',
      information:
        'The Gluteus Medius is crucial for hip stability and movement, especially during walking and running.',
    },
    {
      id: 'clg5yht6v00020vlz1rxy6aa2', // Lower Abs
      name: 'Lower Abs',
      img: 'https://example.com/lower-abs.jpg',
      information:
        'The Lower Abs help in stabilizing the core and play a key role in posture and lower body strength.',
    },
    {
      id: 'clg5yhuqv00030vlz1rxy6zzb', // Peroneus Longus
      name: 'Peroneus Longus',
      img: 'https://example.com/peroneus-longus.jpg',
      information:
        'The Peroneus Longus supports foot movement and balance, helping prevent ankle sprains.',
    },
    {
      id: 'clg5yhv0v00040vlz1rxy6zzc', // Soleus
      name: 'Soleus',
      img: 'https://example.com/soleus.jpg',
      information:
        'The Soleus muscle is vital for standing and walking, playing a major role in plantar flexion of the foot.',
    },
    {
      id: 'clg5yhuv10040vlz1rxy6zzd', // Calves
      name: 'Calves',
      img: 'https://example.com/calves.jpg',
      information:
        'The Calves are essential for jumping, running, and overall lower body strength and mobility.',
    },
    {
      id: 'clg5yhwcv00050vlz1rxy6zzg', // Outer Quads
      name: 'Outer Quads',
      img: 'https://example.com/outer-quads.jpg',
      information:
        'The Outer Quads contribute to knee extension and overall leg power, essential for athletic movements.',
    },
    {
      id: 'clg5yhwvv00060vlz1rxy6zzh', // Inner Quads
      name: 'Inner Quads',
      img: 'https://example.com/inner-quads.jpg',
      information:
        'The Inner Quads provide knee stabilization and are important for balanced leg strength.',
    },
    {
      id: 'clg5yhwv10070vlz1rxy6zzj', // Mid Quad
      name: 'Mid Quad',
      img: 'https://example.com/mid-quad.jpg',
      information:
        'The Mid Quad assists in knee extension and supports proper movement patterns in the legs.',
    },
    {
      id: 'clg5yhwv10080vlz1rxy6zzk', // Sartorius
      name: 'Sartorius',
      img: 'https://example.com/sartorius.jpg',
      information:
        'The Sartorius is the longest muscle in the body and aids in hip and knee flexibility.',
    },
    {
      id: 'clg5yhwv10090vlz1rxy6zzl', // Extensor
      name: 'Extensor',
      img: 'https://example.com/extensor.jpg',
      information:
        'The Extensor muscles in the forearm help in wrist and finger movements, crucial for grip strength.',
    },
    {
      id: 'clg5yhwv10100vlz1rxy6zzm', // Flexor Digitorium
      name: 'Flexor Digitorium',
      img: 'https://example.com/flexor-digitorium.jpg',
      information:
        'The Flexor Digitorium controls finger flexion and is key for gripping and holding objects.',
    },
    {
      id: 'clg5yhwv10110vlz1rxy6zzn', // Upper Abs
      name: 'Upper Abs',
      img: 'https://example.com/upper-abs.jpg',
      information:
        'The Upper Abs help in spinal flexion and are an essential part of core stability and strength.',
    },
    {
      id: 'clg5yhwv10120vlz1rxy6zzo', // Serratus Anterior
      name: 'Serratus Anterior',
      img: 'https://example.com/serratus-anterior.jpg',
      information:
        'The Serratus Anterior aids in shoulder movement and is crucial for scapular stability.',
    },
    {
      id: 'clg5yhwv10130vlz1rxy6zzp', // Obliques External
      name: 'Obliques External',
      img: 'https://example.com/obliques-external.jpg',
      information:
        'The External Obliques assist in torso rotation and lateral movement, essential for core strength.',
    },
    {
      id: 'clg5yhwv10140vlz1rxy6zzq', // Biceps Brachialis
      name: 'Biceps Brachialis',
      img: 'https://example.com/biceps-brachialis.jpg',
      information:
        'The Biceps Brachialis works alongside the biceps to enhance elbow flexion and arm strength.',
    },
    {
      id: 'clg5yhwv10150vlz1rxy6zzr', // Sternocleids
      name: 'Sternocleids',
      img: 'https://example.com/sternocleids.jpg',
      information:
        'The Sternocleidomastoid muscles play a major role in head rotation and neck movement.',
    },
    {
      id: 'clg5yhwv10160vlz1rxy6zzs', // SCM
      name: 'SCM',
      img: 'https://example.com/scm.jpg',
      information:
        'The SCM muscles help in tilting and rotating the head, essential for neck mobility.',
    },
    {
      id: 'clg5yhwv10170vlz1rxy6zzt', // Front Traps
      name: 'Front Traps',
      img: 'https://example.com/front-traps.jpg',
      information:
        'The Front Traps help in shoulder movement and support upper back stability.',
    },
    {
      id: 'clg5yhwv10180vlz1rxy6zzu', // Triceps Long Head
      name: 'Triceps Long Head',
      img: 'https://example.com/triceps-long-head.jpg',
      information:
        'The Triceps Long Head plays a crucial role in arm extension and shoulder stability.',
    },
    {
      id: 'clg5yhwv10190vlz1rxy6zzv', // Biceps Brachii
      name: 'Biceps Brachii',
      img: 'https://example.com/biceps-brachii.jpg',
      information:
        'The Biceps Brachii are responsible for elbow flexion and contribute to upper arm strength.',
    },
    // {
    //   id: 'clg5yhwv10210vlz1rxy6zzx', // Pecs
    //   name: 'Pecs',
    //   img: 'https://example.com/pecs.jpg',
    //   information:
    //     'The Pecs are the primary muscles involved in pushing movements and chest strength.',
    // },
    {
      id: 'clg5yhwv10220vlz1rxy6zzy', // Triceps Lateral Head
      name: 'Triceps Lateral Head',
      img: 'https://example.com/triceps-lateral-head.jpg',
      information:
        'The Triceps Lateral Head helps in arm extension and contributes to overall upper arm mass.',
    },
  ];

  for (const muscle of muscles) {
    await prisma.muscle.upsert({
      where: { id: muscle.id },
      update: {},
      create: {
        id: muscle.id,
        name: muscle.name,
        muscleImg: muscle.img,
        information: muscle.information,
      },
    });
  }

  const backMuscles = [
    {
      id: 'clg5yhzr00400vlz1rxy6zzxx',
      name: 'Rhomboid Major',
      img: 'https://example.com/rhomboid-major.jpg',
      information:
        'The Rhomboid Major is a muscle located in the upper back that helps retract and stabilize the scapula.',
    },
    {
      id: 'clg5yhzr00410vlz1rxy6zzxy',
      name: 'Semimembranosis',
      img: 'https://example.com/semimembranosis.jpg',
      information:
        'The Semimembranosis is one of the three hamstring muscles, located at the back of the thigh.',
    },
    {
      id: 'clg5yhzr00420vlz1rxy6zzxz',
      name: 'Trapezius',
      img: 'https://example.com/trapezius.jpg',
      information:
        'The Trapezius is a large muscle that extends down the back of the neck and upper spine, responsible for moving and stabilizing the scapula.',
    },
    {
      id: 'clg5yhzr00430vlz1rxy6zzxw',
      name: 'Soleus',
      img: 'https://example.com/soleus.jpg',
      information:
        'The Soleus is a powerful muscle in the back part of the lower leg, crucial for standing and walking.',
    },
    {
      id: 'clg5yhzr00440vlz1rxy6zzxv',
      name: 'Calves',
      img: 'https://example.com/calves.jpg',
      information:
        'The Calves are essential for jumping, running, and overall lower body strength and mobility.',
    },
    {
      id: 'clg5yhzr00450vlz1rxy6zzxu',
      name: 'Deltoids',
      img: 'https://example.com/deltoids.jpg',
      information:
        'The Deltoids are the muscles forming the rounded contour of the shoulder, responsible for arm rotation and lifting.',
    },
    {
      id: 'clg5yhzr00460vlz1rxy6zzxt',
      name: 'Middle and Lower Trapezius',
      img: 'https://example.com/middle-lower-trapezius.jpg',
      information:
        'The Middle and Lower Trapezius muscles help in retracting and depressing the scapula.',
    },
    {
      id: 'clg5yhzr00470vlz1rxy6zzxs',
      name: 'Infraspinatus',
      img: 'https://example.com/infraspinatus.jpg',
      information:
        'The Infraspinatus is a thick triangular muscle that occupies the majority of the infraspinous fossa of the scapula.',
    },
    {
      id: 'clg5yhzr00480vlz1rxy6zzxr',
      name: 'Teres Major',
      img: 'https://example.com/teres-major.jpg',
      information:
        'The Teres Major is a muscle of the upper limb and one of the seven scapulohumeral muscles.',
    },
    {
      id: 'clg5yhzr00490vlz1rxy6zzxq',
      name: 'Latissimus Dorsi',
      img: 'https://example.com/latissimus-dorsi.jpg',
      information:
        'The Latissimus Dorsi is the largest muscle in the upper body, responsible for extension, adduction, and medial rotation of the shoulder joint.',
    },
    {
      id: 'clg5yhzr00500vlz1rxy6zzxp',
      name: 'Triceps',
      img: 'https://example.com/triceps.jpg',
      information:
        'The Triceps are located on the back of the upper arm and are responsible for extending the elbow.',
    },
    {
      id: 'clg5yhzr00510vlz1rxy6zzxo',
      name: 'Obliques',
      img: 'https://example.com/obliques.jpg',
      information:
        'The Obliques are located on the sides of the abdomen and are responsible for lateral flexion and rotation of the trunk.',
    },
    {
      id: 'clg5yhzr00520vlz1rxy6zzxn',
      name: 'Upper Obliques',
      img: 'https://example.com/upper-obliques.jpg',
      information:
        'The Upper Obliques assist in torso rotation and lateral movement, essential for core strength.',
    },
    {
      id: 'clg5yhzr00530vlz1rxy6zzxm',
      name: 'Extensor Carpi',
      img: 'https://example.com/extensor-carpi.jpg',
      information:
        'The Extensor Carpi muscles are located in the forearm and are responsible for wrist extension.',
    },
    {
      id: 'clg5yhzr00540vlz1rxy6zzxl',
      name: 'Extensor Digitorum',
      img: 'https://example.com/extensor-digitorum.jpg',
      information:
        'The Extensor Digitorum is a muscle of the posterior forearm responsible for extending the fingers.',
    },
    {
      id: 'clg5yhzr00550vlz1rxy6zzxk',
      name: 'Extensor Carpi Ulnaris',
      img: 'https://example.com/extensor-carpi-ulnaris.jpg',
      information:
        'The Extensor Carpi Ulnaris is a muscle in the forearm that extends and adducts the wrist.',
    },
    {
      id: 'clg5yhzr00560vlz1rxy6zzxj',
      name: 'Gluteus Maximus',
      img: 'https://example.com/gluteus-maximus.jpg',
      information:
        'The Gluteus Maximus is the largest and most superficial of the three gluteal muscles, responsible for the movement of the hip and thigh.',
    },
    {
      id: 'clg5yhzr00570vlz1rxy6zzxi',
      name: 'Gluteus Medius',
      img: 'https://example.com/gluteus-medius.jpg',
      information:
        'The Gluteus Medius is a broad, thick, radiating muscle, situated on the outer surface of the pelvis.',
    },
    {
      id: 'clg5yhzr00580vlz1rxy6zzxh',
      name: 'Semi Tendinosis',
      img: 'https://example.com/semi-tendinosis.jpg',
      information:
        'The Semi Tendinosis is one of the three hamstring muscles, located at the back of the thigh.',
    },
    {
      id: 'clg5yhzr00590vlz1rxy6zzxg',
      name: 'Upper Inner Hamstring',
      img: 'https://example.com/upper-inner-hamstring.jpg',
      information:
        'The Upper Inner Hamstring is part of the hamstring group, located at the back of the thigh.',
    },
    {
      id: 'clg5yhzr00600vlz1rxy6zzxf',
      name: 'Biceps Femoris',
      img: 'https://example.com/biceps-femoris.jpg',
      information:
        'The Biceps Femoris is one of the three hamstring muscles, located at the back of the thigh.',
    },
    {
      id: 'clg5yhzr00610vlz1rxy6zzxe',
      name: 'Extensor Carpi Ulnarus',
      img: 'https://example.com/extensor-carpi-ulnarus.jpg',
      information:
        'The Extensor Carpi Ulnarus is a muscle in the forearm that extends and adducts the wrist.',
    },
    {
      id: 'clg5yhzr00620vlz1rxy6zzxd',
      name: 'Thoracolumbar',
      img: 'https://example.com/thoracolumbar.jpg',
      information:
        'The Thoracolumbar fascia is a large, diamond-shaped area of connective tissue that covers the lower back.',
    },
    {
      id: 'clg5yhzr00630vlz1rxy6zzxc',
      name: 'Iliotibial Tract',
      img: 'https://example.com/iliotibial-tract.jpg',
      information:
        'The Iliotibial Tract is a thick band of fascia that runs along the lateral thigh, providing stability to the knee and hip.',
    },
  ];

  for (const muscle of backMuscles) {
    await prisma.muscle.upsert({
      where: { id: muscle.id },
      update: {},
      create: {
        id: muscle.id,
        name: muscle.name,
        muscleImg: muscle.img,
        information: muscle.information,
      },
    });
  }

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
          muscleId: 'cm5s9wnub000208jy66im1qp9',
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
          muscleId: 'cm5s9wnub000208jy66im1qp9',
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
          muscleId: 'cm5s9wnub000208jy66im1qp9',
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
      where: { exerciseId: declineBenchPress.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: declineBenchPress.id,
          muscleId: 'cm5s9wnub000208jy66im1qp9',
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

  const gluteBridge = await prisma.exercise.upsert({
    where: { id: 'clg5yhs4s00011vlz1rxy6xxk' },
    update: {},
    create: {
      id: 'clg5yhs4s00011vlz1rxy6xxk',
      name: 'Glute Bridge',
      image:
        'https://hips.hearstapps.com/hmg-prod/images/glutebridge-1603107150.jpg?resize=980:*',
      difficulty: 'Beginner',
      demonstrationGif:
        'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/08/glutebridgedynamic-1472218237.gif',
      description:
        'The glute bridge is a great exercise for targeting the glutes and lower back muscles. By lifting the hips while lying on your back, you engage the gluteus medius and help improve hip stability.',
      type: 'Strength',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: gluteBridge.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: gluteBridge.id,
          muscleId: 'clg5yhs4s00010vlz1rxy6xxk', // Gluteus Medius ID
        },
      ],
    }),
  ]);

  const legRaises = await prisma.exercise.upsert({
    where: { id: 'clg5yht6v00020vlz1rxy6zz9' },
    update: {},
    create: {
      id: 'clg5yht6v00020vlz1rxy6zz9',
      name: 'Leg Raises',
      image:
        'https://liftmanual.com/wp-content/uploads/2023/04/lying-leg-raise.jpg',
      difficulty: 'Intermediate',
      demonstrationGif:
        'https://cdn.jefit.com/assets/img/exercises/gifs/44.gif',
      description:
        'Leg raises focus on the lower abs by lifting your legs off the ground while lying on your back, targeting the lower abdominal region for improved core strength.',
      type: 'Strength',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: legRaises.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: legRaises.id,
          muscleId: 'clg5yht6v00020vlz1rxy6aa2', // Lower Abs ID
        },
      ],
    }),
  ]);

  const ankleEversion = await prisma.exercise.upsert({
    where: { id: 'clg5yhuqv00031vlz1rxy6zzb' },
    update: {},
    create: {
      id: 'clg5yhuqv00031vlz1rxy6zzb',
      name: 'Ankle Eversion',
      image:
        'https://content.ca.healthwise.net/resources/14.1/en-ca/media/medical/hw/aco6581_460x300.jpg',
      difficulty: 'Intermediate',
      demonstrationGif:
        'https://www.physio-pedia.com/images/archive/3/38/20200327165524%21Resisted_eversion.gif',
      description:
        'Ankle eversion is an exercise that targets the peroneus longus by using resistance bands to turn the foot outward. This exercise helps to strengthen the muscles of the outer ankle and improve balance.',
      type: 'Strength',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: ankleEversion.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: ankleEversion.id,
          muscleId: 'clg5yhuqv00030vlz1rxy6zzb', // Peroneus Longus ID
        },
      ],
    }),
  ]);

  const standingCalfRaises = await prisma.exercise.upsert({
    where: { id: 'clg5yhuv10040vqz1rxy6zzd' },
    update: {},
    create: {
      id: 'clg5yhuv10040vqz1rxy6zzd',
      name: 'Standing Calf Raises',
      image:
        'https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-standing-calf-raise.jpg',
      difficulty: 'Beginner',
      demonstrationGif:
        'https://i.pinimg.com/originals/2f/7c/ca/2f7cca8d37c65384c1d0bd84cc0a91d1.gif',
      description:
        'Standing calf raises are a basic but effective exercise for targeting the calves. By standing and rising up onto your toes, you engage the soleus and gastrocnemius for stronger calves.',
      type: 'Strength',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: standingCalfRaises.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: standingCalfRaises.id,
          muscleId: 'clg5yhuv10040vlz1rxy6zzd', // Calves ID
        },
      ],
    }),
  ]);

  const legExtensions = await prisma.exercise.upsert({
    where: { id: 'clg5yhwcv00050vrz1rxy6zzg' },
    update: {},
    create: {
      id: 'clg5yhwcv00050vrz1rxy6zzg',
      name: 'Leg Extensions',
      image:
        'https://weighttraining.guide/wp-content/uploads/2016/05/lever-leg-extension-resized.png',
      difficulty: 'Intermediate',
      demonstrationGif:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStbzFwXTe4TGyn9mIGhtFfHwKOcdBqOZAtc6GdEgxmNEaG-lKsfy_rUkQ5_Sd4kzyhcbg&usqp=CAU',
      description:
        'Leg extensions target the outer quads by extending the legs at the knee while seated. This isolation exercise helps build leg strength and muscle definition.',
      type: 'Strength',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: legExtensions.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: legExtensions.id,
          muscleId: 'clg5yhwcv00050vlz1rxy6zzg', // Outer Quads ID
        },
      ],
    }),
  ]);

  const crunches = await prisma.exercise.upsert({
    where: { id: 'clg5yhycv00060vlz1rxy6zzh' },
    update: {},
    create: {
      id: 'clg5yhycv00060vlz1rxy6zzh',
      name: 'Crunches',
      image:
        'https://static.strengthlevel.com/images/exercises/crunches/crunches-800.jpg',
      difficulty: 'Beginner',
      demonstrationGif:
        'https://gifdb.com/images/high/tuck-crunches-jase-stuart-exercise-f6w2evz2yx0144my.gif',
      description:
        'Crunches are a classic exercise for strengthening the upper abdominal muscles. By contracting the upper abs, you improve core stability and strength.',
      type: 'Strength',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: crunches.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: crunches.id,
          muscleId: 'clg5yhwv10110vlz1rxy6zzn', // Upper Abs ID
        },
      ],
    }),
  ]);

  const squats = await prisma.exercise.upsert({
    where: { id: 'clg5yhzu00080vlz1rxy6zzm' },
    update: {},
    create: {
      id: 'clg5yhzu00080vlz1rxy6zzm',
      name: 'Squats',
      image:
        'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/barbell-squat-resized-FIXED-2.png?ezimgfmt=ng%3Awebp%2Fngcb4',
      difficulty: 'Intermediate',
      demonstrationGif:
        'https://fitnessprogramer.com/wp-content/uploads/2021/02/BARBELL-SQUAT.gif',
      description:
        'Squats are one of the most effective lower body exercises, targeting the quadriceps, hamstrings, and glutes, as well as engaging the core.',
      type: 'Strength',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: squats.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: squats.id,
          muscleId: 'clg5yhwcv00050vlz1rxy6zzg', // Outer Quads ID
        },
        {
          exerciseId: squats.id,
          muscleId: 'clg5yhs4s00010vlz1rxy6xxk', // Gluteus Medius ID
        },
        {
          exerciseId: squats.id,
          muscleId: 'clg5yhuv10040vlz1rxy6zzd', // Calves ID
        },
      ],
    }),
  ]);

  const lunges = await prisma.exercise.upsert({
    where: { id: 'clg5yhzr00090vlz1rxy6zzn' },
    update: {},
    create: {
      id: 'clg5yhzr00090vlz1rxy6zzn',
      name: 'Lunges',
      image:
        'https://hips.hearstapps.com/hmg-prod/images/walking-lunge-6401e3ab937d2.jpg',
      difficulty: 'Intermediate',
      demonstrationGif:
        'https://fitnessprogramer.com/wp-content/uploads/2023/09/dumbbell-lunges.gif',
      description:
        'Lunges are a lower body exercise that targets the quads, hamstrings, and glutes, while also improving balance and stability.',
      type: 'Strength',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: lunges.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: lunges.id,
          muscleId: 'clg5yhwcv00050vlz1rxy6zzg', // Outer Quads ID
        },
        {
          exerciseId: lunges.id,
          muscleId: 'clg5yhs4s00010vlz1rxy6xxk', // Gluteus Medius ID
        },
        {
          exerciseId: lunges.id,
          muscleId: 'clg5yhuv10040vlz1rxy6zzd', // Calves ID
        },
      ],
    }),
  ]);

  const tricepsDips = await prisma.exercise.upsert({
    where: { id: 'clg5yhzu00050vlz1rxy6zzq' },
    update: {},
    create: {
      id: 'clg5yhzu00050vlz1rxy6zzq',
      name: 'Triceps Dips',
      image:
        'https://miro.medium.com/v2/resize:fit:1024/0*4rDjqbQjUV9ZOebj.jpg',
      difficulty: 'Intermediate',
      demonstrationGif:
        'https://miro.medium.com/v2/resize:fit:720/0*sgzAqPZZtES4o21t.gif',
      description:
        'Triceps dips target the triceps brachii and help to build upper arm strength and mass.',
      type: 'Strength',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: tricepsDips.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: tricepsDips.id,
          muscleId: 'clg5yhwv10180vlz1rxy6zzu', // Triceps Long Head ID
        },
        {
          exerciseId: tricepsDips.id,
          muscleId: 'clg5yhwv10220vlz1rxy6zzy', // Triceps Lateral Head ID
        },
      ],
    }),
  ]);

  const deadlifts = await prisma.exercise.upsert({
    where: { id: 'clg5yhzr00180vlz1rxy6zzr' },
    update: {},
    create: {
      id: 'clg5yhzr00180vlz1rxy6zzr',
      name: 'Deadlifts',
      image:
        'https://cdn.shopify.com/s/files/1/1283/2557/files/What_Muscles_Do_Deadlifts_Work_1024x1024.png?v=1673143941',
      difficulty: 'Advanced',
      demonstrationGif:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuawv_U1HLt_Xt3h8J_8C0YKggqHJ4CKq1nXbUKC0ABJsy6dz_a_nJLrC4UK6eGbnLD5w&usqp=CAU',
      description:
        'Deadlifts are a compound movement that works multiple muscles in the back, legs, and core, with a focus on posterior chain strength.',
      type: 'Strength',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: deadlifts.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: deadlifts.id,
          muscleId: 'clg5yhs4s00010vlz1rxy6xxk', // Gluteus Medius ID
        },
        {
          exerciseId: deadlifts.id,
          muscleId: 'clg5yhwcv00050vlz1rxy6zzg', // Outer Quads ID
        },
        {
          exerciseId: deadlifts.id,
          muscleId: 'clg5yhuv10040vlz1rxy6zzd', // Calves ID
        },
        {
          exerciseId: deadlifts.id,
          muscleId: 'clg5yht6v00020vlz1rxy6aa2', // Lower Abs ID
        },
      ],
    }),
  ]);

  const benchPress = await prisma.exercise.upsert({
    where: { id: 'clg5yhzr00230vlz1rxy6zzs' },
    update: {},
    create: {
      id: 'clg5yhzr00230vlz1rxy6zzs',
      name: 'Bench Press',
      image:
        'https://training.fit/wp-content/uploads/2020/02/bankdruecken-langhantel-flach-enger-griff.png',
      difficulty: 'Intermediate',
      demonstrationGif:
        'https://www.inspireusafoundation.org/wp-content/uploads/2022/04/barbell-bench-press.gif',
      description:
        'The bench press is a popular exercise for building chest strength. It primarily targets the pectorals while also engaging the triceps and shoulders.',
      type: 'Strength',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: benchPress.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: benchPress.id,
          muscleId: 'cm5s9wnub000208jy66im1qp9', // Pecs ID
        },
        {
          exerciseId: benchPress.id,
          muscleId: 'cm5s9xn7b000208jyfv7neimh', // Triceps ID
        },
        {
          exerciseId: benchPress.id,
          muscleId: 'cm5s9xgdb000108jycla5fo1j', // Deltoids Front ID
        },
      ],
    }),
  ]);

  const latPulldowns = await prisma.exercise.upsert({
    where: { id: 'clg5yhzr00270vlz1rxy6zzt' },
    update: {},
    create: {
      id: 'clg5yhzr00270vlz1rxy6zzt',
      name: 'Lat Pulldowns',
      image:
        'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/wide-grip-lat-pull-down-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4',
      difficulty: 'Intermediate',
      demonstrationGif:
        'https://media.tenor.com/PVR9ra9tAwcAAAAM/pulley-pegada-aberta.gif',
      description:
        'Lat Pulldowns target the back muscles, specifically the latissimus dorsi, helping to improve upper back strength and posture.',
      type: 'Strength',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: latPulldowns.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: latPulldowns.id,
          muscleId: 'clg5yhwv10120vlz1rxy6zzo', // Serratus Anterior ID
        },
        {
          exerciseId: latPulldowns.id,
          muscleId: 'cm5s9wxe3000308jyhn7r0ez7', // Biceps Brachii ID
        },
        {
          exerciseId: latPulldowns.id,
          muscleId: 'clg5yhzr00420vlz1rxy6zzxz', // Trapezius ID
        },
      ],
    }),
  ]);

  const lungesWithDumbbells = await prisma.exercise.upsert({
    where: { id: 'clg5yhzr00310vlz1rxy6zzu' },
    update: {},
    create: {
      id: 'clg5yhzr00310vlz1rxy6zzu',
      name: 'Lunges with Dumbbells',
      image:
        'https://weighttraining.guide/wp-content/uploads/2016/10/Dumbbell-Lunge-resized-fixed.png',
      difficulty: 'Intermediate',
      demonstrationGif: 'https://media.tenor.com/sZ7VwZ6jrbcAAAAM/gym.gif',
      description:
        'Lunges with dumbbells provide added resistance to the lunge movement, further engaging the quads, hamstrings, and glutes.',
      type: 'Strength',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: lungesWithDumbbells.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: lungesWithDumbbells.id,
          muscleId: 'clg5yhs4s00010vlz1rxy6xxk', // Gluteus Medius ID
        },
        {
          exerciseId: lungesWithDumbbells.id,
          muscleId: 'clg5yhwcv00050vlz1rxy6zzg', // Outer Quads ID
        },
        {
          exerciseId: lungesWithDumbbells.id,
          muscleId: 'clg5yhuv10040vlz1rxy6zzd', // Calves ID
        },
      ],
    }),
  ]);

  const pullups = await prisma.exercise.upsert({
    where: { id: 'clg5yhzr00350vlz1rxy6zzv' },
    update: {},
    create: {
      id: 'clg5yhzr00350vlz1rxy6zzv',
      name: 'Pull Ups',
      image:
        'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/pull-up-2-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4',
      difficulty: 'Advanced',
      demonstrationGif:
        'https://media.tenor.com/bOA5VPeUz5QAAAAM/noequipmentexercisesmen-pullups.gif',
      description:
        'Pull ups are a challenging bodyweight exercise that primarily target the back, particularly the latissimus dorsi, while also engaging the biceps and shoulders.',
      type: 'Strength',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: pullups.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: pullups.id,
          muscleId: 'clg5yhwv10120vlz1rxy6zzo', // Serratus Anterior ID
        },
        {
          exerciseId: pullups.id,
          muscleId: 'clg5yhzr00490vlz1rxy6zzxq', // Latissimus Dorsi ID
        },
        {
          exerciseId: pullups.id,
          muscleId: 'cm5s9wxe3000308jyhn7r0ez7', // Biceps Brachii ID
        },
      ],
    }),
  ]);

  const legPress = await prisma.exercise.upsert({
    where: { id: 'clg5yhzr00560vlz1rxy6zzx' },
    update: {},
    create: {
      id: 'clg5yhzr00560vlz1rxy6zzx',
      name: 'Leg Press',
      image:
        'https://weighttraining.guide/wp-content/uploads/2016/05/Sled-45-degree-Leg-Press-resized.png',
      difficulty: 'Intermediate',
      demonstrationGif: 'https://media.tenor.com/yBaS_oBgidsAAAAM/gym.gif',
      description:
        'The leg press is a machine-based exercise that targets the quads, hamstrings, and glutes for leg strength and development.',
      type: 'Strength',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: legPress.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: legPress.id,
          muscleId: 'clg5yhwcv00050vlz1rxy6zzg', // Quads ID
        },
        {
          exerciseId: legPress.id,
          muscleId: 'clg5yhzr00560vlz1rxy6zzxj', // Gluteus Maximus ID
        },
        {
          exerciseId: legPress.id,
          muscleId: 'clg5yhzr00590vlz1rxy6zzxg', // Hamstrings ID
        },
        {
          exerciseId: legPress.id,
          muscleId: 'clg5yhzr00410vlz1rxy6zzxy',
        },
        {
          exerciseId: legPress.id,
          muscleId: 'clg5yhzr00580vlz1rxy6zzxh',
        },
      ],
    }),
  ]);

  const shoulderPress = await prisma.exercise.upsert({
    where: { id: 'clg5yhzr00600vlz1rxy6zzu' },
    update: {},
    create: {
      id: 'clg5yhzr00600vlz1rxy6zzu',
      name: 'Shoulder Press',
      image:
        'https://weighttraining.guide/wp-content/uploads/2016/05/Dumbbell-Shoulder-Press-resized.png',
      difficulty: 'Intermediate',
      demonstrationGif: 'https://gymvisual.com/img/p/5/1/4/6/5146.gif',
      description:
        'The shoulder press targets the deltoids, building shoulder strength and improving upper body mobility.',
      type: 'Strength',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: shoulderPress.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: shoulderPress.id,
          muscleId: 'cm5s9xgdb000108jycla5fo1j', // Deltoids ID
        },
        {
          exerciseId: shoulderPress.id,
          muscleId: 'cm5s9xn7b000208jyfv7neimh', // Triceps ID
        },
      ],
    }),
  ]);

  const barbellRows = await prisma.exercise.upsert({
    where: { id: 'clg5yhzr00660vlz1rxy6zzz' },
    update: {},
    create: {
      id: 'clg5yhzr00660vlz1rxy6zzz',
      name: 'Barbell Rows',
      image:
        'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/10/Bent-over-barbell-row.png?ezimgfmt=ng%3Awebp%2Fngcb4',
      difficulty: 'Intermediate',
      demonstrationGif:
        'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bent-Over-Row.gif',
      description:
        'Barbell Rows are an excellent exercise for targeting the back muscles, particularly the lats, rhomboids, and traps.',
      type: 'Strength',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: barbellRows.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: barbellRows.id,
          muscleId: 'clg5yhzr00490vlz1rxy6zzxq', // Latissimus Dorsi ID
        },
        {
          exerciseId: barbellRows.id,
          muscleId: 'clg5yhzr00400vlz1rxy6zzxx', // Rhomboid Major ID
        },
        {
          exerciseId: barbellRows.id,
          muscleId: 'clg5yhzr00420vlz1rxy6zzxz', // Trapezius ID
        },
      ],
    }),
  ]);

  const cableTricepsPushdown = await prisma.exercise.upsert({
    where: { id: 'clg5yhzr00770vlz1rxy6zzz' },
    update: {},
    create: {
      id: 'clg5yhzr00770vlz1rxy6zzz',
      name: 'Cable Triceps Pushdown',
      image:
        'https://www.dmoose.com/cdn/shop/articles/cable_Press_down.jpg?v=1693225553',
      difficulty: 'Beginner',
      demonstrationGif:
        'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pushdown.gif',
      description:
        'The Cable Triceps Pushdown is an isolation exercise that focuses on strengthening the triceps and is commonly performed using a cable machine.',
      type: 'Strength',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: cableTricepsPushdown.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: cableTricepsPushdown.id,
          muscleId: 'cm5s9xn7b000208jyfv7neimh', // Triceps ID
        },
      ],
    }),
  ]);

  const kettlebellSwings = await prisma.exercise.upsert({
    where: { id: 'clg5yhzr00790vlz1rxy6zzu' },
    update: {},
    create: {
      id: 'clg5yhzr00790vlz1rxy6zzu',
      name: 'Kettlebell Swings',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC8r_x6RwMTlUPBkCvYW2aQTehu9ZDvIY-8w&s',
      difficulty: 'Intermediate',
      demonstrationGif:
        'https://fitnessprogramer.com/wp-content/uploads/2021/09/Kettlebell-Swings.gif',
      description:
        'Kettlebell Swings are a dynamic full-body exercise that primarily works the hips, glutes, hamstrings, and core.',
      type: 'Strength',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: kettlebellSwings.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: kettlebellSwings.id,
          muscleId: 'clg5yhs4s00010vlz1rxy6xxk', // Glutes ID
        },
        {
          exerciseId: kettlebellSwings.id,
          muscleId: 'clg5yhzr00590vlz1rxy6zzxg', // Hamstrings ID
        },
        {
          exerciseId: kettlebellSwings.id,
          muscleId: 'clg5yhzr00410vlz1rxy6zzxy',
        },
        {
          exerciseId: kettlebellSwings.id,
          muscleId: 'clg5yhzr00580vlz1rxy6zzxh',
        },
        {
          exerciseId: kettlebellSwings.id,
          muscleId: 'clg5yht6v00020vlz1rxy6aa2', // Core ID
        },
      ],
    }),
  ]);

  const hipThrusts = await prisma.exercise.upsert({
    where: { id: 'clg5yhzr00910vlz1rxy6zzu' },
    update: {},
    create: {
      id: 'clg5yhzr00910vlz1rxy6zzu',
      name: 'Hip Thrusts',
      image:
        'https://cdn-0.weighttraining.guide/wp-content/uploads/2017/04/barbell-hip-thrust-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4',
      difficulty: 'Intermediate',
      demonstrationGif:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYdlJd9_KvB6ztWjwq7a7ZDPljvdLrv-B6UQ&s',
      description:
        'Hip thrusts are a powerful exercise for glute activation, strengthening the glutes and hamstrings, and improving hip extension.',
      type: 'Strength',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: hipThrusts.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: hipThrusts.id,
          muscleId: 'clg5yhzr00560vlz1rxy6zzxj', // Glutes ID
        },
        {
          exerciseId: hipThrusts.id,
          muscleId: 'clg5yhzr00590vlz1rxy6zzxg', // Hamstrings ID
        },
        {
          exerciseId: hipThrusts.id,
          muscleId: 'clg5yhzr00410vlz1rxy6zzxy',
        },
        {
          exerciseId: hipThrusts.id,
          muscleId: 'clg5yhzr00580vlz1rxy6zzxh',
        },
      ],
    }),
  ]);

  const chestFly = await prisma.exercise.upsert({
    where: { id: 'clg5yhzr00960vlz1rxy6zzv' },
    update: {},
    create: {
      id: 'clg5yhzr00960vlz1rxy6zzv',
      name: 'Chest Fly',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVYv-61faCadlrSpwvoIOoZpTRE98dZX37lw&s',
      difficulty: 'Intermediate',
      demonstrationGif:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGSxW_YZcaoc1AcNf9yPRGGTP_VrC1Cbo5cA&s',
      description:
        'The Chest Fly is a movement that isolates the chest muscles, particularly the pectorals, helping to build chest strength.',
      type: 'Strength',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: chestFly.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: chestFly.id,
          muscleId: 'cm5s9wnub000208jy66im1qp9', // Pectorals ID
        },
      ],
    }),
  ]);

  const RussianTwists = await prisma.exercise.upsert({
    where: { id: 'clg5yhzr00980vlz1rxy6zzy' },
    update: {},
    create: {
      id: 'clg5yhzr00980vlz1rxy6zzy',
      name: 'Russian Twists',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95Y5IU1dsY18UkhOYDdmjVoOtaG__CZVO_A&s',
      difficulty: 'Intermediate',
      demonstrationGif:
        'https://fitnessprogramer.com/wp-content/uploads/2021/02/Russian-Twist.gif',
      description:
        'Russian Twists are a core exercise that targets the obliques, promoting rotational strength and stability in the torso.',
      type: 'Core',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: RussianTwists.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: RussianTwists.id,
          muscleId: 'clg5yhwv10130vlz1rxy6zzp', // Obliques ID
        },
      ],
    }),
  ]);

  const plank = await prisma.exercise.upsert({
    where: { id: 'clg5yhzr01000vlz1rxy6zzz' },
    update: {},
    create: {
      id: 'clg5yhzr01000vlz1rxy6zzz',
      name: 'Plank',
      image:
        'https://fitnessprogramer.com/wp-content/uploads/2021/02/plank.gif',
      difficulty: 'Beginner',
      demonstrationGif:
        'https://miro.medium.com/v2/resize:fit:1400/1*vhswuGdxvaw-jFxia_CSog.gif',
      description:
        'The Plank is a simple yet effective exercise for building core strength, targeting the abs, obliques, and lower back.',
      type: 'Core',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: plank.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: plank.id,
          muscleId: 'clg5yhwv10110vlz1rxy6zzn', // Core ID
        },
      ],
    }),
  ]);

  const dumbbellChestPress = await prisma.exercise.upsert({
    where: { id: 'clg5yhzr01020vlz1rxy6zzy' },
    update: {},
    create: {
      id: 'clg5yhzr01020vlz1rxy6zzy',
      name: 'Dumbbell Chest Press',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9NE6Mxzn3uQmItvInTKbd0R7ZzB4hntJerg&s',
      difficulty: 'Intermediate',
      demonstrationGif:
        'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Press.gif',
      description:
        'The Dumbbell Chest Press is a great compound movement for building upper body strength, particularly targeting the chest.',
      type: 'Strength',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: dumbbellChestPress.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: dumbbellChestPress.id,
          muscleId: 'cm5s9wnub000208jy66im1qp9', // Pectorals ID
        },
      ],
    }),
  ]);

  const cableRows = await prisma.exercise.upsert({
    where: { id: 'clg5yhzr01040vlz1rxy6zzw' },
    update: {},
    create: {
      id: 'clg5yhzr01040vlz1rxy6zzw',
      name: 'Cable Rows',
      image:
        'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/Seated-cable-row-new-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4',
      difficulty: 'Intermediate',
      demonstrationGif:
        'https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Cable-Row.gif',
      description:
        'Cable Rows are an excellent exercise for targeting the back muscles, particularly the latissimus dorsi and rhomboids.',
      type: 'Strength',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: cableRows.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: cableRows.id,
          muscleId: 'clg5yhzr00490vlz1rxy6zzxq', // Latissimus Dorsi ID
        },
        {
          exerciseId: cableRows.id,
          muscleId: 'clg5yhzr00400vlz1rxy6zzxx', // Rhomboid Major ID
        },
        {
          exerciseId: cableRows.id,
          muscleId: 'clg5yhzr00420vlz1rxy6zzxz', // Trapezius ID
        },
      ],
    }),
  ]);

  const sideLunges = await prisma.exercise.upsert({
    where: { id: 'clg5yhzr01070vlz1rxy6zzx' },
    update: {},
    create: {
      id: 'clg5yhzr01070vlz1rxy6zzx',
      name: 'Side Lunges',
      image: 'https://liftmanual.com/wp-content/uploads/2023/04/side-lunge.jpg',
      difficulty: 'Intermediate',
      demonstrationGif:
        'https://fitnessprogramer.com/wp-content/uploads/2021/05/Side-Lunge-Stretch.gif',
      description:
        'Side lunges are an excellent exercise for targeting the quads, glutes, and hip abductors while also improving mobility.',
      type: 'Strength',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: sideLunges.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: sideLunges.id,
          muscleId: 'clg5yhzr00560vlz1rxy6zzxj', // Glutes ID
        },
        {
          exerciseId: sideLunges.id,
          muscleId: 'clg5yhwv10070vlz1rxy6zzj', // Quadriceps ID
        },
        {
          exerciseId: sideLunges.id,
          muscleId: 'clg5yhwcv00050vlz1rxy6zzg', // Quadriceps ID
        },
        {
          exerciseId: sideLunges.id,
          muscleId: 'clg5yhwvv00060vlz1rxy6zzh', // Quadriceps ID
        },
      ],
    }),
  ]);

  const superman = await prisma.exercise.upsert({
    where: { id: 'clg5yhzr01100vlz1rxy6zzv' },
    update: {},
    create: {
      id: 'clg5yhzr01100vlz1rxy6zzv',
      name: 'Superman',
      image:
        'https://cdn-0.weighttraining.guide/wp-content/uploads/2016/11/superman-exercise-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4',
      difficulty: 'Intermediate',
      demonstrationGif:
        'https://fitnessprogramer.com/wp-content/uploads/2021/02/Superman-exercise.gif',
      description:
        'The Superman exercise targets the lower back, glutes, and shoulders, promoting a strong posterior chain.',
      type: 'Core',
    },
  });

  await prisma.$transaction([
    prisma.exerciseMuscle.deleteMany({
      where: { exerciseId: superman.id },
    }),
    prisma.exerciseMuscle.createMany({
      data: [
        {
          exerciseId: superman.id,
          muscleId: 'clg5yhzr00620vlz1rxy6zzxd', // Lower Back ID
        },
        {
          exerciseId: superman.id,
          muscleId: 'clg5yhzr00560vlz1rxy6zzxj', // Glutes ID
        },
      ],
    }),
  ]);
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
