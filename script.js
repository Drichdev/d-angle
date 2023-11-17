var sidebar = document.getElementById('mySadbar');
var openBtn = document.getElementById('openBtn');
var closeBtn = document.getElementById('closeBtn');

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav(){
    sidebar.classList.add("active");
}


function closeNav(){
    sidebar.classList.remove("active");
}
