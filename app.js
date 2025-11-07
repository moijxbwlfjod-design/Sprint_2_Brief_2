document.addEventListener("DOMContentLoaded", ()=>{
    let curenTab = 1;
    const steps = document.querySelectorAll(".progress-list li");
    const progress = document.querySelector(".progress");
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
    }

    reload_progress_bar(curenTab);

    next_btn.addEventListener("click", (e)=>{
        e.preventDefault();
        if(curenTab >= 1 && curenTab < 8){
            curenTab++;
            reload_progress_bar(curenTab);
        }
    })

    previous_btn.addEventListener("click", (e)=>{
        e.preventDefault();
        if(curenTab > 1 && curenTab <= 8){
            curenTab--;
            reload_progress_bar(curenTab);
        }
    })
    
    const form = document.querySelector("form");

})