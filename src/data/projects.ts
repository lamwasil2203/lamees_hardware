import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "project-1",
    number: "01",
    title: "My First Ever Hardware Project",
    date: "January 2026",
    dateShort: "Jan 2026",
    tags: ["Hardware"],
    excerpt:
      "Good Morning Lamees... How can I help you today ? Said Claude when I asked it to help me debug my profolio. Therefore, I decide to dedicate this project to myself...Lamees.",
    lead: "Good Morning Lamees... How can I help you today ? Said Claude when I asked it to help me debug my profolio. Therefore, I decide to dedicate this project to myself...Lamees.",
    heroImage: "/images/projects/project-1/hero.JPG",
    cardImage: "/images/projects/project-1/hero.JPG",
    sections: [
      {
        type: "overview",
        label: "Overview",
        largeParagraph:
          "The goal of this project was to get familar with how to solder and use a soldering iron. Which looked easy at first but proved to be quite challenging.",
        paragraphs: [
          "I started by watching a few tutorials on how to solder and use a soldering iron. Then I went into the lab and started soldering... And I got it working (eventually).",
        ],
      },
      {
        type: "gallery",
        images: [
          {
            src: "/images/projects/project-1/label.JPG",
            alt: "Project 1 label detail",
            caption: "Label detail",
            featured: true,
          },
          {
            src: "/images/projects/project-1/front.JPG",
            alt: "Project 1 front view",
            caption: "Front view",
          },
          {
            src: "/images/projects/project-1/back.JPG",
            alt: "Project 1 back view",
            caption: "Back view",
          },
        ],
      },
      {
        type: "reflection",
        label: "Reflection",
        quote:
          "This project was a great learning experience. I learned a lot about how to solder and use a soldering iron. I also learned a lot about the importance of patience and precision. Before going into the lab I did not have an idea of what I wanted my sculpture to look like. I wanted to make endless circles but that proved to be quite challenging. I restarted the sculpture and realized that there were letter at the top of the protoboard. I remembered that I just created a porfolio with my name on it... So I decided to make a sculpture of my name as a nice welcome to the website. I am not the most artistic person but I tried to make the sculpture have more a sentimental meaning.",
      },
      {
        type: "takeaways",
        label: "Key Takeaways",
        takeaways: [
          {
            label: "Challenge",
            title: "Challenge:",
            description:
              "Making sure that the soldering do not overlap and making sure that there is enough soldering on each pin. Solution: I tried to be more stable and took a bit more time to solder the pins.",
          },
          {
            label: "Learning",
            title: "Learning:",
            description:
              "How to solder and use a soldering iron and the importance of patience and precision. I learned a lot about how to solder and use a soldering iron. I also learned a lot about the importance of patience and precision.",
          },
          {
            label: "Surprise",
            title: "Surprise:",
            description:
              "I honestly really enjoyed soldering and making this sculpture. Result: a nice little sculpture of my name as a welcome to the website.",
          },
        ],
      },
    ],
  },
  {
    slug: "project-2",
    number: "02",
    title: "Heart PCB Project",
    date: "February 2026",
    dateShort: "Feb 2026",
    tags: ["Hardware"],
    excerpt: "From the Bottom of my Heart...",
    lead: "From the Bottom of my Heart...I love soldering and designing PCDs",
    heroImage: "/images/projects/project-2/image1.JPG",
    cardImage: "/images/projects/project-2/image1.JPG",
    sections: [
      {
        type: "overview",
        label: "Overview",
        largeParagraph: "The goal of this project was to design and build my own PCB board from scratch (with the help of Miles)",
        paragraphs: [
          "I started off by looking at a few PCB designs online to get a sense of what we will be working with, then I followed the videos that were given to us which were very helpful!",
        ],
      },
      {
        type: "gallery",
        images: [
          {
            src: "/images/projects/project-2/kicad.png",
            alt: "Size of the PCB",
            caption: "Side View",
            featured: true,
          },
          {
            src: "/images/projects/project-2/image3.JPG",
            alt: "Mistake !",
            caption: "Caption text",
          },
          {
            src: "/images/projects/project-2/image4.JPG",
            alt: "Solution of the PCB",
            caption: "Solution !",
          },
        ],
      },
      {
        type: "reflection",
        label: "Reflection",
        quote: "Doing the PCB work was a lot tedious than I expected it to be, however, it was super fun! I really enjoyed seeing everything come together and learning more about circuit design and actually working with our hands to build the PCB. It was a great learning experience starting off from the very basic of how a circuit works and understanding the reason what each components does in the circuit. I underestimated the size of my own circuit and it kinda turned into an elongated heart...nonetheless, it turned out really nicely and i think it is actually a lot easier to follow my board circuit.",
      },
      {
        type: "takeaways",
        label: "Key Takeaways",
        takeaways: [
          {
            label: "Challenge",
            title: "Challenge:",
            description: "A major challenge that I faced was that one of my resistors pulled out part of the circuit, cutting out the current that goes through that port, making it impossible for it to reach the the LED light",
          },
          {
            label: "Learning",
            title: "Learning:",
            description: "I learnt that not everything is impossible, Miles helped me figure out that I can connect the wires that are coming from the resistor and the LED light to original port that it was coming from, which in my case was connecting Port 3 with Resistor 3 and then connecting it to the LED light...having there be a connection between them.",
          },
          {
            label: "Surprise",
            title: "Surprise:",
            description: "The soldering of the PCB was a lot harder than I expected and the whole time I was scared of messing up the current of everything.",
          },
        ],
      },
    ],
  },
];
