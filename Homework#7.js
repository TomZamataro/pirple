// Homework#7 from Keeping Up With The Javascripts: ES6 by Pirple.com

const realRandom = (min, max) =>
{
  return Math.floor(Math.random() * ((max + 1) - min)) + min
}

const randomRecSize = (genMin, maxWidth, maxHeight = 1, minDif = 25, indMin = false, minWidth = 0, minHeight = 0) =>
{
  let resWidth;
  let resHeight;
  if (maxHeight === "1") maxHeight = 1;
  else if (maxHeight <= 1) maxHeight = maxWidth * maxHeight;
  if (!indMin)
    {
      resWidth = realRandom((genMin + minDif), maxWidth);
      do resHeight = realRandom(genMin, maxHeight);
      while (resHeight >= resWidth || resWidth - resHeight < minDif)
      return [`${resWidth}px`, `${resHeight}px`];
    }
  else if (minWidth + minDif > maxHeight) return 0;
  else
    {
      do resWidth = realRandom(minWidth, maxWidth);
      while (resWidth < minWidth + minDif)
      do resHeight = realRandom(minHeight, maxHeight);
      while (resHeight >= resWidth || resWidth - resHeight < minDif)
      return [`${resWidth}px`, `${resHeight}px`];
    }
}

const logId = (e, id, t, c) =>
{
  setTimeout(() =>
            {
    console.log(`\n The ID of the ${t + 1}° rectangle,` +
                ` with the hex code of ${c} and the size of, is: ${id}`);
  }, 500 * t);
  return t + 1;
}

const origin = document.body;
const recCl = document.createElement("STYLE");
const title = document.createElement("H1");
const desc = document.createElement("H3");30
const recWra = document.createElement("DIV");
const conf = document.createElement("H4");
const toRead = document.createElement("DIV");
recCl.type = "text/css";
recCl.innerHTML = ".rectangle { background-color: white; width: 100px; height: 75px; }"
document.getElementsByTagName("html")[0].appendChild(recCl);
document.body.style.backgroundColor = "#663d73";
document.body.style.color = "#ff9ece";
title.innerText = "Homework#7 from Keeping Up With The Javascripts: ES6 by Pirple.com";
desc.innerText = "This is the 7th homework of the course, in wich I'm supposed to create a webpage with some rectangles, each with a diferent color, and some other stuff in the pages html.";
recWra.id = "rectangleWrapper";
recWra.style.padding = "50px 50px 0px 50px"; // top, right, bottom, left. 
conf.innerText = "Confirmation that the div \"rectangleWrapper\" has 0px of bottom padding.";
toRead.style.padding = "20px";
origin.appendChild(title);
origin.appendChild(desc);
origin.appendChild(recWra);
origin.appendChild(conf);
origin.appendChild(toRead);
const colors = ["#2CBBAC", "#AC51C0", "#5E3DF2", "#EC7AF0", "#A5F07A", "#F0C37A", "#EB0E0E", "#F7F71F", "#F5B5ED", "#11C861"];
for (let i = 0; i < colors.length; i++)
  {
    const rs = randomRecSize(50, 200, 0.75);
    const r = document.createElement("DIV");
    const t = document.createElement("P");
    r.classList.add("rectangle");
    r.style.backgroundColor = colors[i];
    r.style.width = rs[0];
    r.style.height = rs[1];
    r.id = `00${i}`;
    t.innerText = ` The hex code of the color of this rectangle,` +
      ` with the randomly selected size of ${r.style.width}` +
      ` by ${r.style.height}, is ${colors[i]}.`;
    recWra.appendChild(r);
    recWra.appendChild(t);
  }
console.log("\n Here are the rectangles IDs:")
let count = 0;
for (let c of recWra.childNodes)
  {
    if (c.tagName === "DIV")
      {
        count = logId(c.style, c.id, count, colors[count]);
      }
  }