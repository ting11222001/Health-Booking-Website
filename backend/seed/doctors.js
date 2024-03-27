import bcrypt from "bcryptjs"

// hash doctor's password
const salt = await bcrypt.genSalt(10)
const hashPassword = await bcrypt.hash("1234", salt)

export const doctors = [
  {
    _id: "660247adb56a95c2c97fa68b",
    email: "anna@gmail.com",
    password: hashPassword,
    name: "Anna Howard",
    phone: 412345678,
    photo: "https://res.cloudinary.com/dcr3ib98u/image/upload/v1711083554/doctor-temp_hjumuw.jpg",
    ticketPrice: 10,
    role: "doctor",
    gender: "female",
    specialization: "Depression",
    qualifications: [
      {
        startingDate: "2000-03-04",
        endingDate: "2008-04-05",
        degree: "PhD in Psychology",
        university: "Adelaide University"
      }
    ],
    experiences: [
      {
        startingDate: "2002-02-27",
        endingDate: "2009-03-15",
        position: "Junior Psychiatrists",
        hospital: "Royal Adelaide Hospital"
      },
      {
        startingDate: "2009-03-17",
        endingDate: "2020-03-29",
        position: "Senior Psychiatrists",
        hospital: "Royal Adelaide Hospital"
      }
    ],
    bio: "Empathic Listener, Healing Minds",
    about: "My journey in psychiatry began with a passion for understanding the complexities of the human mind and helping others navigate through life's challenges. Throughout my career, I've had the privilege of working with diverse populations, from children and adolescents to adults and seniors, addressing issues such as anxiety, depression, trauma, ADHD, bipolar disorder, and beyond.",
    timeSlots: [
      {
        startingTime: "14:32",
        endingTime: "15:32",
        day: "tuesday"
      }
    ],
    reviews: [
      "67035797b5fda9ee74326519",
      "67044187b5fda9ee74326519"
    ],
    averageRating: 5,
    totalRating: 2,
    isApproved: "approved",
    appointments: [],
    blogs: [
      "6602483a0d2a3caa5dabb802",
      "6602486dd9dd3754be293fc3",
      "660249e90d2a3caa5dabb80f",
    ],
  },
  {
    _id: "660247adb56a95c2c97fa68c",
    email: "john@gmail.com",
    password: hashPassword,
    name: "John Oxford",
    phone: 412345678,
    photo: "https://res.cloudinary.com/dcr3ib98u/image/upload/v1711084195/doctor-img02_tx4itv.jpg",
    ticketPrice: 50,
    role: "doctor",
    gender: "male",
    specialization: "ADHD",
    qualifications: [
      {
        startingDate: "2012-03-04",
        endingDate: "2014-04-05",
        degree: "Masters in Psychology",
        university: "Queensland University"
      }
    ],
    experiences: [
      {
        startingDate: "2004-02-27",
        endingDate: "2010-03-15",
        position: "Junior Psychiatrists",
        hospital: "Women's and Children's Hospital"
      },
      {
        startingDate: "2014-03-13",
        endingDate: "2024-03-29",
        position: "Senior Psychiatrists",
        hospital: "Women's and Children's Hospital"
      }
    ],
    bio: "Mental Health Advocate.",
    about: "I believe in a holistic approach to mental health, incorporating both medication management and psychotherapy to tailor treatment plans to each individual's unique needs and goals. By fostering a collaborative and non-judgmental therapeutic environment, I strive to empower my patients to explore their strengths, overcome obstacles, and achieve lasting positive change.",
    timeSlots: [
      {
        startingTime: "14:32",
        endingTime: "15:32",
        day: "tuesday"
      }
    ],
    reviews: [
      "66035787b5fda9ee74324412",
      "66035797b5fda9ee74326517"
    ],
    averageRating: 2,
    totalRating: 2,
    isApproved: "approved",
    appointments: [],
    blogs: [
      "66024acc0d2a3caa5dabb81c",
      "66024d63110e6ceadbca8b33",
      "66024fb2d9dd3754be293fdc",
    ],
  }
]