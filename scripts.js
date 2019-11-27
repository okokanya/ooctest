var crossToPush = document.getElementById('crossToPush');
var blockClass = document.getElementById('blockClass');

function changeHeight () {
    blockClass.style.height === "fit-content" ?  blockClass.style.height = "0px" : blockClass.style.height="fit-content";
    blockClass.style.width === "fit-content" ?  blockClass.style.width = "0px" : blockClass.style.width="fit-content"
};

