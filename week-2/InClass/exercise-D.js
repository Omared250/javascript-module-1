function moodMessage(mood) {
    if (mood === "happy") {
        return "Good job, you're doing great!";
    } else if (mood === "sad") {
        return "Every cloud has a silver lining";
    } else if (typeof mood === "number") {
        return "Beep beep boop";
    } else {
        return "I'm sorry, I'm still learning about feelings!";
    }
}

console.log(moodMessage(5));

/*
this exercise take a word depending of your mood and it is going to give you an answer
*/