document.addEventListener("DOMContentLoaded", ()=>{
    let curenTab = 1;
    const steps = document.querySelectorAll(".progress-list li");
    const progress = document.querySelector(".progress");
    const profileBtn = document.getElementById("profileBtn");
    const profileInput = document.getElementById("profileInput");
    const profileImg = document.getElementById("profileImg");
    const formsContent = document.getElementsByClassName("form-containt");
    const root = document.documentElement;
    const previous_btn = document.getElementById("previous");;
    const next_btn = document.getElementById("next");



    function reload_progress_bar(num){
        let width = Math.floor((num-1)/(steps.length-1) *100) + "%";
        root.style.setProperty("--curent-tab", num);
        root.style.setProperty("--progress-width", width);
        
        steps.forEach((step, index) => {
            if(index == num - 1){
                step.style.backgroundColor = "red";
                step.style.border = "2px solid white";
            } else if ( index < num - 1){
                step.style.backgroundColor = "red";
                step.style.border = "0px";
            } else {
                step.style.backgroundColor = "white";
                step.style.border = "0px";
            }
        })
    };

    function checkCurentForm(num){
        for(let i = 0; i < steps.length; i++){
            if (i == num - 1){
                formsContent[i].style.display = '';
            } else {
                formsContent[i].style.display = 'none';
            }
        }
    };

    

    next_btn.addEventListener("click", (e)=>{
        e.preventDefault();
        if(curenTab >= 1 && curenTab < 8){
            curenTab++;
            reload_progress_bar(curenTab);
            checkCurentForm(curenTab);
        }
    });


    previous_btn.addEventListener("click", (e)=>{
        e.preventDefault();
        if(curenTab > 1 && curenTab <= 8){
            curenTab--;
            reload_progress_bar(curenTab);
            checkCurentForm(curenTab);
        }
    });
    

    profileBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        profileInput.click();
    })

    profileInput.addEventListener("change", ()=>{
        const file = profileInput.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event)=>{
            profileImg.src = event.target.result;
        };
        reader.readAsDataURL(file);
    })

    reload_progress_bar(curenTab);
    checkCurentForm(curenTab);

})