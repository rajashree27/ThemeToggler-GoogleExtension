


if (document.querySelector(".popup")) {
    const button = document.querySelector(".button");
    const circle = document.querySelector(".circle")
    let buttonOn = false;
    function invert() {
        alert("hi")
        document.body.style.filter = "invert(1) hue-rotate(180deg)";
        let media = document.querySelectorAll("img, picture, video");
        media.forEach((mediaItem) => {
            mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
        })
    }
    button.addEventListener("click", async () => {
        if (!buttonOn) {
            buttonOn = true;
            // let tab = await getCurrentTab();
            let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })


            button.style.animation = "transformToBlue 1s ease-in-out 0s forwards"
            circle.style.animation = "moveCircleRight 1s ease-in-out 0s forwards"
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ['appOn.js']
            })
        }
        else {
            buttonOn = false;
            let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
            button.style.animation = "transformToYellow 1s ease-in-out 0s forwards"
            circle.style.animation = "moveCircleLeft 1s ease-in-out 0s forwards"
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ['appOff.js']
            })
        }
    })

}

