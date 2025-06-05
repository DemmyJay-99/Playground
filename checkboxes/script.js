const check = document.querySelector(".check");
const checker = document.querySelectorAll(".checker");
const body = document.querySelector("div");

check.addEventListener('change', ()=>{
    checker.forEach(item => {
        item.checked = check.checked;
    });
}
)

// if(checker.checked = true){
//     body.style.color= 'yellow';
// }


    checker.forEach(item => {
        item.addEventListener('change', ()=> {
            if (!item.checked) {
                check.checked = false;            }
        }

        )
    }

    )