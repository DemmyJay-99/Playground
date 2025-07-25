const check = document.querySelector('.check');
const checker = document.querySelectorAll('.checker');


check.addEventListener('change', ()=>{
    if (check.checked){
    for (const element of checker) {
        element.checked = true;
    }
    } else{
        for (const element of checker) {
        element.checked = false;
    }
    }
}
)

for (const element of checker) {
    element.addEventListener('change', ()=>{
        check.checked = false;
    }

    )
}


