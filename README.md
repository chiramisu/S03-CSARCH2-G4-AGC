# INCREMENTAL README -- Changelog

## July 21, 2026
### Changes made:
* Added more content, references and design elements to Then vs Now
* Added more questions, references and design elements to the minigame
* Added more major events, references, keyboard navigation and design elements to the timeline

### Things learned, Challenges, Creative Development:
#### Then vs Now AGC Interactive 
* Based on feedback, to make page less static I added three things: fade transition whenver viewing through innovations, an image slider where you can compare the image of the innovation from before and now, and a small star bursting effect whenever you click the innovation buttons (idea from an instagram reel of a confetti effect).
* Following our proposal, I changed the black and white theme to be more deepspace-centered (blueish, beige, gold), as well as changing the background image to suit the theme by overriding the global.css using !important so I could change the design without touching the global file.
* Whenever the window size changes, I couldn't see the whole image properly. So I had to fit the entire image and add blurred effect background instead.
* In the url() portion for the space background, it originally didn't work despite the code being completely fine. Eventually it was fixed by adding "" because the way the file is named in my local device had spaces.

#### AGC Minigame
* The AGC is a major invention in our history and learning more about it made me realize how hard it was too solve these problems involving space travel especially considering the technological constraints back then. A lot of people came together and various components, technology, and innovations were made to make this project a success.
* For the minigame specifically, I think that the main challenges were creativity and design. Those aspects aren’t really my strong suite. Ideally I wanted the assembly area to have a better design and looked like an actually technological component that you would put modules in but I eventually just settled for a simple design. Additionally, spacing was also a big problem at the start forcing me to make many boxes that could hold text and images.

#### AGC Timeline
* Originally the timeline looped infinitely and did not start at the first event. I changed the  timeline to follow a linear progression and navigation so it has a clear beginning (1961) and ending (1972) with the Moon acting as the final destination. It ended up matching the theme much better.
* I also added keyboard navigation because I realized users naturally try using the arrow keys when looking at carousels. It made it feel much more accessible.
* Designing the timeline itself took more experimentation than I expected. I spent a while adjusting the spacing between the active, previous, and next cards so they were easy to understand. Small changes in scaling and positioning makes big difference.
* One challenge throughout development was balancing historical accuracy with readability. Many sources explained the AGC using highly technical language, so I spent a lot of time simplifying concepts while making sure the explanations were still accurate and referenced.

### Disclosure on AI Usage:
* Used ChatGPT to help with the development of Then vs Now creative programming logic for star burst and compare slider, primarily used to provide explanations, conceptual guidance, pseudocode, and suggestions regarding possible approaches to implementing effects. Prompt used stated below: 
  * Explain in detail how confetti button click effect works but with stars instead, as well as before-and-after comparison slider with blurred background effect. Present the explanation suitable for react in pseudocode and describe the purpose of each major step, and function.
* Used Claude for assistance with grammar, sentence structure, and rephrasing of ideas. Prompt used stated below: 
  * Is the following text cohesive/coherent...
  * What is the main idea you get from the text below...
  * Synonym for the phrase...

## July 6, 2026
### Changes:
* Added homepage under src/pages with hyperlinks to interactive elemets: Then vs Now, Timeline, Workshop

## July 7, 2026
### Changes:
* Debated whether to keep the interactive elements in the homepage or link them to a different page
* Added interactive timeline, interactive workshop, Then vs Now, and minigame (Still a WIP)
* THEN VS NOW: Added .jsx .mdx .css files 
* TIMELINE: Added .jsx .mdx .css files for the timeline and also added some images
* MINIGAME: Added AGCminigame.jsx under components and some images in assets
* Added .astro for tooltip function in components
* Modified main page to use tooltips
* Tooltips added to mainpage detailing some parts in additional info for AGC
* Interactive workshop is integrated into the homepage instead of having its own hyperlink
* Cleaned up introduction layout

---

# Inside the Apollo Guidance Computer: The Technology That Took Us to the Moon

## Project Information

**Course:** CSARCH2

**Section & Theme:** S03 – Problem-Solving Stories

**Topic:** Apollo Guidance Computer (AGC)

### Group 4

* ALCASID, Aizy Danielle
* DIMAUNAHAN, Chelsea Jei
* PANGAN, Aaliyah Maxine Rochelle
* ROA, Luis Antonio
* SANIDAD, Christian Gabriel

---

# Introduction

The Apollo Guidance Computer (AGC) was developed by the MIT Instrumentation Laboratory between 1961 and 1972. The AGC was one of the first computers to rely on integrated circuits, which allowed it to meet the strict size, weight, and power restrictions required for the Apollo missions while maintaining the reliability needed for mission operations.

This push for miniaturization and dependability set new standards for digital computing. The innovations born from the AGC did not stay on the Moon. Many of the technologies and design principles pioneered by the AGC later influenced modern smartphones, aircraft systems, and medical devices.

---

# Proposed Interactive Elements

## Then & Now Narrative

This interactive split-screen experience allows visitors to explore how innovations from the Apollo Guidance Computer evolved into technologies used today.

The left side highlights a specific innovation from the Apollo era, while the right side shows how that same innovation is applied in modern technology. Users can select from five different innovations, and each selection updates both sides simultaneously to reveal a "then and now" comparison.

This design helps visitors understand the direct connection between Apollo-era engineering and the technology they use every day.

## Interactive Timeline of Events

The exhibit also features an interactive timeline showing the development of the Apollo Guidance Computer alongside major events during the Space Race.

Visitors can click on different timeline points to explore historical details, including:

* The 1961 transition toward integrated circuits
* Hardware development and testing phases
* The Apollo 11 landing
* The famous AGC overload alarms during the lunar descent

The timeline helps visitors understand how technical challenges emerged and how engineers solved them throughout the project.

---

# Exhibit Details

## All About the AGC

Developed by the MIT Instrumentation Laboratory, the Apollo Guidance Computer was one of the first computers built with integrated circuits and used core memory as well as read-only magnetic rope memory. Compared to older computers, which often occupied entire rooms, the AGC was compact enough to fit inside a spacecraft.

NASA wanted astronauts to perform calculations in real time during flight instead of relying entirely on ground-based analog computers, which were not fast or reliable enough for a mission to the Moon.

The AGC introduced several architectural features that were uncommon at the time. It used erasable core memory for changing mission data and magnetic rope memory for permanently storing software. By separating mission data from mission software, the system became more reliable because critical programs could not be modified during flight.

Magnetic rope memory also allowed a large amount of software to be stored in a compact space, which was important due to the spacecraft's strict weight limitations.

The AGC also featured the DSKY (Display and Keyboard), which allowed astronauts to communicate directly with the computer. Through the DSKY, astronauts could monitor spacecraft information and perform navigation tasks in real time.

Another important architectural feature was the AGC's interrupt-driven design and priority scheduling system. This allowed the computer to handle multiple tasks simultaneously while prioritizing critical navigation and guidance calculations. As a result, the AGC could continue operating even when the system became overloaded.

The AGC did not only solve NASA's problems related to the Moon mission. It also addressed limitations of earlier computers through its use of integrated circuits, making it significantly smaller than previous vacuum tube- and transistor-based systems. The AGC helped accelerate the adoption of integrated circuits throughout the computer industry, paving the way for smaller, more reliable, and more portable electronic devices.

---

# Design and Layout

## Home Page

![Home Page](images/homepage.png)

The home page serves as the entry point of the exhibit. It contains the exhibit title, introductory information about the Apollo Guidance Computer, and navigation links to different sections of the website. Visitors are provided with a brief overview of the topic and can proceed to explore the historical content or begin the interactive experience.

## History, Background, and Notable Figures

![History and Background](images/historyAndBG.png)

This section provides an overview of the Apollo Guidance Computer and the technological challenges that contributed to its development.

Visitors are also introduced to notable individuals and organizations that played significant roles in the creation of the AGC's hardware and software.

## AGC Innovations Footprint

![Then and Now](images/thenAndNow.png)

This section highlights innovations from the Apollo Guidance Computer that are still present in modern technology.

The layout is divided into two panels:

* Apollo-era innovation
* Modern-day application

Users can select different innovations to compare their historical origins with their present-day uses.

## Interactive Minigame

![Minigame](images/minigame.png)

To make the exhibit more interactive, visitors will participate in a choice-based mini-game where they take on the role of an engineer helping build the Apollo Guidance Computer. Users must identify which AGC innovations solved the limitations of older computers, such as integrated circuits, magnetic rope memory, the DSKY, and priority scheduling. Each correct answer adds a new component to the AGC, gradually assembling the computer while teaching visitors about its architectural improvements.

## Interactive Timeline

![Interactive Timeline](images/interactiveTimeline.png)

The timeline presents the history of the Apollo Guidance Computer through a horizontally scrollable interface.

As visitors move through the timeline, the selected event expands and becomes the focal point. Additional information, images, and historical context appear below the selected event.

---

# Style Guide

## Color Palette

| Element       | Choice            |
| ------------- | ----------------- |
| Primary Color | Off White / Beige |
| Background    | Deep Navy         |
| Accent Color  | Gold / Dusty Blue |

## Typography

| Usage             | Font          |
| ----------------- | ------------- |
| Heading Font      | Space Grotesk |
| Body Font         | Inter         |
| Retro/System Font | IBM Plex Mono |

---

# Design Inspiration

The exhibit adopts a halftone retro aesthetic with deep navy grids and dotted shading inspired by vintage print textures and space-age technical manuals.

Typography is intentionally blocky and system-oriented to evoke the feel of early computing systems and historical aerospace documentation.

### Inspiration Images

![Inspiration 1](images/design_inspo.png)

---

# References

* 1968 | Timeline of Computer History | Computer History Museum. (n.d.). https://www.computerhistory.org/timeline/1968/#169ebbe2ad45559efbc6eb357204a28c 

* Atkinson, N. (2025, June 13). The story of the Apollo Guidance Computer, Part 2. Universe Today. https://www.universetoday.com/articles/the-story-of-the-apollo-guidance-computer-part-2 

* Mattioli, M. (2021). The Apollo Guidance computer. IEEE Micro, 41(6), 179–182. https://doi.org/10.1109/mm.2021.3121103 

* Sotomayor, B. (2016, July 9). A Glimpse into the Apollo Guidance Computer. Medium. https://borja.medium.com/a-glimpse-into-the-apollo-guidance-computer-8ee06e5e1a5c 

