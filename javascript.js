document.addEventListener('DOMContentLoaded', () => {
    const clickButton = document.getElementById('clickButton');
    const clickCount = document.getElementById('clickCount');
    const autoClicker = document.getElementById('autoClicker');
    const doubleClicks = document.getElementById('doubleClicks');
    let count = 0;
    let autoClickerEnabled = false;
    let doubleClicksEnabled = false;

    clickButton.addEventListener('click', () => {
        count += doubleClicksEnabled ? 2 : 1;
        clickCount.textContent = count;
        checkUpgrades();
    });

    autoClicker.addEventListener('click', () => {
        autoClickerEnabled = true;
        autoClicker.disabled = true;
        setInterval(() => {
            if (autoClickerEnabled) {
                count += doubleClicksEnabled ? 2 : 1;
                clickCount.textContent = count;
                checkUpgrades();
            }
        }, 1000);
    });

    doubleClicks.addEventListener('click', () => {
        doubleClicksEnabled = true;
        doubleClicks.disabled = true;
    });

    function checkUpgrades() {
        if (count >= 10 && !autoClickerEnabled) {
            autoClicker.disabled = false;
        }
        if (count >= 20 && !doubleClicksEnabled) {
            doubleClicks.disabled = false;
        }
    }
});
