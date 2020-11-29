document.addEventListener("pointermove", (event) => {
  document.getElementsByClassName(
    "followerClick"
  )[0].style.top = ` ${event.y}px`;
  document.getElementsByClassName(
    "followerClick"
  )[0].style.left = ` ${event.x}px`;
});

document.addEventListener("click", (event) => {
  document.getElementsByClassName("followerClick")[0].style.border =
    "black 3px solid";
  setTimeout(
    () =>
      (document.getElementsByClassName("followerClick")[0].style.border =
        "none"),
    100
  );
});
