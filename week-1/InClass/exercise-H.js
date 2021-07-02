function plantStore(soldPlants, totalOfPlants) {
    const plantsLeft = totalOfPlants - soldPlants;
    const result = "We still need to sell " + plantsLeft + " plants."

    return result;
}

console.log(plantStore(15, 50));
