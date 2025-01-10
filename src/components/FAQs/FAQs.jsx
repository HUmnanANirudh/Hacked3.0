import React, { useRef } from "react";
import "./FAQ.css";

function FAQs() {
  const handleToggle = (event) => {
    const details = event.currentTarget;
    const content = details.querySelector("p");

    if (!details.open) {
      // Trigger Closing Animation
      const currentHeight = content.scrollHeight;
      content.style.maxHeight = `${currentHeight}px`; // Set to full height initially
      content.style.transition = "none"; // Temporarily disable transition
      requestAnimationFrame(() => {
        content.style.transition =
          "max-height 0.5s ease-in-out, opacity 0.5s ease-in-out";
        requestAnimationFrame(() => {
          content.style.maxHeight = "0"; // Collapse smoothly
          content.style.opacity = "0";
        });
      });

      // Wait until animation ends to reset styles
      content.addEventListener(
        "transitionend",
        () => {
          if (!details.open) {
            content.style.maxHeight = "0";
          }
        },
        { once: true }
      );
    } else {
      // Trigger Opening Animation
      content.style.maxHeight = "0"; // Reset height before expanding
      content.style.transition = "none"; // Temporarily disable transition
      requestAnimationFrame(() => {
        content.style.transition =
          "max-height 0.5s ease-in-out, opacity 0.5s ease-in-out";
        content.style.maxHeight = `${content.scrollHeight}px`; // Expand smoothly
        content.style.opacity = "1";
      });
    }
  };

  return (
    <section className="p-4 pt-10 bg-[#090a37] min-h-[80vh]">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="text-xl md:text-4xl w-full text-center font-bold">
          FREQUENTLY ASKED QUESTIONS
        </div>
        <div className="mt-8 pt-4 w-full md:w-3/5">
          <div className="space-y-4">
            {[
              {
                question: "What is Hacked 3.0?",
                answer:
                  "Hacked 3.0 is a 24-hour hackathon held as part of the 67th Milestone college fest at BML Munjal University. It’s a platform for students to showcase their creativity and problem-solving skills by tackling challenges inspired by the UN’s Sustainable Development Goals.",
              },
              {
                question: "How do I register?",
                answer:
                  "It’s easy! Just click on the registration link, fill in your details, and you’re in! Get ready to join the coolest hackathon of the year!",
              },
              {
                question: "When and where will Hacked 3.0 take place?",
                answer:
                  "Hacked 3.0 will kick off on [Date], 2025, and conclude on [Date] at BML Munjal University, Gurgaon, Haryana. The hackathon will run continuously for 24 hours, making for an exciting, immersive experience.",
              },
              {
                question: "What do participants get from Hacked 3.0?",
                answer:
                  "With a prize pool of up to Rs. [Amount]  top teams will earn cash prizes and certificates of excellence! All participants receive certificates, plus a chance to network with industry pros, participate in workshops, and gain valuable hands-on experience.",
              },
              {
                question: "Will travel reimbursement be provided?",
                answer:
                  "Travel expenses won’t be covered, but we’ll provide free shuttle services between Iffco Chowk Metro Station and the university for easy access.",
              },
              {
                question: "What is the theme for Hacked 3.0?",
                answer: "[-]",
              },
              {
                question: "Who can participate in Hacked 3.0?",
                answer:
                  "Hacked 3.0 is open to all college students passionate about technology and innovation. Teams can consist of [-] members.",
              },
              {
                question: "Do I have to be a computer science major to join?",
                answer:
                  "Not at all! Hacked 3.0 welcomes students from all backgrounds. Whether you’re a coder, designer, or simply a creative thinker, there’s a place for you here.",
              },
              {
                question: "What should I bring to Hacked 3.0?",
                answer:
                  "Bring your laptop, charger, any necessary software or tools, and, most importantly, your enthusiasm and creativity!",
              },
              {
                question: "Can I participate if I’m a beginner?",
                answer:
                  "Absolutely! Hacked 3.0 is beginner-friendly and welcomes students of all skill levels. We’ll have mentors and resources available to help you learn and grow throughout the event.",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group border-l-8 border-[#451d72] [&_summary::-webkit-details-marker]:hidden rounded-md bg-gray-900 bg-opacity-70"
                onToggle={handleToggle}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900 dark:bg-gray-900 dark:text-white">
                  <h2 className="font-medium">
                    {index + 1}. {item.question}
                  </h2>

                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#6027a1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <p
                  className="mt-4 px-4 leading-relaxed text-gray-700 dark:text-gray-200"
                  style={{ maxHeight: "0", opacity: "0", overflow: "hidden" }}
                >
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
