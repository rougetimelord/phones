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
    ['#00FFFF', '#000'], ['#0000FF', '#fff'], ['#FF00FF', '#fff'],
    ['#008000', '#fff'], ['#00FF00', '#000'], ['#808000', '#fff'],
    ['#800080', '#fff'], ['#FF0000', '#fff'], ['#C0C0C0', '#000'],
    ['#008080', '#fff'], ['#FFFFFF', '#000'], ['#FFFF00', '#000'],
    ['#F0F8FF', '#000'], ['#FAEBD7', '#000'], ['#F5F5DC', '#000'],
    ['#F0FFFF', '#000'], ['#FFE4C4', '#000'], ['#FFEBCD', '#000'],
    ['#8A2BE2', '#fff'], ['#A52A2A', '#fff'], ['#5F9EA0', '#fff'],
    ['#7FFF00', '#000'], ['#D2691E', '#fff'], ['#FF7F50', '#fff'],
    ['#00008B', '#fff'], ['#008B8B', '#fff'], ['#E9967A', '#000'],
    ['#1E90FF', '#fff'], ['#7FFFD4', '#000'], ['#6495ED', '#fff'],
    ['#DC143C', '#fff'], ['#BDB76B', '#000'], ['#8B008B', '#fff'],
    ['#556B2F', '#fff'], ['#FF8C00', '#fff'], ['#9932CC', '#fff'],
    ['#FF1493', '#fff'], ['#00BFFF', '#fff'], ['#B22222', '#fff'],
    ['#FFFAF0', '#000'], ['#228B22', '#fff'], ['#DCDCDC', '#000'],
    ['#FFD700', '#000'], ['#DAA520', '#000'], ['#F0FFF0', '#000'],
    ['#ADFF2F', '#000'], ['#FF69B4', '#fff'], ['#CD5C5C', '#fff'],
    ['#4B0082', '#fff'], ['#FFFFF0', '#000'], ['#E6E6FA', '#000'],
    ['#FFF0F5', '#000'], ['#7CFC00', '#000'], ['#FFFACD', '#000'],
    ['#ADD8E6', '#000'], ['#F08080', '#fff'], ['#E0FFFF', '#000'],
    ['#FAFAD2', '#000'], ['#D3D3D3', '#000'], ['#90EE90', '#000'],
    ['#FFB6C1', '#000'], ['#FFE4E1', '#000'], ['#9FAFDF', '#000'],
    ['#FDF5E6', '#000'], ['#6B8E23', '#fff'], ['#FFA500', '#000'],
    ['#FF4500', '#fff'], ['#FFDAB9', '#000'], ['#DDA0DD', '#000'],
    ['#FA8072', '#fff'], ['#4169E1', '#fff'], ['#FFF5EE', '#000'],
    ['#6A5ACD', '#fff'], ['#87CEEB', '#000'], ['#D8BFD8', '#000'],
    ['#FF6347', '#fff'], ['#F5F5F5', '#000']
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
        let el = document.getElementById(boxNames[i]), color = pickColor();

        el.innerText = localNumbers[i];
        el.style.backgroundColor = color[0];
        el.style.color = color[1];
        el.style.border = `1px ${["dashed", "solid", "dotted"][Math.floor(Math.random()*3)]} ${pickColor()[0]}`; 
    }
    return
}

let clickHandler = (ev) => {
    ev.preventDefault();
    switch (output.length){
        case 3:
        case 7:
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