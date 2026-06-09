
/*Makeshift database to quickly add more projects later
0 = Unreal
1 = Godot
2 = Doom*/
const data = `[
    [
        {
            "Title": "Test",
            "Description": "It's good lol",
            "Picture": "CorporateLadder.jpg",
            "TitlePicture": "CorporateLadder_T.png",
            "Link": "Here's a link"
        },

        {
            "Title": "Furry",
            "Description": "OwO",
            "Picture": "CorporateLadder.jpg",
            "TitlePicture": "CorporateLadder_T.png",
            "Link": "UwU"
        },

        {
            "Title": "Fury",
            "Description": "èwé",
            "Picture": "CorporateLadder.jpg",
            "TitlePicture": "CorporateLadder_T.png",
            "Link": "-w-"
        },

        {
            "Title": "Linux",
            "Description": "Foo",
            "Picture": "CorporateLadder.jpg",
            "TitlePicture": "CorporateLadder_T.png",
            "Link": "Bar"
        },

        {
            "Title": "yyyyyyyyyyyyyyyyyyyy",
            "Description": "eeeeeeeeeeee eeeeeeeeeeeee",
            "Picture": "CorporateLadder.jpg",
            "TitlePicture": "CorporateLadder_T.png",
            "Link": "ggggggggggggggg ggggggggggggggg"
        }
    ],
    [
        {
            "Title": "zzzzzzzzzzzzzzzz",
            "Description": "aaaaaaaaaaaaaaa aaaaaaaaaaaaaaa",
            "Picture": "CorporateLadder.jpg",
            "TitlePicture": "CorporateLadder_T.png",
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

//Show a specific project when its thumbnail is clicked
function ShowProject(ProjectIndex){
    if (typeof ProjectIndex == "number"){
        numProject = ProjectIndex;
        LoadProject();
        showList.style.display = "flex";
        showAbout.style.display = "none";
    }
}

//Get the selected project's information from the database by using the ID stored in numProject
function LoadProject(){
    if (dataParsed.length > 0) {
        let exitLoop = false;
        let currentProject = dataParsed[numProject];
        let nInRow = currentProject.length;
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
                const currentDataIndex = i + nOfLoops
                const currentData = dataParsed[numProject][currentDataIndex];
                //outputString = `${outputString}<td>\n<div>\n<svg width="200" height="60" text-overflow="ellipsis"><text x="100" y="30" fill="white" stroke="black" font-size="20" text-anchor="middle" font-weight="bold">${currentData.Title}</text></svg>\n<img src="Pictures/${currentData.Picture}" alt="Test Link">\n</div>\n</td>\n`;
                outputString = `${outputString}<td>\n<div>\n<img src="Pictures/${currentData.TitlePicture}" alt="Test Tittle">\n<img class="pointer" src="Pictures/${currentData.Picture}" alt="Test Link" onclick="ShowData(${currentDataIndex})">\n</div>\n</td>\n`;
            }
            outputString = `${outputString}</tr>\n`;
            nOfLoops += 5;
        } while (!exitLoop);
        mainList.innerHTML = outputString;
    }
}

function ShowData(DataIndex){
    console.log(DataIndex)
}

//outputString = `${outputString}<pre>${dataParsed[0].Description}\n${dataParsed[0].Link}`
//outputString = `${outputString}\n${dataParsed.length}</pre><p>WAAAAAAAAAAAAAAAAAAAAAAAA</p>`