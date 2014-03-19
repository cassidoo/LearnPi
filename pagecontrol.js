var cursor = 0;

function inputMethod(iMethod)
{
	if(iMethod === "type")
	{
		//display type stuff
	}
	else if(iMethod === "draw")
	{
		//display draw stuff
	}
	else
	{
		alert("what the heck is happening");
	}
}

function reset()
{
    cursor = 0;
    document.getElementById("resultat").value = "";
}

document.onkeydown = function(event)
{
    if((event.keyCode > 47) && (event.keyCode < 58))
    {
        var num = event.keyCode - 48;
        numinput(num.toString());
    }
    else
        console.log("Someone didn't type a number. Idiot.");
};

function numinput(num)
{
    document.getElementById("resultat").value = document.getElementById("resultat").value + num;
    if(document.getElementById("resultat").value.length > 7)
    {
        document.getElementById("resultat").value = document.getElementById("resultat").value.substring(1);   
    }
    if(num < 0)
    {
        alert("what the heck is happening");
    }
    
    if(num === pi.substring(cursor, cursor+1))
    {
        cursor++;
    }
    else
    {
        alert("Dang. The next part is actually " + pi.substring(cursor, cursor+9) + ". Start over!");
        reset();
    }
}

// going to use https://github.com/antimatter15/ocrad.js for OCR stuff
