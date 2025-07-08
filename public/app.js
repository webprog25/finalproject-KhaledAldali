class Meal {
  constructor({ description, calories, category, _id }) {
    this.description = description;
    this.calories = Number(calories);
    this.category = category;
    this.id = _id;
  }

  render(onDelete) {
    const div = document.createElement("div");
    div.textContent = `${this.description} – ${this.calories} kcal (${this.category})`;

    const button = document.createElement("button");
    button.textContent = "Löschen";
    button.classList.add("delete");
    button.style.marginLeft = "10px";

    button.addEventListener("click", async () => {
      await onDelete(this.id);
    });

    div.appendChild(button);
    return div;
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const entriesDiv = document.getElementById("entries");
  const totalCaloriesSpan = document.getElementById("total-calories");
  const form = document.getElementById("mealForm");

  async function ladeEintraege() {
    entriesDiv.innerHTML = "";
    const res = await fetch("/api/meals");
    const meals = await res.json();

    let total = 0;

    for (let i = 0; i < meals.length; i++) {
      const meal = new Meal(meals[i]);
      const element = meal.render(async (id) => {
        await fetch(`/api/meals/${id}`, { method: "DELETE" });
        await ladeEintraege();
      });

      entriesDiv.appendChild(element);
      total += meal.calories;
    }

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
