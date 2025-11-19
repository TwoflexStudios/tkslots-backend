let totalTime = 0;
let currentTime = 0;
let countdownInterval;
window.showBonusModal = (minutes = 9) => {
    window.cc?.director?.pause();
    window.breakingBonus = true;

    totalTime = Math.round(minutes * 60);
    currentTime = totalTime;

    const modal = document.getElementById('bypassModal');
    modal.style.display = 'flex';

    updateProgress();
    startCountdown();

    document.getElementById('cancelButton').addEventListener('click', closeBypassModal);
};

function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
}

function updateProgress() {
    const progressPercentage = totalTime > 0 ? ((totalTime - currentTime)/totalTime)*100 : 0;
    document.getElementById('progressBar').style.width = progressPercentage + '%';
    document.getElementById('countdownTimer').textContent = formatTime(currentTime);
}

function startCountdown() {
    if(countdownInterval) clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
        currentTime--;
        updateProgress();

        if(currentTime <= 0) {
            clearInterval(countdownInterval);
            closeBypassModal();
        }
    }, 1000);
}

function closeBypassModal() {
    const modal = document.getElementById('bypassModal');
    modal.style.display = 'none';
    clearInterval(countdownInterval);
    window.breakingBonus = false;
    window.cc?.director?.resume();
}

window.bypassCompleted = () => {
    try{
        const accountId = window.GAME_DATA.account._id;
        window.parent.postMessage({ type: "bypass-completed", data: {accountId: accountId} }, "*");

        const modal = document.getElementById('bypassModal');
        modal.style.display = 'none';
        clearInterval(countdownInterval);
        window.breakingBonus = false;
        window.cc?.director?.resume();
    }catch{
        
    }
}