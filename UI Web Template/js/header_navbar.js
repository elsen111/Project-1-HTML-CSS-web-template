const showHideNavbar = () => {
    let menuList = document.getElementById('main-navbar');
    let menuBtn = document.querySelector('#logo  i');
    menuList.classList.toggle('display-unvisible');
    menuList.classList.toggle('display-visible');
    menuBtn.classList.toggle('fa-xmark');
    menuBtn.classList.toggle('fa-bars');
    if (menuBtn.classList.contains("fa-xmark")) {
        document.querySelector('.fa-xmark').style.display = "block";
    }
    
    console.log(menuBtn);
}

showHideNavbar();