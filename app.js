document.addEventListener("DOMContentLoaded", ()=>{
    let curenTab = 1;
    const steps = document.querySelectorAll(".progress-list li");
    const icons = document.querySelectorAll(".progress-list li svg");
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
    const rmLanBtn = document.getElementById("languages_containt_rm_btn");
    const lanNameInput = document.getElementsByClassName("language_name");
    const lanLevelInput = document.getElementsByClassName("language_level");
    const lanContaint = document.getElementsByClassName("languages_containt_div");
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
    const Inputs = document.getElementsByTagName("input");
    const spanOne = document.querySelector('.cart span');
    const spanTwo = document.querySelector(".email span");
    const spanThree = document.querySelector(".linkedin_account span");
    const spanFour = document.querySelector(".github_account span");
    let patterns = {
        names : /^[a-zA-Z ]{2,30}$/,
        cart_nationale : /^[A-Za-z]{1,2}[0-9]{5,6}$/,
        email : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    }


    function reload_progress_bar(num){
        let width = Math.floor((num-1)/(steps.length-1) *100) + "%";
        root.style.setProperty("--curent-tab", num);
        root.style.setProperty("--progress-width", width);
        
        steps.forEach((step, index) => {
            if(index == num - 1){
                step.style.backgroundColor = "#007BFF";
                step.style.boxShadow = "1px 1px 10px #007BFF, -1px -1px 10px #007BFF"
                icons[index].setAttribute("fill", "white");

            } else if ( index < num - 1){
                step.style.backgroundColor = "#007BFF";
                step.style.border = "0px";
                step.style.boxShadow = "none";
                icons[index].setAttribute("fill", "white");
            } else {
                step.style.backgroundColor = "#CED4DA";
                step.style.border = "0px";
                step.style.boxShadow = "none";
                icons[index].setAttribute("fill", "black");
            }
        })
    };

    function specificInputVerification(){
        
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

    function checkInputs(input, expression){
        return expression.test(input);
    }

    function checkInputsLength(num){
        
        let curentFormInputs = formsContent[num].getElementsByTagName("input");
    }

    next_btn.addEventListener("click", (e)=>{
        e.preventDefault();
        let isValid = true;
        if(curenTab == 1){
            if(checkInputs(document.getElementById("cart").value, patterns.cart_nationale)){
                spanOne.textContent = '';
                isValid = true;
            } else {
                spanOne.textContent = "Please give a valid input";
                spanOne.style.color = "red";
                isValid = false;
            }
        } else if (curenTab == 2){
            if(!checkInputs(document.getElementById("email").value, patterns.email)){
                spanTwo.textContent = "Please give a valid input";
                spanTwo.style.color = "red";
                isValid = false;
            } else {
                spanTwo.textContent = "";
                isValid = true;
            }
            if(!document.getElementById("linkedin_account").value.includes("linkedin.com/in") && !document.getElementById("linkedin_account").value.includes("https://")){
                spanThree.textContent = "Please give a valid input";
                spanThree.style.color = "red";
                isValid = false;
            } else {
                spanThree.textContent = "";
                isValid = true;
            }
            if(!document.getElementById("github_account").value.includes("https://") && !document.getElementById("github_account").value.includes("github.com")){
                spanFour.textContent = "Please give a valid input";
                spanFour.style.color = "red";
                isValid = false;
            } else {
                spanFour.textContent = "";
                isValid = true;
            }
        } 
        if(isValid==true && curenTab >= 1 && curenTab < 8){
            curenTab++;
            reload_progress_bar(curenTab);
            checkCurentForm(curenTab);
        }
        // for(let i = 1; i < Inputs.length; i++){
        //     let id = Inputs[i].getAttribute("id");
        //     let span = document.querySelector(`#${id} + span`);
        //     if(Inputs[i].value.length == 0){
        //         span.textContent = "Please give a valid input";
        //         span.style.color = "red";
        //     } else {
        //         span.textContent = ""
        //     }
        // }

        // if(curenTab >= 1 && curenTab < 8){
        //     curenTab++;
        //     reload_progress_bar(curenTab);
        //     checkCurentForm(curenTab);
        // }
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

    rmLanBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        if(lanContaint.length > 1){
            let last_lan = lanContaint.length - 1;
            lanContaint[last_lan].remove();
        }
    })

    addLangBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        let = curent_lan = lanNameInput.length - 1;
        if(lanNameInput[curent_lan].value.length > 1 && lanLevelInput[curent_lan].value.length > 1){
            lanDiv.innerHTML += `<div class="languages_containt_div">
                                <div class="languages_containt_one flex flex-col mb-[10px]">
                                <label for="language_name">Language Name:</label>
                                <input type="text" placeholder="Frensh" page="5" tp="1" id="language_name" class="bg-[white] rounded-[8px] border border-gray-300 focus:outline-none focus:border-blue-500">
                                </div>

                                <div class="languages_containt_two flex flex-col mb-[10px]">
                                <label for="language_level">Your Language Level:</label>
                                <input type="text" placeholder="B2" page="5" tp="1" id="language_level" class="bg-[white] rounded-[8px] border border-gray-300 focus:outline-none focus:border-blue-500">
                            </div>
                            </div>`;
        }
    })

    reload_progress_bar(curenTab);
    checkCurentForm(curenTab);
    ProfissioanlExperiencesPopupManage();
    hobbiesPopupManage();
    skillsPopupManage();
    certificatsPopupManage();
})