document.addEventListener("DOMContentLoaded", dropDown);
const dropdownDiv = document.querySelector(".dropdownContent");

function dropDown() {
  const dropdown = document.querySelector(".dropdown");
  const button = document.querySelector(".dropBtn");

  // Toggle dropdown on click
  button.addEventListener("click", (event) => {
    dropdownDiv.style.display =
      dropdownDiv.style.display === "block" ? "none" : "block";
    event.stopPropagation();
  });

  // Show dropdown on mouseover
  button.addEventListener("mouseover", () => showOrHide("block"));

  // Show dropdown on focus
  button.addEventListener("focus", (event) => showOrHide("block"));

  // Hide dropdown when leaving the dropdown area
  dropdown.addEventListener("mouseleave", () => showOrHide("none"));

  // Hide dropdown on focusout
  dropdown.addEventListener("focusout", () => {
    setTimeout(() => {
      if (!dropdown.contains(document.activeElement)) {
        showOrHide("none");
      }
    });
  });
}

function showOrHide(val) {
  dropdownDiv.style.display = val;
}

export default dropDown;
