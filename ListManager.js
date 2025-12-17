
const data = `[
    [
        {
            "Title": "Test",
            "Description": "It's good lol",
            "Picture": "CorporateLadder.jpg",
            "Link": "Here's a link"
        },

        {
            "Title": "Furry",
            "Description": "OwO",
            "Picture": "CorporateLadder.jpg",
            "Link": "UwU"
        },

        {
            "Title": "Fury",
            "Description": "èwé",
            "Picture": "CorporateLadder.jpg",
            "Link": "-w-"
        },

        {
            "Title": "Linux",
            "Description": "Foo",
            "Picture": "CorporateLadder.jpg",
            "Link": "Bar"
        },

        {
            "Title": "yyyyyyyyyyyyyyyyyyyy",
            "Description": "eeeeeeeeeeee eeeeeeeeeeeee",
            "Picture": "CorporateLadder.jpg",
            "Link": "ggggggggggggggg ggggggggggggggg"
        },

        {
            "Title": "Vieux Placement de Produit",
            "Description": "YO",
            "Picture": "CorporateLadder.jpg",
            "Link": "YOP!!!"
        },

        {
            "Title": "zzzzzzzzzzzzzzzz",
            "Description": "aaaaaaaaaaaaaaa aaaaaaaaaaaaaaa",
            "Picture": "CorporateLadder.jpg",
            "Link": "bbbbbbbbbbbbbbb bbbbbbbbbbbbbb"
        }
    ],
    [
        {
            "Title": "zzzzzzzzzzzzzzzz",
            "Description": "aaaaaaaaaaaaaaa aaaaaaaaaaaaaaa",
            "Picture": "CorporateLadder.jpg",
            "Link": "bbbbbbbbbbbbbbb bbbbbbbbbbbbbb"
        }
    ]
]`;
const dataParsed = JSON.parse(data);
const showList = document.getElementById("projectList");
const showAbout = document.getElementById("aboutMe")
const mainList = document.getElementById("list");
let outputString = "";
let numProject = 0;

function Unreal(){
    showList.style.display = "flex";
    showAbout.style.display = "none";
}

if (dataParsed.length > 0) {
    let exitLoop = false;
    let currentProject = dataParsed[numProject];
    let nInRow = currentProject.length
    let nOfLoops = 0;
    let i = 0;
    let y = 0;
    do {
        if (nInRow - 5 > 0) {
            y = 5;
            nInRow -= 5;
        } else {
            y = nInRow;
            exitLoop = true;
        }
        outputString = `${outputString}<tr>\n`;
        i = 0;
        for (i; i < y; i++) {
            const currentData = dataParsed[numProject][i+nOfLoops];
            outputString = `${outputString}<td>\n<div>\n<svg width="200" height="60" text-overflow="ellipsis"><text x="100" y="30" fill="white" stroke="black" font-size="20" text-anchor="middle" font-weight="bold">${currentData.Title}</text></svg>\n<img src="Pictures/${currentData.Picture}" alt="Test Link">\n</div>\n</td>\n`;
        }
        outputString = `${outputString}</tr>\n`;
        nOfLoops += 5;
    } while (!exitLoop);
    numProject++
}

//outputString = `${outputString}<pre>${dataParsed[0].Description}\n${dataParsed[0].Link}`
//outputString = `${outputString}\n${dataParsed.length}</pre><p>WAAAAAAAAAAAAAAAAAAAAAAAA</p>`

mainList.innerHTML = outputString;