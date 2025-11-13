// document.addEventListener("DOMContentLoaded", ()=>{
//     let curenTab = 1;
//     const steps = document.querySelectorAll(".progress-list li");
//     const icons = document.querySelectorAll(".progress-list li svg");
//     const progress = document.querySelector(".progress");
//     const profileBtn = document.getElementById("profileBtn");
//     const profileInput = document.getElementById("profileInput");
//     const profileImg = document.getElementById("profileImg");
//     const ProfissioanlExperiencesPopup = document.getElementById("Profissional_Experiences_popup");
//     const ProfissionalInput = document.getElementById("Profissional_Experiences");
//     const ProfissioanlExperienceBtn = document.getElementById("Profissional_Experiences_btn")
//     const formsContent = document.getElementsByClassName("form-containt");
//     formsContent[0] = document.getElementsByClassName("infos");
//     const root = document.documentElement;
//     const previous_btn = document.getElementById("previous");;
//     const next_btn = document.getElementById("next");
//     const addLangBtn = document.getElementById("languages_containt_add_btn");
//     let how_much_empty_input = 0;
//     const rmLanBtn = document.getElementById("languages_containt_rm_btn");
//     const lanNameInput = document.getElementById("language_name");
//     const lanLevelInput = document.getElementById("language_level");
//     const lanContaint = document.getElementsByClassName("languages_containt_div");
//     const lanDiv = document.getElementById("languages_containt");
//     const hobbiesInput = document.getElementById("hobbies");
//     const hobbiesBtn = document.getElementById("hobbies_btn");
//     const hobbiesDiv = document.getElementById("hobbies_popup");
//     const normalInputs = document.querySelectorAll("input[tp='1']");
//     let hobbiesArr = [];
//     const skillsInput = document.getElementById("skills");
//     const skillsBtn = document.getElementById("skills_btn");
//     const skillsDiv = document.getElementById("skills_popup");
//     let skillsArr = [];
//     const certificatsInput = document.getElementById("certificats");
//     const certificatsBtn = document.getElementById("certificats_btn");
//     const certificatsDiv = document.getElementById("certificats_popup");
//     let certificatsArr = [];
//     let profissionalExArr = [];
//     const Inputs = document.getElementsByTagName("input");
//     const spanOne = document.querySelector('.cart span');
//     const spanTwo = document.querySelector(".email span");
//     const spanThree = document.querySelector(".linkedin_account span");
//     const spanFour = document.querySelector(".github_account span");
//     formsContent[1].querySelectorAll('input')[5].setAttribute("id", "ed");
//     formsContent[3].querySelectorAll('input')[2].setAttribute("id", "ed");
//     let patterns = {
//         names : /^[a-zA-Z ]{2,30}$/,
//         cart_nationale : /^[A-Za-z]{1,2}[0-9]{5,6}$/,
//         email : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//     }

//     let userData = {};


//     function reload_progress_bar(num){
//         let width = Math.floor((num-1)/(steps.length-1) *100) + "%";
//         root.style.setProperty("--curent-tab", num);
//         root.style.setProperty("--progress-width", width);
        
//         steps.forEach((step, index) => {
//             if(index == num - 1){
//                 step.style.backgroundColor = "#007BFF";
//                 step.style.boxShadow = "1px 1px 10px #007BFF, -1px -1px 10px #007BFF"
//                 icons[index].setAttribute("fill", "white");

//             } else if ( index < num - 1){
//                 step.style.backgroundColor = "#007BFF";
//                 step.style.border = "0px";
//                 step.style.boxShadow = "none";
//                 icons[index].setAttribute("fill", "white");
//             } else {
//                 step.style.backgroundColor = "#CED4DA";
//                 step.style.border = "0px";
//                 step.style.boxShadow = "none";
//                 icons[index].setAttribute("fill", "black");
//             }
//         })
//     };

//     function specificInputVerification(){
        
//     }

//     function ProfissioanlExperiencesPopupManage(){
//         ProfissioanlExperienceBtn.addEventListener("click", (e)=>{
//             console.log("Im heeeereee");
//             let canIClose = false;
//             e.preventDefault();
//             if (ProfissionalInput.value.length > 0){
//                 const body = document.getElementById("main");
//                 let experience = ProfissionalInput.value;
//                 body.innerHTML += `
//                 <div class="popup_background" id="popup_background">
//                     <div class="popup" id="popup">
//                         <div class="popup_containt flex justify-between items-start p-[0.2rem] w-[400px]">
//                             <div class="start_time flex flex-col items-start gap-[10px]">
//                             <label for="experience_start_date">Started at:</label>
//                             <input type="date" id="experience_start_date" class="border border-gray-300 focus:outline-none focus:border-blue-500 rounded-[8px]">
//                             </div>
//                             <h2>${experience}</h2>
//                             <div class="end_time flex flex-col items-start gap-[10px]">
//                             <label for="experience_start_date">Finished at:</label>
//                             <div class="end_time_checkbox flex items-center gap-[3px]">
//                                 <label for="">In Progress:</label>
//                                 <input type="checkbox" id="experience_inProgress" class="h-[30px]">
//                             </div>
//                             <input type="date" id="experience_finished" class="border border-gray-300 focus:outline-none focus:border-blue-500 rounded-[8px]">
//                         </div>
//                         </div>
//                         <div class=" flex justify-start gap-[10px] ml-[20px] mt-[10px]">
//                             <button id="popup_save_btn" class="bg-[#007BFF] text-[white] pr-[0.5rem] pl-[0.5rem] rounded-[8px]">Save</button>
//                             <button id="popup_close_btn" class="bg-[#DC3545] text-[white] pr-[0.5rem] pl-[0.5rem] rounded-[8px]">Close</button>
//                         </div>
//                     </div>
//                 </div>
//                 `;
//                 const popupInputs = document.getElementById("popup").getElementsByTagName("input");
//                 const finishedInput = document.getElementById("experience_finished");
//                 const inProgressCheckbox = document.getElementById("experience_inProgress");
//                 finishedInput.addEventListener("input", ()=>{
//                     if(finishedInput.value){
//                         inProgressCheckbox.disabled = true;
//                     } else{
//                         inProgressCheckbox.disabled = false;
//                     }
//                 })
//                 inProgressCheckbox.addEventListener("change", ()=>{
//                     if(inProgressCheckbox.checked){
//                         finishedInput.disabled = true;
//                     } else {
//                         finishedInput.disabled = false;
//                     }
//                 })
//                 const closeExperiencePopup = document.getElementById("popup_close_btn");
//                 const saveExperiencePopup = document.getElementById("popup_save_btn");
//                 saveExperiencePopup.addEventListener("click", ()=>{
//                     for (let i = 0; i < popupInputs.length; i++){
//                             if(popupInputs[i].disabled == false && popupInputs[i].value.length > 0){
//                                 let value_name_popup = popupInputs[i].getAttribute("id");
//                                 userData[value_name_popup] = popupInputs[i].value;
//                                 canIClose = true;
//                         }
//                     }
//                     if(canIClose){
//                         document.getElementById("popup_background").remove();
//                         document.getElementById("Profissional_Experiences").value = experience;
//                         document.getElementById("Profissional_Experiences_popup").innerHTML += `<li class="profile-skill-tag" data-skill="${experience}">
//                         <span>${experience}</span>
//                         <button class="profile-skill-remove" aria-label="Remove skill ${experience}">✕</button>
//                             </li>`;
//                         console.log(userData);
//                     }
//                 })
//                 closeExperiencePopup.addEventListener("click", (ev)=>{
//                         ev.preventDefault();
//                         document.getElementById("popup_background").remove();
                        
//                     })
                       
//             }
            
//         })
//     };

//     function hobbiesPopupManage(){
//         hobbiesBtn.addEventListener("click", (e)=>{
//             e.preventDefault();
//             if (hobbiesInput.value.length > 0){
//                 if(hobbiesArr.length <= 14){
//                     let skill = hobbiesInput.value;
//                     hobbiesDiv.innerHTML += `<li class="profile-skill-tag" data-skill="${skill}">
//                     <span>${skill}</span>
//                     <button class="profile-skill-remove" aria-label="Remove skill ${skill}">✕</button>
//                     </li>`;
//                     hobbiesArr.push(skill);
//                 }
//             }
//         })
//     };

//     function skillsPopupManage(){
//         skillsBtn.addEventListener("click", (e)=>{
//             e.preventDefault();
//             if (skillsInput.value.length > 0){
//                 if(skillsArr.length <= 14){
//                     let skill = skillsInput.value;
//                     skillsDiv.innerHTML += `<li class="profile-skill-tag" data-skill="${skill}">
//                     <span>${skill}</span>
//                     <button class="profile-skill-remove" aria-label="Remove skill ${skill}">✕</button>
//                     </li>`;
//                     skillsArr.push(skill);
//                 }
//             }
//         })
//     };

//     function certificatsPopupManage(){
//         certificatsBtn.addEventListener("click", (e)=>{
//             e.preventDefault();
//             if (certificatsInput.value.length > 0){
//                 if(certificatsArr.length <= 14){
//                     let skill = certificatsInput.value;
//                     certificatsDiv.innerHTML += `<li class="profile-skill-tag" data-skill="${skill}">
//                     <span>${skill}</span>
//                     <button class="profile-skill-remove" aria-label="Remove skill ${skill}">✕</button>
//                     </li>`;
//                     certificatsArr.push(skill);
//                 }
//             }
//         })
//     };

//     function checkCurentForm(num){
//         for(let i = 0; i < steps.length; i++){
//             if (i == num - 1){
//                 formsContent[i].style.display = '';
//             } else {
//                 formsContent[i].style.display = 'none';
//             }
//         }
//     };

//     function checkInputs(input, expression){
//         return expression.test(input);
//     }

//     function checkInputsLength(num){
        
//         let curentFormInputs = formsContent[num].getElementsByTagName("input");
//     }

//     next_btn.addEventListener("click", (e)=>{
//         e.preventDefault();
//         how_much_empty_input = 0;
//         let isValid = true;
//         if(curenTab == 8){
//             console.log(userData)
//         }
//         if(curenTab == 1){
//             if(checkInputs(document.getElementById("cart").value, patterns.cart_nationale)){
//                 spanOne.textContent = '';
//                 isValid = true;
//             } else {
//                 spanOne.textContent = "Please give a valid input";
//                 spanOne.style.color = "red";
//                 isValid = false;
//             }
//         } else if (curenTab == 2){
//             if(!checkInputs(document.getElementById("email").value, patterns.email)){
//                 spanTwo.textContent = "Please give a valid input";
//                 spanTwo.style.color = "red";
//                 isValid = false;
//             } else {
//                 spanTwo.textContent = "";
//                 isValid = true;
//             }
//             if(!document.getElementById("linkedin_account").value.includes("linkedin.com/in") && !document.getElementById("linkedin_account").value.includes("https://")){
//                 spanThree.textContent = "Please give a valid input";
//                 spanThree.style.color = "red";
//                 isValid = false;
//             } else {
//                 spanThree.textContent = "";
//                 isValid = true;
//             }
//             if(!document.getElementById("github_account").value.includes("https://") && !document.getElementById("github_account").value.includes("github.com")){
//                 spanFour.textContent = "Please give a valid input";
//                 spanFour.style.color = "red";
//                 isValid = false;
//             } else {
//                 spanFour.textContent = "";
//                 isValid = true;
//             }
//         } 
//             console.log("in the elssse")
//             let form_inputs = formsContent[curenTab - 1].getElementsByTagName("input");
//             for(let j = 0; j < form_inputs.length; j++){
//                 if(form_inputs[j].value.length == 0 && form_inputs[j].getAttribute("id") != "ed"){
//                     console.log(form_inputs[j].value);
//                     how_much_empty_input++;
//                 }
    
//             if(isValid==true && how_much_empty_input == 0 && curenTab >= 1 && curenTab < 8){
//                 for(let j = 0; j < form_inputs.length; j++){
//                     if(form_inputs[j].getAttribute("id") != "ed"){
//                         let value_name = form_inputs[j].getAttribute("id");
//                         userData[value_name] = form_inputs[j].value;
//                     }
//                 }
//                 curenTab++;
//                 reload_progress_bar(curenTab);
//                 checkCurentForm(curenTab);
//         }
//         } 
        
        
//         // for(let i = 1; i < Inputs.length; i++){
//         //     let id = Inputs[i].getAttribute("id");
//         //     let span = document.querySelector(`#${id} + span`);
//         //     if(Inputs[i].value.length == 0){
//         //         span.textContent = "Please give a valid input";
//         //         span.style.color = "red";
//         //     } else {
//         //         span.textContent = ""
//         //     }
//         // }

//         // if(curenTab >= 1 && curenTab < 8){
//         //     curenTab++;
//         //     reload_progress_bar(curenTab);
//         //     checkCurentForm(curenTab);
//         // }
//     });


//     previous_btn.addEventListener("click", (e)=>{
//         e.preventDefault();
//         if(curenTab > 1 && curenTab <= 8){
//             curenTab--;
//             reload_progress_bar(curenTab);
//             checkCurentForm(curenTab);
//         }
//     });
    

//     profileBtn.addEventListener("click", (e)=>{
//         e.preventDefault();
//         profileInput.click();
//     })

//     profileInput.addEventListener("change", ()=>{
//         const file = profileInput.files[0];
//         if (!file) return;
//         const reader = new FileReader();
//         reader.onload = (event)=>{
//             profileImg.src = event.target.result;
//         };
//         reader.readAsDataURL(file);
//     });

//     rmLanBtn.addEventListener("click", (e)=>{
//         e.preventDefault();
//         if(lanContaint.length > 1){
//             let last_lan = lanContaint.length - 1;
//             lanContaint[last_lan].remove();
//         }
//     })

//     addLangBtn.addEventListener("click", (e)=>{
//         e.preventDefault();
//         // let curent_lan = lanDiv.length - 1;
        
//         if(lanNameInput.value.length > 1 && lanLevelInput.value.length > 1){
//             lanDiv.innerHTML += `<div class="languages_containt_div">
//                                 <div class="languages_containt_one flex flex-col mb-[10px]">
//                                 <label for="language_name">Language Name:</label>
//                                 <input type="text" placeholder="Frensh" page="5" tp="1" id="language_name" class="bg-[white] rounded-[8px] border border-gray-300 focus:outline-none focus:border-blue-500">
//                                 </div>

//                                 <div class="languages_containt_two flex flex-col mb-[10px]">
//                                 <label for="language_level">Your Language Level:</label>
//                                 <input type="text" placeholder="B2" page="5" tp="1" id="language_level" class="bg-[white] rounded-[8px] border border-gray-300 focus:outline-none focus:border-blue-500">
//                             </div>
//                             </div>`;
//         }
//     })

//     reload_progress_bar(curenTab);
//     checkCurentForm(curenTab);
//     ProfissioanlExperiencesPopupManage();
//     hobbiesPopupManage();
//     skillsPopupManage();
//     certificatsPopupManage();
// })
















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
    formsContent[1].getElementsByTagName("input")[5].setAttribute("id", "ed")
    formsContent[3].getElementsByTagName("input")[2].setAttribute("id", "ed")
    const formsSpans = document.getElementById("error_span");
    const root = document.documentElement;
    const previous_btn = document.getElementById("previous");;
    const next_btn = document.getElementById("next");
    const addLangBtn = document.getElementById("languages_containt_add_btn");
    const rmLanBtn = document.getElementById("languages_containt_rm_btn");
    const lanNameInput = document.querySelectorAll("#language_name");
    const lanLevelInput = document.querySelectorAll("#language_level");
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

    let userData = {}
    userData[ProfissionalInput.getAttribute("id")] = []
    userData[skillsInput.getAttribute("id")] = []
    userData[hobbiesInput.getAttribute("id")] = []
    userData[certificatsInput.getAttribute("id")] = []


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
                    userData[ProfissionalInput.getAttribute("id")].push(skill);
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
                    userData[hobbiesInput.getAttribute("id")].push(skill);
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
                    userData[skillsInput.getAttribute("id")].push(skill);
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
                    userData[certificatsInput.getAttribute("id")].push(skill);
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
        let how_much_empty_input = 0;
        let curenTab_index = curenTab - 1;
        let curent_form_inputs = formsContent[curenTab_index].getElementsByTagName("input");
        for (let i = 0; i < curent_form_inputs.length; i++){
                if (curent_form_inputs[i].value.length == 0 && curent_form_inputs[i].getAttribute("id") != "ed" && curent_form_inputs[i].getAttribute("class") != "hidden"){
                        how_much_empty_input++;
                        curent_form_inputs[i].style.border = "1px solid #DC3545";
                        formsSpans.textContent = "Please give valid data.";
                        formsSpans.style.color = "#DC3545";
                    } else {
                        curent_form_inputs[i].style.border = '';
                    }
            }
        // if(curenTab == 3){
        //         if(curent_form_inputs[0].value.length > 0 && userData[ProfissionalInput.getAttribute("id")].length > 0){
        //             formsSpans.textContent = '';
        //             curenTab++;
        //             reload_progress_bar(curenTab);
        //             checkCurentForm(curenTab);
        //         } else if (curent_form_inputs[i].value.length > 0 && userData[ProfissionalInput.getAttribute("id")].length == 0){
        //             formsSpans.textContent = 'Please click tha add button';
        //             curent_form_inputs[i].style.border = "1px solid #DC3545";
        //             formsSpans.style.color = "#DC3545";
        //         }
        //     } else {
                
        if(curenTab = 8){
            for ([key, value] of Object.entries(userData)){
                localStorage.setItem(key, value);
            }
        }
        // if(curenTab == 1){
        //     if(checkInputs(document.getElementById("cart").value, patterns.cart_nationale)){
        //         spanOne.textContent = '';
        //         isValid = true;
        //     } else {
        //         spanOne.textContent = "Please give a valid input";
        //         spanOne.style.color = "red";
        //         isValid = false;
        //     }
        // } else if (curenTab == 2){
        //     if(!checkInputs(document.getElementById("email").value, patterns.email)){
        //         spanTwo.textContent = "Please give a valid input";
        //         spanTwo.style.color = "red";
        //         isValid = false;
        //     } else {
        //         spanTwo.textContent = "";
        //         isValid = true;
        //     }
        //     if(!document.getElementById("linkedin_account").value.includes("linkedin.com/in") && !document.getElementById("linkedin_account").value.includes("https://")){
        //         spanThree.textContent = "Please give a valid input";
        //         spanThree.style.color = "red";
        //         isValid = false;
        //     } else {
        //         spanThree.textContent = "";
        //         isValid = true;
        //     }
        //     if(!document.getElementById("github_account").value.includes("https://") && !document.getElementById("github_account").value.includes("github.com")){
        //         spanFour.textContent = "Please give a valid input";
        //         spanFour.style.color = "red";
        //         isValid = false;
        //     } else {
        //         spanFour.textContent = "";
        //         isValid = true;
        //     }
        // } 
        if(how_much_empty_input == 0 && curenTab >= 1 && curenTab < 8){
            for (let i = 0; i < curent_form_inputs.length; i++){
                userData[curent_form_inputs[i].getAttribute("id")] = curent_form_inputs[i].value;
            }
            formsSpans.textContent = '';
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