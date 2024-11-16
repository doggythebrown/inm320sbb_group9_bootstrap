// Progress bar Modal script
// Simulate progress bar update (for demonstration purposes)
let progress = 0;
const progressBar = document.getElementById('progressBar');
const progressStatus = document.getElementById('progressStatus');
const progressModal = new bootstrap.Modal(document.getElementById('progressModal'));

function startProgressBar() {
    progress = 0;
    progressBar.style.width = progress + '%';
    progressStatus.innerText = progress + '%';
    progressModal.show();

    const interval = setInterval(() => {
        if (progress < 100) {
            progress += 10;
            progressBar.style.width = progress + '%';
            progressStatus.innerText = progress + '%';
        } else {
            clearInterval(interval);
            setTimeout(() => progressModal.hide(), 1000);
        }
    }, 100);
}

// Call startProgressBar() function to begin the progress (for testing)
startProgressBar();