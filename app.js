// opdracht 1
const programmingMark = 8;

if (programmingMark < 6) {
    console.log("Jullie hebben allemaal een onvoldoende!");
} else if (programmingMark >= 6 && programmingMark < 7) {
    console.log("Jij hebt een voldoende! Nee, jij, niet dat nijlpaard achter je.");
} else if (programmingMark >= 7 && programmingMark < 9) {
    console.log("Well, that's good - now turn to page 394.");
} else if (programmingMark >= 9 && programmingMark <= 10) { // max van 10 ingesteld om cheaten te voorkomen
    console.log("Excellent! Simply excellent!");
} else {
    console.log("You obviously cheated. Fill in a normal number, now!");
}

// opdracht 2 

switch (true) {
    case programmingMark < 6:
    console.log("Jullie hebben allemaal een onvoldoende!");
    break;
// extra white line voor betere readability
    case programmingMark >= 6 && programmingMark < 7:
    console.log("Jij hebt een voldoende! Nee, jij, niet dat nijlpaard achter je.");
    break;

    case programmingMark >= 7 && programmingMark < 9:
    console.log("Well, that's good - now turn to page 394.");
    break;

    case programmingMark >= 9 && programmingMark <= 10:
    console.log("Excellent! Simply excellent!");
    break;

    default:
    console.log("You obviously cheated. Fill in a normal number, now!");
}

// opdracht 3

let purchasedBook = false,
    job = 'teacher',
    inTrain = false;

if (purchasedBook == true && job == 'teacher' && inTrain == true) {
    console.log("Finally I can enjoy my book!");
} else if (purchasedBook == true && job == 'teacher' && inTrain == false) {
    console.log("Be right back, I'm buying a train! I want to read my book.");
} else if (purchasedBook == true && job != 'teacher' && inTrain == true) {
    console.log("Only if I was a teacher ... ");
} else if (purchasedBook == true && job != 'teacher' && inTrain == false) {
    console.log("I'm just a poor non-teacher, travelling by non-train.");
} else if (purchasedBook == false && job == 'teacher' && inTrain == true) {
    console.log("I should buy a book.");
} else if (purchasedBook == false && job == 'teacher' && inTrain == false ) {
    console.log("My millionaire's salary! My millionaire's salary! My millionaire's salary for a train! Oh, and a book.");
} else if (purchasedBook == false && job != 'teacher' && inTrain == true) {
    console.log("I shouldn't have gambled away my teacher's job and salary ... ");
} else if (purchasedBook == false && job != 'teacher' && inTrain == false) {
    console.log("I'm just a poor man, I've got no fantasy; because I'm easy come, easy go, little high, little low.");
} else {
    console.log("So I did forget an option ... ");
}
// hierboven zijn, als het goed is, alle mogelijke opties opgeschreven.