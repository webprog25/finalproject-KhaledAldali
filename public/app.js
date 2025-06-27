document.addEventListener("DOMContentLoaded", async () => {
  const entriesDiv = document.getElementById("entries");
  const totalCaloriesSpan = document.getElementById("total-calories");
  const form = document.getElementById("mealForm");

  async function ladeEintraege() {
    entriesDiv.innerHTML = "";
    const res = await fetch("/api/meals");
    const meals = await res.json();

    let total = 0;

    meals.forEach((meal) => {
      const div = document.createElement("div");
      div.textContent = `${meal.description} – ${meal.calories} kcal (${meal.category})`;

      const button = document.createElement("button");
      button.textContent = "Löschen";
      button.classList.add("delete");
      button.style.marginLeft = "10px";

      button.addEventListener("click", async () => {
        await fetch(`/api/meals/${meal._id}`, { method: "DELETE" });
        await ladeEintraege();
      });

      div.appendChild(button);
      entriesDiv.appendChild(div);

      total += Number(meal.calories);
    });

    totalCaloriesSpan.textContent = `${total} kcal`;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const description = document.getElementById("description").value;
    const calories = document.getElementById("calories").value;
    const category = document.getElementById("category").value;

    const meal = { description, calories, category };

    const res = await fetch("/api/meals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(meal),
    });

    if (res.ok) {
      form.reset();
      await ladeEintraege();
    }
  });

  ladeEintraege();
});
