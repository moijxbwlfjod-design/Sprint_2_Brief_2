document.addEventListener("DOMContentLoaded", ()=>{
    let curenTab = 8;
    const steps = document.querySelectorAll(".progress-list li");
    const progress = document.querySelector(".progress");
    const profileBtn = document.getElementById("profileBtn");
    const profileInput = document.getElementById("profileInput");
    const profileImg = document.getElementById("profileImg");
    const ProfissioanlExperiencesPopup = document.getElementById("Profissional_Experiences_popup");
    const ProfissionalInput = document.getElementById("Profissional_Experiences");
    const ProfissioanlExperienceBtn = document.getElementById("Profissional_Experiences_btn")
    const formsContent = document.getElementsByClassName("form-containt");
    const root = document.documentElement;
    const previous_btn = document.getElementById("previous");;
    const next_btn = document.getElementById("next");
    const addLangBtn = document.getElementById("languages_containt_add_btn");
    const lanNameInput = document.getElementsByClassName("language_name");
    const lanLevelInput = document.getElementsByClassName("language_level");
    const lanDiv = document.getElementById("languages_containt");
    const hobbiesInput = document.getElementById("hobbies");
    const hobbiesBtn = document.getElementById("hobbies_btn");
    const hobbiesDiv = document.getElementById("hobbies_popup");
    let hobbiesArr = [];
    const skillsInput = document.getElementById("skills");
    const skillsBtn = document.getElementById("skills_btn");
    const skillsDiv = document.getElementById("skills_popup");
    let skillsArr = [];
    const certificatsInput = document.getElementById("certificats");
    const certificatsBtn = document.getElementById("certificats_btn");
    const certificatsDiv = document.getElementById("certificats_popup");
    let certificatsArr = [];
    let profissionalExArr = [];



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

    function clickIcon(num){
        
    }

    function ProfissioanlExperiencesPopupManage(){
        ProfissioanlExperienceBtn.addEventListener("click", (e)=>{
            e.preventDefault();
            if (ProfissionalInput.value.length > 0){
                if(profissionalExArr.length <= 14){
                    let skill = ProfissionalInput.value;
                    ProfissioanlExperiencesPopup.innerHTML += `<li class="profile-skill-tag" data-skill="${skill}">
                    <span>${skill}</span>
                    <button class="profile-skill-remove" aria-label="Remove skill ${skill}">✕</button>
                    </li>`;
                    profissionalExArr.push(skill);
                }
            }
        })
    };

    function hobbiesPopupManage(){
        hobbiesBtn.addEventListener("click", (e)=>{
            e.preventDefault();
            if (hobbiesInput.value.length > 0){
                if(hobbiesArr.length <= 14){
                    let skill = hobbiesInput.value;
                    hobbiesDiv.innerHTML += `<li class="profile-skill-tag" data-skill="${skill}">
                    <span>${skill}</span>
                    <button class="profile-skill-remove" aria-label="Remove skill ${skill}">✕</button>
                    </li>`;
                    hobbiesArr.push(skill);
                }
            }
        })
    };

    function skillsPopupManage(){
        skillsBtn.addEventListener("click", (e)=>{
            e.preventDefault();
            if (skillsInput.value.length > 0){
                if(skillsArr.length <= 14){
                    let skill = skillsInput.value;
                    skillsDiv.innerHTML += `<li class="profile-skill-tag" data-skill="${skill}">
                    <span>${skill}</span>
                    <button class="profile-skill-remove" aria-label="Remove skill ${skill}">✕</button>
                    </li>`;
                    skillsArr.push(skill);
                }
            }
        })
    };

    function certificatsPopupManage(){
        certificatsBtn.addEventListener("click", (e)=>{
            e.preventDefault();
            if (certificatsInput.value.length > 0){
                if(certificatsArr.length <= 14){
                    let skill = certificatsInput.value;
                    certificatsDiv.innerHTML += `<li class="profile-skill-tag" data-skill="${skill}">
                    <span>${skill}</span>
                    <button class="profile-skill-remove" aria-label="Remove skill ${skill}">✕</button>
                    </li>`;
                    certificatsArr.push(skill);
                }
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
    });

    addLangBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        lanDiv.innerHTML += `<div class="languages_containt_div">
                                <div class="languages_containt_one flex flex-col mb-[10px]">
                                <label for="language_name">Language Name:</label>
                                <input type="text" placeholder="Frensh" class="language_name bg-[white] rounded-[8px]">
                                </div>

                                <div class="languages_containt_two flex flex-col mb-[10px]">
                                <label for="language_level">Your Language Level:</label>
                                <input type="text" placeholder="B2" class="language_level bg-[white] rounded-[8px]">
                            </div>
                            </div>`;
        
        
    })

    reload_progress_bar(curenTab);
    checkCurentForm(curenTab);
    ProfissioanlExperiencesPopupManage();
    hobbiesPopupManage();
    skillsPopupManage();
    certificatsPopupManage();
})