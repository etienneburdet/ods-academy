const removeBoxClasses=element=>{const classes=Array.from(element.classList);classes.forEach(boxClass=>{if(boxClass.match(/^course-box.*/)){element.classList.remove(boxClass)}})};const addIconToBox=(box,icon)=>{console.log(box);const boxContent=box.cloneNode();console.log(boxContent);removeBoxClasses(boxContent);box.appendChild(boxContent);const iconTemplate=`<i class="fa fa-${icon} box-icon" aria-hidden="true"></i>`;box.insertAdjacentHTML("afterbegin",iconTemplate);box.classList.add("d-flex","align-top")};const boxInfo=Array.from(document.querySelectorAll(".course-box-info"));if(boxInfo){boxInfo.forEach(box=>addIconToBox(box,"external-link"))}const boxWarning=Array.from(document.querySelectorAll(".course-box-warning"));if(boxWarning){boxWarning.forEach(box=>addIconToBox(box,"exclamation-triangle"))}const boxSuccess=Array.from(document.querySelectorAll(".course-box-success"));if(boxSuccess){boxSuccess.forEach(box=>addIconToBox(box,"lightbulb-o"))}Array.from(document.querySelectorAll("section")).forEach(section=>section.classList.add("active"));const summary=document.querySelector(".sj-summary");if(summary){summary.insertAdjacentHTML("beforebegin",'<img src="https://etienneburdet.com/ods-academy/empty-datasets_yellow.svg" class="course-image">')}document.querySelector(".header-left").insertAdjacentHTML("beforeend",`\n  <a href="#" class="header-link">All courses</a>\n  <a href="#" class="header-link">Thematic courses</a>\n  <a href="#" class="header-link">Knowledge library</a>\n`);$("#ep-footer").append('<div class=footer-content> <a href="https://legal.opendatasoft.com/fr/privacy-policy.html" target="_blank">Politique de confidentialité</a></div>');$("#ep-footer").append('<div class=footer-content> <a href="https://legal.opendatasoft.com/fr/cookies.html" target="_blank">Cookies</div>');$(document).ready((function(){var refGuides=document.querySelectorAll('#skilljar-content #catalog-content #catalog-courses a[data-tags*="auto-register"]');refGuides.forEach((function(node){var href=node.href;if(!~href.indexOf("?reg=1")){node.href=href+"?reg=1"}}))}));