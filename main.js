var mouse_event="empty";
var lastPositionOfX,lastPositionOfY;

canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");

var colors="";
var widths="";
var radiuss="";

canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e)
{
    mouse_event="mouseDown";

}

canvas.addEventListener("mouseup",mymouseup);

function mymouseup(e)
{
    mouse_event="mouseUp";
}

canvas.addEventListener("mouseleave",mymouseleave);

function mymouseleave(e)
{
    mouse_event="mouseLeave"
}

canvas.addEventListener("mousemove",mymousemove);



function mymousemove(e)
{
    currentPositionOfX=e.clientX-canvas.offsetLeft;
    currentPositionOfY=e.clientY-canvas.offsetTop;

    colors=document.getElementById("cOLOR").value;
    widths=document.getElementById("wIDTH").value;
    radiuss=document.getElementById("rADIUS").value;
    if (mouse_event=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=colors;
        ctx.lineWidth=widths;

        console.log("The last position of X and Y are:  ");
        console.log("X= "+lastPositionOfX+" ,Y=  "+lastPositionOfY);
        ctx.moveTo(lastPositionOfX,lastPositionOfY);

        console.log("Current position of X and Y are :");
        console.log("x= "+currentPositionOfX+" Y= "+currentPositionOfY);
        ctx.arc(currentPositionOfX,currentPositionOfY,radiuss,0,2*Math.PI);
        ctx.stroke();
         
    }
    lastPositionOfX=currentPositionOfX;
    lastPositionOfY=currentPositionOfY;
}

