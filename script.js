function Animation() {
  const tl = gsap.timeline({ defaults: { duration: 1 } });

  // Hey Baby
  tl.to(".text1", { display: "block" })
    .from(".text1", {
      width: 0,
      ease: "steps(12)",
    })
    .to(".text1", { width: 0, ease: "steps(12)", display: "none" }, ">2");

  // I know you have been waiting on me
  tl.to(".text2", { display: "block" })
    .from(".text2", {
      duration: 2,
      width: 0,
      ease: "steps(24)",
    })
    .to(".text2", { width: 0, ease: "steps(24)", display: "none" }, ">1");
  tl.addLabel("hugs");
  // And I'm sorry I took so long
  tl.to(".text3", { display: "block" })
    .from(".text3", {
      width: 0,
      ease: "steps(16)",
    })
    .to(".text3", { width: 0, ease: "steps(16)", display: "none" }, ">3");

  tl
    .to(
      "#hugs",
      {
        opacity: 1,
      },
      "hugs"
    )
    .to("#hugs", {
      opacity: 0,
    }),
    ">";

  // But before I ask
  tl.to(".text4", { display: "block" })
    .from(".text4", {
      duration: 2,
      width: 0,
      ease: "steps(16)",
    })
    .to(".text4", { width: 0, ease: "steps(12)", display: "none" }, ">2");
  tl.addLabel("changebackground");

  // I would like to say that you are by far//

  //one of the best things//
  tl.addLabel("hugs3");
  tl.to(".text6", { display: "block" })
    .from(".text6", {
      width: 0,
      ease: "steps(20)",
    })
    .to(".text6", { width: 0, ease: "steps(12)", display: "none" }, ">1");

  // That has every happened to me
  tl.to(".text7", { display: "block" })
    .from(".text7", {
      width: 0,
      ease: "steps(16)",
    })
    .to(".text7", { width: 0, ease: "steps(16)", display: "none" }, ">2");
  tl
    .to(
      "#hugs3",
      {
        opacity: 1,
      },
      "hugs3"
    )
    .to("#hugs3", {
      opacity: 0,
    }),
    ">";

  tl.addLabel("hugs2");
  // and I am sorry
  tl.to(".text8", { display: "block" })
    .from(".text8", {
      duration: 2.5,
      width: 0,
      ease: "steps(16)",
    })
    .to(".text8", { width: 0, ease: "steps(10)", display: "none" }, ">0.5");

  // if you didnt feel appreciated enough
  tl
    .to(".text9", { display: "block" })
    .from(
      ".text9",
      {
        duration: 3,
        width: 0,
        ease: "steps(24)",
      },
      ">"
    )
    .to(".text9", { width: 0, ease: "steps(24)", display: "none" }, ">4")
    .to(
      "#hugs2",
      {
        opacity: 1,
        delay: 1,
      },
      "hugs2"
    )
    .to(
      "#hugs2",
      {
        opacity: 0,
      },
      ">"
    ),
    // because I took so long
    tl
      .to(".text10", { display: "block" })
      .from(".text10", {
        duration: 3,
        width: 0,
        ease: "steps(14)",
      })
      .to(".text10", { width: 0, ease: "steps(14)", display: "none" }, ">2");

  tl.addLabel("love");
  // But I love you very much
  tl.to(".text11", { display: "block" })
    .from(".text11", {
      duration: 3,
      width: 0,
      ease: "steps(14)",
    })
    .to(".text11", { width: 0, ease: "steps(14)", display: "none" }, ">2");

  tl
    .to(
      "#love",
      {
        opacity: 1,
        delay: 1,
      },
      "love"
    )
    .to("#love", {
      opacity: 0,
    }),
    ">";

  // and you mean everything to me
  tl.to(".text12", { display: "block" })
    .from(".text12", {
      duration: 3,
      width: 0,
      ease: "steps(14)",
    })
    .to(".text12", { width: 0, ease: "steps(14)", display: "none" }, ">2");

  tl.addLabel("kiss");
  // You are the best girlfriend i could ever ask for
  tl.to(".text13", { display: "block" })
    .from(".text13", {
      duration: 2,
      width: 0,
      ease: "steps(24)",
    })
    .to(".text13", { width: 0, ease: "steps(24)", display: "none" }, ">4");
  tl
    .to(
      "#kiss",
      {
        opacity: 1,
      },
      "kiss"
    )
    .to("#kiss", {
      opacity: 0,
    }),
    ">";
  tl.addLabel("please");
  // So please
  tl.to(".text14", { display: "block" })
    .from(".text14", {
      duration: 3,
      width: 0,
      ease: "steps(14)",
    })
    .to(".text14", { width: 0, ease: "steps(8)", display: "none" }, ">5");
  tl
    .to(
      "#please",
      {
        opacity: 1,
      },
      "please"
    )
    .to("#please", {
      opacity: 0,
    }),
    ">";

  tl.addLabel("quest");
  // Will you be my Valentines?
  tl.to(".text15", { display: "block" })
    .from(".text15", {
      duration: 2,
      width: 0,
      ease: "steps(30)",
      margin: 0,
    })
    .to(
      ["#yes", "#no"],
      {
        display: "inline-block",
        opacity: 0,
      },
      "<"
    );
  tl.to(
    "#quest",
    {
      opacity: 1,
    },
    "quest"
  );
  tl.to(["#yes", "#no"], {
    opacity: 1,
  });
  tl.to(
    body,
    {
      duration: 32,
      background: "linear-gradient(to bottom, #f885fc, #ff3fdf)",
    },
    "changebackground"
  );
}

function answer(ans) {
  var text = document.querySelectorAll(".text15"); // Corrected the selector to use ".text15" for class selection
  var tf = document.getElementById("yes");
  var tl2 = gsap.timeline();
  if (ans) {
    text.forEach((element) => {
      tl2
        .to(element, {
          textContent: "YAHH,We are now Married!",
        }) // Fixed the forEach function to correctly handle each element
        .from(element, {
          duration: 2,
          width: 0,
          ease: "Steps(16)",
        })
        .to("#quest", { opacity: 0 })
        .to(["#yes1", "#yes2"], {
          opacity: 1,
        })
        .to(
          "#messege",
          {
            display: "block",
          },
          ">5"
        );
    });
    console.log("SHE SAID YES");
  } else {
    tf.style.width += "500px";
    tf.style.height += "500px";
    tf.style.fontSize += "10rem";
    console.log("SHE SAID NO WTF");
  }
}

window.addEventListener("load", () => {
  // Your code to execute after the page has fully loaded goes here
  console.log("Started");
  Animation();
});
