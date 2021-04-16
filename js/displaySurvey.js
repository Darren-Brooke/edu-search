jQuery.each(arr, function(i) { console.log(i); });

const data = [{"name": "first", "score": 50}, {"name": "second", "score": 73}, {
    "name": "third",
    "score": 26
}, {"name": "fourth", "score": 13}, {"name": "fifth", "score": 63}];
let element;
for (element in data) {

    const names = data[element].name;
    const values = data[element].score;

    const node = document.createElement("canvas");

    const att = node.setAttribute("id", names);
    const att2 = node.setAttribute("width", "800");
    const att3 = node.setAttribute("height", "25");

    document.getElementById("chart").appendChild(node);

    const drawingSpace = document.getElementById(names);
    const bar = drawingSpace.getContext("2d");
    let length = values;
    if (values > 0) {
        if (length > 100)
            length = 100;
        bar.fillStyle = "#ADD9EC";//"blue";
    }
    bar.rect(1,1,length,20);
    bar.fill();
    bar.stroke()

}