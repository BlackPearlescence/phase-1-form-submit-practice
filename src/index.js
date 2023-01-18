

window.addEventListener("load", (e) => {
    console.log("Page has loaded")
    const profileNameInput = document.querySelector("#profile-name-input")
    const profileDescInput = document.querySelector("#profile-description-input")
    const profileName = document.querySelector("#profile-name");
    const profileDesc = document.querySelector("#profile-description");
    const profileForm = document.querySelector("#profile-form")
    profileForm.addEventListener("submit", (e) => {
        e.preventDefault();
        profileName.textContent = profileNameInput.value;
        profileDesc.textContent = profileDescInput.value;
    })

    const activityInput = document.querySelector("#activity-input");
    const activityForm = document.querySelector("#activity-form");
    const activityContainer = document.querySelector("#activities-container");
    activityForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newActivity = document.createElement("p");
        newActivity.textContent = activityInput.value;
        activityContainer.append(newActivity);
        e.target.reset();
    })

    const coolPointsForm = document.querySelector("#cool-points-form");
    const currentCoolPointsLabel = document.querySelector("#cool-points");
    
    coolPointsForm.addEventListener("submit",(e) => {
        e.preventDefault();
        const currentCoolPoints = document.querySelector("input[type='number']");
        const adder = parseInt(currentCoolPointsLabel.textContent);
        const numberSelection = parseInt(currentCoolPoints.value);
        currentCoolPointsLabel.textContent = adder + numberSelection;
    })
})

