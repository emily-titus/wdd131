const select = document.getElementById("meals");
const food_image = document.getElementById("image");
const text = document.getElementById("text");
const recipes ={
    french_toast: [
        "Mix 2 eggs, 1/4 cup milk, 2 Tbs cinnamon, and 2Tbs sugar",
        "Soak bread in mixture on both sides",
        "Add bread to frying pan on medium-low heat",
        "Flip over when it is cooked on one side",
        "Plate toast and add sliced strawberries"
    ],
    pizza: [
        "Preheat the oven to 425 degrees",
        "Spray cooking spray in a circle onto a cookie sheet",
        "Flatten dough into the circle",
        "Add tomato sauce, cheese, and toppings",
        "Bake for 15-20 minutes"
    ],
    teriyaki: [
        "Chicken:",
        "Slice chicken into strips",
        "Marinate in teriyaki sauce for 30 minutes",
        "Add a tablespoon of butter to frying pan on medium heat",
        "Add chicken",
        "Stir occasionally until sauce bubbles",
        "Turn heat to medium-high",
        "Stir until chicken is cooked to 165 degrees",
        "Rice:",
        "Add rice to a pot",
        "Rinse rice until water runs clear",
        "Drain water",
        "Add two cups of water for each cup of rice",
        "Add a teaspoon of salt and a tablespoon of butter",
        "Bring to a boil",
        "Let simmer on low heat for 15 minutes while covered or until the water is gone",
        "Let stand for 5 minutes off heat and then fluff"
    ]
}
select.addEventListener("change", () => 
    {
    const value=select.value;
    if (value=="french_toast")
    {
        text.innerHTML="";
        recipes["french_toast"].forEach((step, index) => 
            {
            const label = document.createElement("label");
            label.style.display = "block";
            const checkbox = document.createElement("input");
            checkbox.type="checkbox";
            label.append(checkbox)
            label.append(` ${step}`)
            text.appendChild(label)
            checkbox.addEventListener("click", () => 
                {
                if (checkbox.checked) 
                    {
                    label.style.textDecoration = "line-through";

                }
                else{
                    label.style.textDecoration="none";
                }
            })
        });

        

        food_image.innerHTML = "<img src=\"./french_toast.jpg\" alt=\"A plate of french toast with strawberries\">";
    }
    if (value=="pizza")
        {
            text.innerHTML="";
            recipes["pizza"].forEach((step, index) => {
                const label = document.createElement("label");
                label.style.display = "block";
                const checkbox = document.createElement("input");
                checkbox.type="checkbox";
                label.append(checkbox)
                label.append(` ${step}`)
                text.appendChild(label)
                checkbox.addEventListener("click", () => 
                    {
                    if (checkbox.checked) 
                        {
                        label.style.textDecoration = "line-through";
    
                    }
                    else{
                        label.style.textDecoration="none";
                    }
            });
        });
            

            

            food_image.innerHTML = "<img src=\"./normal_pizza.jpg\" alt=\"Two pizzas, one cheese and one pineapple\">";
        }
    if (value=="teriyaki")
        {
            text.innerHTML="";
            recipes["teriyaki"].forEach((step, index) => {
                const label = document.createElement("label");
                label.style.display = "block";
                const checkbox = document.createElement("input");
                checkbox.type="checkbox";
                label.append(checkbox)
                label.append(` ${step}`)
                text.appendChild(label)
                checkbox.addEventListener("click", () => 
                    {
                    if (checkbox.checked) 
                        {
                        label.style.textDecoration = "line-through";
    
                    }
                    else{
                        label.style.textDecoration="none";
                    }
            });
        });
    
            
    
            food_image.innerHTML = "<img src=\"./teriyai.jpg\" alt=\"Teriyaki Chicken with rice\">";
        }
    })
