document.addEventListener("DOMContentLoaded", async () => {
  const entriesDiv = document.getElementById("entries");
  const totalCaloriesSpan = document.getElementById("total-calories");

  try {
    const res = await fetch("/api/meals");
    const meals = await res.json();

    let total = 0;

    meals.forEach((meal) => {
      const div = document.createElement("div");
      div.textContent = `${meal.description} – ${meal.calories} kcal (${meal.category})`;
      entriesDiv.appendChild(div);

      total += Number(meal.calories);
    });

    totalCaloriesSpan.textContent = `${total} kcal`;
  } catch (err) {
    console.error("Fehler beim Laden:", err);
  }
});
