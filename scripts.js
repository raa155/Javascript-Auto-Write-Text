const text = 'Hi Im Roman!                                                    ';
const description = 'Developer.      Designer.       Creator.               ';
let index = 0;
let index2 = 0;
function writeText()
{
    document.getElementById('title').innerText = text.slice(0, index);
    index++;

}


function writeDescription()
{
    document.getElementById('description').innerText = description.slice(0, index2);
    index2++;
    if(index2 > description.length - 1)
    {
        index2 = 0;
    }
}

setInterval(writeText, 76);
setInterval(writeDescription, 100);
  

