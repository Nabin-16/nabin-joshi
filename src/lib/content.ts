import type { StaticImageData } from "next/image";
import artemisTeam from "@/assets/images/artemis-team.webp";
import prismBenchmark from "@/assets/images/prism-benchmark.webp";
import roboticArmDemo from "@/assets/images/robotic-arm-demo.webp";
import robolinexTeam from "@/assets/images/robolinex-team.webp";
import sanjayaTeam from "@/assets/images/sanjaya-team.webp";
import saveikaTeam from "@/assets/images/saveika-team.webp";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  image?: StaticImageData;
  imageAlt?: string;
  stack: string[];
  repoUrl?: string;
  status: "placeholder" | "active" | "complete";
  details: {
    question: string;
    scope: string;
    outcome: string;
  };
};

// Add, update, or remove projects in this list. Each object becomes a project card
// on the homepage and Projects page, plus a generated case-study route.
export const projects: Project[] = [
  {
    slug: "prism-prompt-reliability",
    title: "PRISM: Prompt Reliability Through Semantic Multiplexing",
    summary:
      "A benchmark for testing whether small language models change their answers when the same question is phrased differently.",
    description:
      "PRISM studies prompt sensitivity in educational multiple-choice question answering using local Small Language Model inference through Ollama on CPU-only hardware.",
    image: prismBenchmark,
    imageAlt: "PRISM prompt reliability benchmark title graphic",
    stack: [
      "Python",
      "Ollama",
      "Small language models",
      "ARC-Challenge",
      "SciQ",
    ],
    repoUrl: "https://github.com/Nabin-16/PRISM-Reliability-test-",
    status: "active",
    details: {
      question:
        "Does a Small Language Model change its behavior when the same underlying question is expressed through different controlled prompt formulations?",
      scope:
        "The first experiment freezes 400 science questions from ARC-Challenge and SciQ, then evaluates four local models across five prompt conditions.",
      outcome:
        "The pipeline separates inference from evaluation and measures correctness, instruction adherence, cross-prompt consistency, prompt sensitivity, and potentially unreliable response patterns.",
    },
  },
  {
    slug: "robolinex-maze-solver",
    title: "RobolineX Maze Solver",
    summary:
      "An autonomous line-following robot that maps a maze, simplifies its route, and replays the optimized path.",
    description:
      "RobolineX is competition firmware for an Arduino Nano robot that combines QTR sensors, PID motion control, EEPROM route storage, and path optimization to navigate a maze.",
    image: robolinexTeam,
    imageAlt:
      "RobolineX team members holding competition certificates and medals",
    stack: [
      "Arduino Nano",
      "C++",
      "PlatformIO",
      "QTR sensor array",
      "TB6612FNG",
      "EEPROM",
    ],
    repoUrl: "https://github.com/Nabin-16/RobolineX",
    status: "complete",
    details: {
      question:
        "How can a line-following robot learn a maze during a dry run and complete a faster, more reliable final run?",
      scope:
        "The robot calibrates its eight-channel sensor array, detects intersections, chooses a left- or right-hand wall-following strategy, and stores each movement in EEPROM. The firmware supports separate PlatformIO environments for sensor, motor, EEPROM, turn, and maze-solving tests.",
      outcome:
        "The recorded route is simplified with turn-pattern replacements before replay. PID controllers keep the robot aligned, while dedicated turn and recovery routines translate the optimized route into repeatable motor movements.",
    },
  },
  {
    slug: "artemis-gps-imu-tracker",
    title: "Artemis GPS & IMU Tracker",
    summary:
      "A real-time tracking system that bridges mobile sensor data through an ESP32 to a live admin dashboard.",
    description:
      "Artemis captures GPS and sensor data from mobile devices, forwards it through an ESP32 access-point and station bridge, and visualizes connected devices in a Flask-powered dashboard.",
    image: artemisTeam,
    imageAlt: "Artemis project team standing together in a university corridor",
    stack: ["ESP32", "PlatformIO", "C++", "Flask", "GPS", "IMU data"],
    repoUrl: "https://github.com/Nabin-16/artemis",
    status: "active",
    details: {
      question:
        "How can mobile location and sensor data move reliably across separate local networks and remain visible in real time?",
      scope:
        "The ESP32 acts as both a phone-facing hotspot and a station connected to a home or office network. It forwards device data to a Flask server, while the mobile dashboard lets users identify themselves and start sharing.",
      outcome:
        "Artemis combines PlatformIO firmware, a Flask backend, and a browser dashboard to show connected devices on a live map. The repository includes network troubleshooting guidance for 2.4 GHz Wi-Fi, IP mismatches, and local firewall configuration.",
    },
  },
  {
    slug: "saveika",
    title: "Saveika",
    summary:
      "A mobile-first mental health screening and escalation platform for Community Health Workers and supervisors in Nepal.",
    description:
      "Saveika helps field workers capture household visit signals, calculate mental health risk, and give supervisors a clearer view of households that may need urgent follow-up.",
    image: saveikaTeam,
    imageAlt: "Saveika hackathon team members with their mentor",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Leaflet",
      "Vitest",
    ],
    repoUrl: "https://github.com/ajjucoder/Saveika",
    status: "complete",
    details: {
      question:
        "How can community health workers collect household signals and help supervisors identify people who may need mental-health follow-up?",
      scope:
        "The platform provides guided household-visit intake, risk scoring through Gemini with deterministic fallback logic, supervisor review tools, English and Nepali support, seeded demo accounts, and installable PWA support.",
      outcome:
        "Saveika combines Supabase Auth, Postgres with row-level security, a mobile-first interface, and map views built with Leaflet and OpenStreetMap. The repository also includes tests with Vitest and Testing Library.",
    },
  },
  {
    slug: "sanjaya-assistive-communication",
    title: "Sanjaya — Assistive Communication System",
    summary:
      "A low-cost, AI-powered communication device that turns one controllable input into spoken sentences.",
    description:
      "Sanjaya helps people with motor and linguistic dysfunctions communicate through a single input signal, translating Morse-like timing into letters, predicted words, complete sentences, and speech.",
    image: sanjayaTeam,
    imageAlt:
      "Sanjaya hackathon team holding certificates and a winning trophy",
    stack: [
      "Python",
      "Flask",
      "Raspberry Pi",
      "Gemini",
      "Morse code",
      "Browser TTS",
    ],
    repoUrl: "https://github.com/Nabin-16/Sanjaya",
    status: "complete",
    details: {
      question:
        "How can a person communicate using a single signal they can voluntarily control?",
      scope:
        "The prototype uses a physical button connected to a Raspberry Pi, with an input-agnostic design that can also support breath, eye-blink, EMG, or other binary and variable sensors. Signal duration distinguishes dots, dashes, selection mode, and decode pauses.",
      outcome:
        "A Flask server decodes the input into Morse letters, uses Gemini for word prediction, and speaks the resulting sentence through browser text-to-speech on any device connected to the same network.",
    },
  },
  {
    slug: "robotic-arm-computer-vision",
    title: "Robotic Arm with Computer Vision",
    summary:
      "A gesture-controlled robotic arm that translates hand movements into servo commands.",
    description:
      "This project uses a webcam and hand tracking to control a robotic arm. MediaPipe detects hand landmarks, Python interprets gestures, and commands travel over serial to an Arduino-driven servo controller.",
    image: roboticArmDemo,
    imageAlt:
      "A robotic arm computer vision project being demonstrated at an exhibition",
    stack: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "Arduino",
      "PCA9685",
      "Serial communication",
    ],
    repoUrl: "https://github.com/Nabin-16/Robotic-arm-with-computer-vision",
    status: "complete",
    details: {
      question:
        "How can natural hand gestures become reliable controls for a physical robotic arm?",
      scope:
        "A webcam captures a single hand, MediaPipe extracts its landmarks, and the Python application identifies finger counts, fists, thumb-to-index distance, and left- or right-hand context. The resulting command is sent to an Arduino over USB serial.",
      outcome:
        "The Arduino sketch updates the arm servos through an Adafruit PCA9685 PWM Servo Driver. Gesture mappings provide separate movement commands for left and right hands, including stop, directional motion, and gripper-related actions.",
    },
  },
];

// The homepage intentionally highlights only the first two projects.
// The full collection remains available on the Projects page and through navigation.
export const featuredProjects = projects.slice(0, 2);
