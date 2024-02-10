function Animation() {
  const tl = gsap.timeline({ defaults: { duration: 1 } });
  var skip = document.getElementById("skip");

  skip.addEventListener("click", () => {
    tl.progress(1);
    console.log("skipped");
  });
  // Hey Baby
  tl.to(".text", {
    display: "block",
    textContent: "Hey Baby",
  })
    .from(".text", {
      width: 0,
      ease: "steps(16)",
    })
    .to(
      ".text",
      {
        width: 0,
        ease: "steps(16)",
      },
      ">2"
    )
    .set(".img", { attr: { src: "./Assets/please.gif" } })
    .addLabel("playgif")
    .to(".text", {
      textContent: "I know you have been waiting on me",
    })
    .to(".text", {
      duration: 2,
      width: "auto", // Reset width to original size
      ease: "steps(24)",
    })
    .to(
      ".text",
      {
        width: 0,
        ease: "steps(24)",
      },
      ">2"
    )
    .set(".img", { attr: { src: "./Assets/Hugs.gif" } })
    .addLabel("playgif")
    .to(".text", {
      textContent: "And I'm sorry I took so long",
    })
    .to(".text", {
      duration: 2,
      width: "auto", // Reset width to original size
      ease: "steps(24)",
    })
    .to(
      ".text",
      {
        width: 0,
        ease: "steps(16)",
      },
      ">2"
    )
    .addLabel("changebackground")
    .to(".text", {
      textContent: "But before I ask I wanted to let you know",
    })
    .to(".text", {
      duration: 2,
      width: "auto", // Reset width to original size
      ease: "steps(24)",
    })
    .to(
      ".text",
      {
        width: 0,
        ease: "steps(16)",
      },
      ">2"
    )

    .set(".img", { attr: { src: "./Assets/Hugs3.gif" } })
    .addLabel("playgif")
    .to(".text", {
      textContent: "you are one of the best things",
    })
    .to(".text", {
      duration: 2,
      width: "auto", // Reset width to original size
      ease: "steps(24)",
    })
    .to(
      ".text",
      {
        width: 0,
        ease: "steps(16)",
      },
      ">2"
    )
    .to(".text", {
      textContent: "That has ever happened to me",
    })
    .to(".text", {
      duration: 2,
      width: "auto", // Reset width to original size
      ease: "steps(24)",
    })
    .to(
      ".text",
      {
        width: 0,
        ease: "steps(16)",
      },
      ">2"
    )
    .set(".img", { attr: { src: "./Assets/Hugs again.gif" } })
    .addLabel("playgif")
    .to(".text", {
      textContent: "and I am sorry",
    })
    .to(".text", {
      duration: 2,
      width: "auto", // Reset width to original size
      ease: "steps(24)",
    })
    .to(
      ".text",
      {
        width: 0,
        ease: "steps(16)",
      },
      ">2"
    )
    .to(".text", {
      textContent: "if you didnt feel appreciated enough",
    })
    .to(".text", {
      duration: 2,
      width: "auto", // Reset width to original size
      ease: "steps(24)",
    })
    .to(
      ".text",
      {
        width: 0,
        ease: "steps(16)",
      },
      ">2"
    )
    .to(".text", {
      textContent: "because I took so long",
    })
    .to(".text", {
      duration: 2,
      width: "auto", // Reset width to original size
      ease: "steps(24)",
    })
    .to(
      ".text",
      {
        width: 0,
        ease: "steps(16)",
      },
      ">2"
    )
    .set(".img", { attr: { src: "./Assets/I love you.gif" } })
    .addLabel("playgif")

    .to(".text", {
      textContent: "But I love you so much ♥",
    })
    .to(".text", {
      duration: 2,
      width: "auto", // Reset width to original size
      ease: "steps(24)",
    })
    .to(
      ".text",
      {
        width: 0,
        ease: "steps(16)",
      },
      ">2"
    )
    .to(".text", {
      textContent: "and you mean everything to me",
    })
    .to(".text", {
      duration: 2,
      width: "auto", // Reset width to original size
      ease: "steps(24)",
    })
    .to(
      ".text",
      {
        width: 0,
        ease: "steps(16)",
      },
      ">2"
    )
    .set(".img", { attr: { src: "./Assets/milk-and-mocha kiss.gif" } })
    .addLabel("playgif")
    .to(".text", {
      textContent: "You are the best girlfriend I could ever ask for",
    })
    .to(".text", {
      duration: 2,
      width: "auto", // Reset width to original size
      ease: "steps(24)",
    })
    .to(
      ".text",
      {
        width: 0,
        ease: "steps(16)",
      },
      ">2"
    )
    .set(".img", { attr: { src: "./Assets/please.gif" } })
    .addLabel("playgif")
    .to(".text", {
      textContent: "So please dont ever change",
    })
    .to(".text", {
      duration: 2,
      width: "auto", // Reset width to original size
      ease: "steps(24)",
    })
    .to(
      ".text",
      {
        width: 0,
        ease: "steps(16)",
      },
      ">2"
    )
    .set(".img", { attr: { src: "./Assets/The questions.gif" } })
    .to(".text", {
      display: "block",
      textContent: "Will you be my Valentines?",
    })
    .to(".text", {
      duration: 2,
      width: "auto", // Reset width to original size
      ease: "steps(30)",
    })
    .to(
      ".buttons",
      {
        display: "flex",
      },
      "<"
    )
    .to(".buttons", {
      opacity: 1,
    })
    .to(".img", {
      display: "block",
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

  //gif
  tl.to(
    ".img",
    {
      opacity: 1, // Show the image by changing opacity
    },
    "playgif"
  ).to(
    ".img",
    {
      opacity: 0, // Hide the image by changing opacity
    },
    ">2"
  );
}

function answer(ans) {
  var tf = document.getElementById("yes");
  var tl = gsap.timeline();

  if (ans) {
    tl.to(".buttons", { display: "none" })
      .to(".text", {
        width: 0,
        ease: "steps(28)",
      })
      .to(".text", {
        textContent: "YAHH, We are now Married!",
      })
      .to(".text", {
        duration: 2,
        width: "auto", // Reset width to original size
        ease: "steps(24)",
      })
      .to(
        ".text",
        {
          width: 0,
          ease: "steps(28)",
        },
        ">1"
      )
      .to(".text", {
        textContent: "I have a gift for you my baby",
      })
      .to(".text", {
        duration: 2,
        width: "auto", // Reset width to original size
        ease: "steps(24)",
      })
      .to(".gift-button", { display: "block", opacity: 1 });

    tl.to("#messege", {
      display: "block",
    });
    console.log("SHE SAID YES");
  } else {
    tl.to(".text", {
      width: 0,
      ease: "steps(28)",
    })
      .to(".text", {
        textContent: "I'll beat you tf up",
        color: "red",
      })
      .to(".text", {
        duration: 2,
        width: "auto", // Reset width to original size
        ease: "steps(24)",
      })
      .to("#yes", { width: "350px", height: "350px", fontSize: "5rem" });
    console.log("SHE SAID NO WTF");
  }
}

function opengift() {
  var tl = gsap.timeline({ defaults: { duration: 1 } });

  tl.to([".text-container", ".gift-button", "#skip"], { display: "none" }).to(
    ".gift-container",
    {
      opacity: 1,
      display: "flex",
      ease: "bounce.in",
    }
  );
}

window.addEventListener("load", () => {
  // Your code to execute after the page has fully loaded goes here
  console.log("Started");
  Animation();
});
