document.addEventListener('DOMContentLoaded', function(event) {
    
    class UI_Manager {

        static getElementArray(querySelectorString) {
            return Array.from(document.querySelectorAll(querySelectorString));
        }

        static toggleClass(element, className) {
            if (element.classList.contains(className)) {
                element.classList.remove(className)
            } else {
                element.classList.add(className)
            }
        }

        static removeClass(element, className) {
            if (className !== "") {
                element.classList.remove(className)
            }
        }

        static removeClassFromElements(elementArray, className) {
            elementArray.forEach(function(oneElement) {
                UI_Manager.removeClass(oneElement, className)
            })
        }

        static hideElements(elementArray) {
            elementArray.forEach(function(oneElement) {
                oneElement.hidden = true;
            })
        }

        static addClass(element, className) {
            if (className !== "") {
                element.classList.add(className)
            }
        }

        static sidebarResize(element) {
            let windowSize = window.innerWidth
            if (windowSize >= 768) {
                UI_Manager.addClass(element, 'show_side_bar')
            } else {
                UI_Manager.removeClass(element, 'show_side_bar')
            }
        }

    }

    /** On Toggle Button Click Toggle Side Bar */
    document.getElementById('side_bar_toggle').addEventListener('click', function() {
        UI_Manager.toggleClass(document.querySelector('.main_container'), 'show_side_bar')
    })

    /** On Window Resize Toggle Class */
    window.addEventListener('resize', function(event) {
        UI_Manager.sidebarResize(document.querySelector('.main_container'));
    });

    /** Hide All Div */
    UI_Manager.hideElements(UI_Manager.getElementArray('div[class^="container_"]'));

    UI_Manager.getElementArray('a[id^="container_"]').forEach( function(oneAnchor) {
        oneAnchor.addEventListener('click', function() {
            UI_Manager.removeClassFromElements(UI_Manager.getElementArray('a[id^="container_"]'), 'selected_nav'); // Remove All Select Options from All
            UI_Manager.addClass(this,'selected_nav') //Add seleced_nav to this
            clickedBtnID = this.id;
            UI_Manager.hideElements(UI_Manager.getElementArray('div[class^="container_"]')); // Hide All Div
            document.querySelector(`.${clickedBtnID}`).hidden = false; // Show Only that Respective Div
        })
    })
    
    
})
