const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// for loop to print out each item of ingredients
for (let j = 0; j < ingredients.length; j++) {
  console.log(ingredients[j]);
}

// for loop to print out each item of ingredients backwards
for (let k = ingredients.length - 1; k >= 0; k--) {
  console.log(ingredients[k]);
}
