const boxNames = [
    "box1", "box2", "box3",
    "box4", "box5", "box6",
    "box7", "box8", "box9",
    "box10"
]

const numbers = [
    "0", "1", "2",
    "3", "4", "5",
    "6", "7", "8",
    "9"]

const cssColors = [
    "aqua", "blue", "fuchsia", "green", "lime",
    "olive", "purple", "red", "silver", "teal",
    "white", "yellow", "aliceblue", "antiquewhite",
    "beige", "azure", "bisque", "blanchedalmond",
    "blueviolet", "brown", "cadetblue", "chartreuse",
    "coral", "aquamarine", "cornflowerblue", "crimson",
    "cyan", "darkkhaki", "darkmagenta", "darkorange",
    "darkorchid", "deeppink", "deepskyblue", "firebrick",
    "floralwhite", "forestgreen", "gainsboro", "gold",
    "honeydew", "greenyellow", "hotpink", "ivory", "lavendar",
    "lawngreen", "lightpink", "magenta", "mistyrose",
    "navyblue", "oldlace", "olivedrab", "orange",
    "orangered", "plum", "rosybrown", "salmon",
    "seashell", "steelblue", "thistle", "tomato",
    "whitesmoke"
]

let output = ""

let shuffle = a => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

let pickColor = () => {
    return cssColors[Math.floor(Math.random()*cssColors.length)];
}

let generateBoxes = () => {
    //Shuffle array
    let localNumbers = shuffle(numbers)
    //Fill boxes
    for(let i = 0; i < boxNames.length; i++) {
        let el = document.getElementById(boxNames[i]);

        el.innerText = localNumbers[i];
        el.style.backgroundColor = pickColor();
    }
    return
}

let clickHandler = (ev) => {
    ev.preventDefault();
    switch (output.length){
        case 3:
        case 6:
            output += "-"+ev.target.innerText;
            break;
        case 12:
            output = "";
        default:
            output += ev.target.innerText;
    }
    document.getElementById("out").innerText = output;
    generateBoxes();
}

boxNames.forEach(box => {
    document.getElementById(box).addEventListener("click", clickHandler);
})
generateBoxes();