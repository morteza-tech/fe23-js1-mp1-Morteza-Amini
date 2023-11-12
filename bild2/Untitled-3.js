const container = document.createElement("div");
container.id = "container";
container.style.cssText = "display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; place-items: center; text-align: center; margin: 20px auto;";


const colorCombinations = [
    { background: 'white', text: 'black' },
    { background: 'black', text: 'white' }
];


const createAndAppendText = (heading, text, columnIndex, background, textColor) => {
    const paragraph = document.createElement("p");
    const headingNode = document.createElement("strong");
    headingNode.textContent = heading;

    const lines = text.split(", ").map(line => document.createTextNode(line.trim()));
    paragraph.append(headingNode, ...lines.map(line => [document.createElement("br"), line]).flat());

    paragraph.className = "text-container";
    paragraph.style.cssText = `
        border: 2px solid black;
        padding: 10px;
        margin: 0;
        grid-column: ${columnIndex};
        background-color: ${background};
        color: ${textColor};
    `;

    container.appendChild(paragraph);
}
for (let index = 0; index < 3; index++) {
    const heading = `Rad ${index + 1}:`;
    
    
    const text = (index === 0)
        ? Array.from({ length: 9 }, (_, i) => i + 1).join(", ")
        : (index === 1)
            ? Array.from({ length: 9 }, (_, i) => 9 - i).join(", ")
            : ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio"].join(", ");

    
    const { background, text: textColor } = colorCombinations[index % colorCombinations.length];

    
    createAndAppendText(heading, text, (index + 1).toString(), background, textColor);
}

document.body.appendChild(container);
