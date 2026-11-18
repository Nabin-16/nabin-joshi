import type { StaticImageData } from "next/image";
import img1 from "@/assets/images/img-1.webp";
import img2 from "@/assets/images/img-2.webp";
import img3 from "@/assets/images/img-3.webp";
import roboticsClubTeam from "@/assets/images/robotics-club-team.webp";

export type BlogTable = {
  headers: string[];
  rows: string[][];
};

export type BlogImage = {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
};

export type BlogSection = {
  title: string;
  paragraphs?: string[];
  list?: string[];
  definitions?: { term: string; definition: string }[];
  table?: BlogTable;
  note?: string;
  image?: BlogImage;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateValue: string;
  readingTime: string;
  tags: string[];
  intro: string;
  image?: BlogImage;
  sections: BlogSection[];
  links: { label: string; href: string }[];
  linksTitle?: string;
  closingNote?: string;
};

export const posts: BlogPost[] = [
  {
    slug: "when-language-models-are-consistently-wrong",
    title: "Building PRISM: For Evaluating language models",
    description:
      "An experiment on prompt sensitivity turned into a university minor project, a reproducible benchmark, and a desktop app.",
    date: "September 9, 2026",
    dateValue: "2026-09-09",
    readingTime: "8 min read",
    tags: ["AI / ML", "LLMs", "research", "reproducibility"],
    intro:
      "We usually judge language models by how many answers they get right. I got curious about something else, what happens when you ask the same question in different ways?",
    sections: [
      {
        title: "The question",
        paragraphs: [
          "Take a multiple-choice question. You can ask it directly, phrase it as an instruction, or wrap it in a conversational frame. The meaning stays the same, and a model should land on the same answer each time. Often it doesn’t. A model might get it right under one phrasing and wrong under another, follow the answer format once and ignore it the next time, or give the same wrong answer across every variation.",
          "That last case is the one that stuck with me. When a model agrees with itself, that doesn’t mean it is correct.",
          "This became PRISM, short for Prompt Reliability Through Intelligent Semantic Multiplexing. I wanted to see how small language models that run locally respond to prompts that mean the same thing, and whether accuracy alone captures that behaviour. So I looked at correctness, instruction compliance, answer recovery, agreement, and prompt sensitivity together. It started as my own project and later became our university minor project.",
        ],
      },
      {
        title: "How the pipeline works",
        paragraphs: [
          "PRISM keeps the question fixed, changes how it is presented, and compares the answers under one evaluation protocol.",
          "We use two science datasets: ARC-Challenge, with hard multiple-choice science questions, and SciQ, with questions written for educational assessment. The benchmark takes 200 questions from each and asks every question in five formulations, labelled P0 to P4. The meaning stays the same while the wording or instruction framing changes.",
          "Models run through Ollama, so the experiments work on ordinary hardware without paid APIs. The set is Llama 3.2 3B, Gemma 3 4B, Mistral 7B, and Phi-4 Mini (3.8B). Later result records also include Qwen 2.5 in 0.5B and 3B sizes. These models don’t represent every small language model. The goal is to compare how they behave under the same setup.",
          "Fair comparison needs consistent answer extraction and scoring. A response that ignores the requested format shouldn’t automatically count as a wrong answer, so instruction compliance is measured separately from correctness.",
        ],
        definitions: [
          { term: "Accuracy", definition: "How often the answer is correct." },
          {
            term: "Conditional accuracy",
            definition:
              "Accuracy over the response subset the protocol defines.",
          },
          {
            term: "Answer recovery",
            definition:
              "Whether the model gets the right answer under another formulation after an initial miss.",
          },
          {
            term: "Instruction compliance",
            definition:
              "Whether the response follows the requested output format.",
          },
          {
            term: "Question majority accuracy",
            definition:
              "Whether the most common answer across formulations is correct.",
          },
          {
            term: "Agreement",
            definition: "How consistently the model answers the same question.",
          },
          {
            term: "Prompt sensitivity",
            definition: "How much responses vary across formulations.",
          },
          {
            term: "Answer unanimity",
            definition: "How often all formulations give the same answer.",
          },
          {
            term: "Prompt-invariant incorrect rate",
            definition:
              "How often the model gives a stable but wrong answer.",
          },
        ],
      },
      {
        title: "What the results show",
        paragraphs: [
          "These figures come from the public PRISM results repository, one row per model and dataset.",
        ],
        table: {
          headers: [
            "Model",
            "Dataset",
            "Accuracy",
            "Agreement",
            "Prompt sensitivity",
            "Prompt-invariant incorrect rate",
          ],
          rows: [
            ["Qwen 2.5 3B", "ARC-Challenge", "78.0%", "95.5%", "4.5%", "14.5%"],
            ["Qwen 2.5 3B", "SciQ", "90.9%", "98.6%", "1.4%", "7.0%"],
            [
              "Llama 3.2 3B",
              "ARC-Challenge",
              "69.0%",
              "93.0%",
              "7.0%",
              "17.0%",
            ],
            ["Llama 3.2 3B", "SciQ", "88.4%", "97.9%", "2.1%", "7.5%"],
            ["Gemma 3 4B", "ARC-Challenge", "73.8%", "94.3%", "5.7%", "13.5%"],
            ["Gemma 3 4B", "SciQ", "88.5%", "97.4%", "2.6%", "7.0%"],
            ["Phi-4 Mini", "ARC-Challenge", "80.8%", "94.3%", "5.7%", "9.0%"],
            ["Phi-4 Mini", "SciQ", "93.1%", "98.0%", "2.0%", "3.5%"],
          ],
        },
        note: "Source: PRISM benchmark results. Values come from the published summary. The repository also holds additional runs.",
      },
      {
        title: "Agreement and correctness are different measures",
        paragraphs: [
          "Qwen 2.5 3B reached 95.5% agreement on ARC-Challenge but only 78.0% accuracy, with a 14.5% prompt-invariant incorrect rate. It often agreed with itself, and some of those agreed answers were wrong. Consistency tells you something about a model, but it doesn’t tell you the answers are right.",
        ],
      },
      {
        title: "Reliability depends on the dataset",
        paragraphs: [
          "Across these runs, SciQ gave higher accuracy and agreement and lower prompt sensitivity than ARC-Challenge. Phi-4 Mini scored 93.1% on SciQ and 80.8% on ARC-Challenge, and its prompt-invariant incorrect rate was 3.5% against 9.0%. Results depend on the task as well as the model, so one dataset isn’t enough.",
        ],
      },
      {
        title: "A single score can hide failures",
        paragraphs: [
          "Phi-4 Mini had high accuracy but surprisingly low instruction compliance, 10.1% on ARC-Challenge and 10.9% on SciQ. Before drawing any conclusion, I need to check output parsing, model behaviour, and the evaluation protocol.",
        ],
      },
      {
        title: "A note on the data",
        paragraphs: [
          "The public repository also contains zero-valued records. A zero doesn’t necessarily mean the model failed every question. It may come from a failed evaluation or an output-processing problem. So I don’t treat every published row as an equally valid result. The summary is good for exploring patterns, but a rigorous analysis needs verified run identifiers, evaluation completeness, prompt-level records, and a checked scoring pipeline. A benchmark is only as good as the evidence behind it, and checking that evidence is part of the research.",
        ],
      },
      {
        title: "From solo experiment to minor project",
        paragraphs: [
          "I began with one question: how much does an answer change when the same question is presented differently? Then I realised a model-output spreadsheet wouldn’t be a real contribution. We needed a reproducible pipeline, consistent metrics, readable results, documentation, and a way for other people to run the experiments.",
          "We submitted the minor-project proposal in May and defended it in August, working as a team. My friends and I built the pipeline, a website, and a desktop application for running and simulating the benchmark. Once other people had to use it, working on my machine stopped being enough. Someone else had to be able to understand the methodology, reproduce the evaluation, inspect the results, and run the software without rebuilding my environment.",
        ],
      },
      {
        title: "Mentorship and teamwork",
        paragraphs: [
          "Our professor, Pukar Karki, guided us as the project grew. He helped us turn a research idea into a structured university project, and it was useful to have someone to talk through direction, implementation choices, documentation, and milestones with.",
          "My teammates changed how I approached it too. Building a research pipeline is one job. Building something a group can maintain, explain, demonstrate, and share is another. I’m grateful to our professor for his guidance and to my teammates for taking the project well beyond its first form.",
        ],
      },
      {
        title: "The pipeline, the website, and the desktop app",
        paragraphs: [
          "We wanted PRISM to be something other people could run, so it grew along three paths.",
          "The research pipeline runs the evaluations, processes model responses, calculates metrics, and produces structured results. The documentation website explains the motivation, methodology, and metrics, and how to read the findings. The desktop application lets users run the pipeline and look at benchmark outputs without touching every part of the research code.",
          "Building these taught me that explaining research is part of the technical work. A result is far more useful when someone else can see how it was produced and check the evidence.",
        ],
      },
      {
        title: "Open source",
        paragraphs: [
          "The research pipeline is on GitHub, and the benchmark results live in a separate repository. The desktop app and documentation give people other ways in if they want to explore the work. The results repository has a review process: submitted runs enter a queue, a maintainer checks them, and they are then synced into the published results, which makes the public record easier to trace than a pile of unverified outputs.",
          "Open code and results make it easier to spot problems, compare evaluations, and improve the method. They don’t make every result correct or every conclusion general, but they make scrutiny and reproduction practical, and I want my research to allow both.",
        ],
      },
      {
        title: "What I learned",
        paragraphs: [
          "Which question you measure matters. A leaderboard built on accuracy answers a different question from a benchmark built on prompt sensitivity and stability.",
          "Metrics need to be read together. High agreement can sit alongside wrong answers, and instruction-following problems can complicate an otherwise strong result.",
          "Infrastructure is part of research quality. Reproducible runs, traceable results, validation, and careful handling of malformed outputs all limit what you can responsibly conclude.",
          "And projects improve when they’re built for other people to use. The pipeline, website, and desktop app each cover a different part of making the research understandable, testable, and accessible.",
        ],
      },
      {
        title: "What comes next",
        paragraphs: [
          "PRISM is still a learning process for me, and we haven’t solved language-model reliability. I want to validate the questionable runs, analyse prompt-level behaviour, add more models and tasks, and work out when a stable answer is a correct one rather than a stable error. I also want to keep improving the tools that make this work easier to reproduce and inspect.",
          "The original question hasn’t changed: if we ask a model the same thing in different ways, how much should we trust the answer when the wording changes, and what should we conclude when it doesn’t?",
          "Reliability can’t be reduced to one number. We need to see whether a model is right, how its behaviour shifts, what it follows, and where its consistency can mislead us.",
        ],
      },
    ],
    links: [
      {
        label: "Research pipeline",
        href: "https://github.com/Nabin-16/PRISM-Reliability-test-",
      },
      {
        label: "Benchmark results",
        href: "http://github.com/Nabin-16/Reliability-test-result-model-versions",
      },
      {
        label: "Desktop application",
        href: "https://github.com/karkikaruna/Prismapp",
      },
      {
        label: "Project website and downloads",
        href: "https://prism-slm-neon.vercel.app/",
      },
      { label: "Kaggle profile", href: "https://www.kaggle.com/shinesword" },
    ],
    closingNote:
      "A project developed as a collaborative university minor project, with guidance from Lecturer Pukar Karki.",
  },
  {
    slug: "my-journey-with-the-robotics-club",
    title: "My journey with the Robotics Club",
    description:
      "From a curious fresher at Basic Robotics Training to Secretary of the Robotics Club, IOE Purwanchal Campus. Two years that shaped a lot more than my engineering.",
    date: "June 15, 2026",
    dateValue: "2026-06-15",
    readingTime: "7 min read",
    tags: ["robotics", "leadership", "community", "engineering"],
    intro:
      "When I first walked into Basic Robotics Training as a fresher, I was just curious. I wanted to know how things worked, how an idea turns into a real system, and what it would take to build something myself. I had no idea that small step would end up being such a big part of my university life.",
    image: {
      src: roboticsClubTeam,
      alt: "Robotics Club members standing together outdoors",
      width: 1160,
      height: 768,
    },
    sections: [
      {
        title: "It started with curiosity",
        paragraphs: [
          "Two years later, my time as Secretary has ended with the handover to the new committee. Before I move on, I want to write down what these two years meant to me.",
          "I began with the basics, trying to understand robotics beyond what the classroom showed me. Curiosity soon became experimenting. I learned to build things, troubleshoot them, and make different technologies work together. Getting something to work turned out to be the easy half. The real learning started when I had to figure out why it didn’t.",
          "Somewhere along the way I went to my first hackathon, and we won, which I did not expect at all. That win showed me what happens when curiosity meets teamwork, and it pushed me to keep building and to take on challenges that felt a little out of reach. There were plenty of other firsts too: technical events, project demos, competitions, and working with people whose skills and views were different from mine. The club gave me room to learn by doing, and that changed how I approach engineering.",
        ],
      },
      {
        title: "The memories between the milestones",
        paragraphs: [
          "People usually talk about competitions, awards, and projects when they talk about a club. Those matter, but they’re only part of it.",
          "I also remember preparing late into the night, endless cups of tea, random conversations in the club room, laughing between deadlines, and the excitement of watching an idea finally come together. I remember the nerves before a presentation, the troubleshooting when something broke at the worst possible moment, and the relief when the team pulled it off.",
          "Events like Hult Prize and ACES Techfest are part of that, and so are all the smaller moments that never made it into a photo or an announcement. Some people I met as fellow members became teammates, and others became friends who made the hard days easier. Looking back, those ordinary moments are a big part of why the whole thing felt so good. Engineering is about the systems we build, and it’s also about who we build them with.",
        ],
      },
      {
        title: "Taking responsibility",
        paragraphs: [
          "As I got more involved, my role changed. I contributed as a member during ROBOTHON: The Ultimate Maze Quest, and later I was trusted to serve as Secretary of the club.",
          "That was a different kind of work. Beyond the technical projects, I had to coordinate people, manage responsibilities, and deal with administrative processes while the club went through major infrastructural changes and administrative hurdles. It was hard. There were exhausting days, uncertain moments, competing responsibilities, and nights that felt too short. Some problems had no quick fix, and I had to stay patient long after the early excitement was gone.",
          "I learned that leading means showing up when things get difficult, listening when people disagree, and owning it when plans change. I also learned that no committee member leads alone. Whatever we managed depended on the people who kept contributing and supporting each other through the difficult stretches. I’m grateful I got to learn all this firsthand.",
        ],
      },
      {
        title: "A victory we built together",
        paragraphs: [
          "One of my proudest memories is leading Team Robotics Club, ERC, to a win at VECTOR 3.0.",
          "A result usually gets reduced to a single photo or a few lines of announcement. The preparation, coordination, problem-solving, doubt, and stubbornness behind it rarely show. Standing with the team and knowing how much work had gone into getting there made the win mean a lot more to me. It showed me what a team can do when everyone commits to the same goal, and it taught me about perseverance and trusting the people beside you. I’ll carry that with me.",
        ],
      },
      {
        title: "The people who made it possible",
        paragraphs: [
          "To the 10th Committee: thank you for the trust, the support, the chaos, the jokes, the problem-solving sessions, and the shared memories. Thank you for showing up on the difficult days and for making this mean far more than our official responsibilities did.",
          "A special thank you to Pukar Karki Sir for his guidance, patience, and mentorship. His support helped us get through administrative challenges and keep going when the way forward wasn’t clear. I’m grateful for the confidence he placed in us and for the lessons that came with it.",
          "And to every member, senior, junior, teammate, and friend who was part of this chapter: thank you. Each of you added something, and I’m glad our paths crossed through the club. The projects and achievements will stay part of my engineering journey, and so will what I learned working alongside all of you.",
        ],
      },
      {
        title: "Beyond the title",
        paragraphs: [
          "Serving as Secretary was an important chapter of my university life, and I’m happy I got to serve the Robotics Club. With the handover, that responsibility is over, and it feels right to pause and appreciate how far it has taken me.",
          "I don’t see this as stepping away from robotics, though. My curiosity about technology and my interest in building things keep growing, and so does my wish to explore how robotics, computer science, and artificial intelligence connect. The club was a big part of that, because it gave me chances to experiment, collaborate, lead, and find out what I still want to learn.",
          "I’m moving on knowing my strengths better, and the areas where I still need to grow. I carry the lessons from the projects that worked, the problems that challenged us, the responsibilities that tested me, and the people who made it worthwhile. A role has a fixed term, but the interests and experiences that grow out of it can continue after it ends.",
        ],
      },
      {
        title: "To the next committee",
        paragraphs: [
          "I hope you make the most of what’s ahead. Take care of the club and the people who make it what it is. Build bigger things, try ideas that sound too ambitious, learn from the projects that go wrong, and give new members the same chance to find out what they can do.",
          "Enjoy it. The achievements matter, and so do the friendships, the late-night conversations, and the memories you make along the way. You have a new chapter to write, and I’m looking forward to seeing what you build.",
        ],
      },
      {
        title: "Looking back, moving forward",
        paragraphs: [
          "Two years ago I walked into Basic Robotics Training as a curious fresher. Today I’m thankful for everything that came after: the projects, the competitions, the unexpected wins, the hard responsibilities, and the people who became part of my story. I’m proud to have served as Secretary of the Robotics Club, IOE Purwanchal Campus, and grateful to have contributed to a community that gave me so much.",
          "My term is over, but the learning, experimenting, and building are still going.",
          "Thank you, Robotics Club, IOE Purwanchal Campus.",
          "Here’s to the next chapter, and to everything left to build.",
        ],
      },
    ],
    links: [
      {
        label: "Robotics Club, IOE Purwanchal Campus",
        href: "https://robotics.ioepc.edu.np/",
      },
    ],
    linksTitle: "Visit the Robotics Club",
  },
  {
    slug: "the-first-time-i-pitched-an-idea",
    title: "The first time I pitched an idea, and won a hackathon",
    description:
      "X-Hack 3.0, four teammates, and one phone call that gave a nervous freshman a bit of confidence.",
    date: "January 27, 2025",
    dateValue: "2025-01-27",
    readingTime: "6 min read",
    tags: ["Sanjaya", "hackathon", "teamwork", "learning"],
    intro: "I was nervous that day. I still remember it clearly.",
    sections: [
      {
        title: "The first big hackathon",
        paragraphs: [
          "X-Hack 3.0 was a hackathon run by CS50x Nepal at national level, and it was my first big one. I’ll be honest, I had no real idea what I’d signed up for. I was a freshman who barely knew how to turn an idea into a project, split the work between teammates, or build something decent against a deadline. I knew we had to make something. Knowing that and knowing where to start felt like two different planets.",
          "There were four of us: my friend Gaurav Shah (Zang), two seniors, Spandan Guragain (Spidey) and Rasa Bhattarai, and me. We named our project Sanjaya.",
        ],
      },
      {
        title: "Figuring it out as we went",
        paragraphs: [
          "At the start we were mostly guessing. What do we build? How do we even approach it? How do we make all the pieces work together? And how do you work as a team when everyone is still learning?",
          "Spandan dada made the biggest difference here. He guided us through almost every part of it. He helped us see how to approach the project, how to organise the work, and what to do next when we got stuck. As a beginner, I can’t tell you how much it helps to have someone who can take a confusing mess and show you the next step. I’m still grateful for it.",
          "A hackathon teaches you tech, but it also teaches you how to learn under pressure. You don’t have to know everything before you begin. You can start, ask questions, listen to people who know more than you, and work it out together. That was one of the first real lessons I got about building something with a team.",
        ],
        image: {
          src: img3,
          alt: "Sanjaya team members holding certificates and their hackathon prize",
          width: 1025,
          height: 768,
        },
      },
      {
        title: "“Nabin bhai will pitch.”",
        paragraphs: [
          "Then came the pitch. Spandan dada said something like, “Nabin bhai will pitch our idea in front of the judges.”",
          "Me? I panicked a little. Explaining your team’s work to a room of judges is nothing like talking it over with your teammates. You have to gather your thoughts, speak clearly, and make strangers understand why your idea matters. There wasn’t time to overthink it, so I just did it. I stood up and pitched.",
          "It sounds small now, but for the freshman I was, it wasn’t. Someone had seen a bit more in me than I could see in myself, and he trusted me with it. I’m glad he did. That pitch stayed with me long after the event ended.",
        ],
      },
      {
        title: "The phone call",
        paragraphs: [
          "When it was over, I wasn’t expecting anything. We left the venue and went our separate ways, and by the time I got home I figured that was it. We’d taken part, built something, learned a lot, and survived our first big hackathon. That already felt like enough.",
          "Then my phone rang. Someone told me to come back to the venue. I felt a little guilty for leaving in the first place, so I went back, still with no clue what was waiting.",
          "We had won. Weeeee!",
          "I can still feel how excited I was. We won X-Hack 3.0 and took home NPR 50,000 and a shiny trophy. For a bunch of students who started out unsure what to build or how to work together, it felt unreal.",
          "The money and the trophy were nice. What hit me harder was that we had actually done it. We took an idea, pushed through the uncertainty, learned from each other, presented it, and somehow won a competition we hadn’t expected to win. That gave my confidence a huge boost.",
        ],
        image: {
          src: img1,
          alt: "Nabin Joshi holding the X-Hack 3.0 trophy and certificates",
          width: 768,
          height: 1024,
        },
      },
      {
        title: "After the trophy",
        paragraphs: [
          "I think every student sometimes wonders whether they’re good enough. You look at people with more experience, more knowledge, and more confidence, and you feel miles behind. You hold back from taking on responsibility because you aren’t sure you’re ready. That’s exactly how I felt going into X-Hack 3.0.",
          "The win didn’t turn me into an expert developer, and I still get nervous. What it gave me was a reason to believe I could take on a challenge even when I wasn’t sure of myself. Being a beginner doesn’t mean you have nothing to offer. Working with people who know more than you speeds up your learning. And sometimes the most important thing you can do is say yes when someone gives you a chance.",
          "I also saw how much a good teammate or mentor can shape your path. Spandan dada’s guidance, working with Gaurav, and being on a team with Rasa didi all went into making that weekend special. We won together, but each of us took home our own lessons.",
        ],
      },
      {
        title: "Why it still matters",
        paragraphs: [
          "When I look at Sanjaya now, I don’t see an old project sitting in a GitHub repo. I see one of my first times building something under pressure, working through uncertainty with a team, and presenting an idea to people who would judge it. It showed me that growth often starts before you feel ready.",
          "Thank you, Gaurav Shah (Zang), Spandan Guragain, and Rasa Bhattarai, for being part of it. A special thanks to Spandan dada for guiding me and for trusting me to pitch when I was still looking for my confidence.",
          "X-Hack 3.0 gave us a trophy and NPR 50,000. What I took home was something a prize cheque can’t hold: the confidence to keep trying.",
          "Since then I’ve worked on more projects, joined more events, and found new interests across robotics, software, and AI. There has been plenty more to learn and plenty more nervous moments. But I’ll always remember the first time: the scared freshman, the pitch I didn’t see coming, the phone call, the walk back to the venue, and the moment we found out we’d won.",
          "Your first big win tells you that you did something well, and it also makes you start to believe you might be able to do a lot more.",
        ],
        image: {
          src: img2,
          alt: "Sanjaya teammates celebrating their X-Hack 3.0 win with certificates and prize cheque",
          width: 768,
          height: 1024,
        },
      },
    ],
    links: [
      {
        label: "Sanjaya on GitHub",
        href: "https://github.com/Nabin-16/Sanjaya",
      },
    ],
    linksTitle: "Explore Sanjaya",
    closingNote:
      "A first hackathon, and a team that made the win possible.",
  },
];

export const featuredPosts = [posts[0], posts[2]];
