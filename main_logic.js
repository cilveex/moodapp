// Check if user is logged in
function checkAuth() {
    // Your authentication check logic here
}

// Handle mood selection
document.querySelectorAll('.mood-option').forEach(option => {
    option.addEventListener('click', function() {
        const moodValue = this.dataset.value;
        const currentTime = new Date();
        const cutoffTime = new Date();
        cutoffTime.setHours(15, 0, 0); // 15:00

        if (currentTime > cutoffTime) {
            alert('Voting is closed for today. Please come back tomorrow!');
            return;
        }

        // Send mood value to backend
        saveMoodRating(moodValue);
    });
});

// Save mood rating
async function saveMoodRating(value) {
    try {
        // Your API call to save the rating
        // After successful save, redirect to results page
        window.location.href = 'results.html';
    } catch (error) {
        console.error('Error saving mood:', error);
    }
}

// Initialize mood chart
function initChart() {
    if (document.getElementById('moodChart')) {
        const ctx = document.getElementById('moodChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: [], // Add your dates here
                datasets: [{
                    label: 'Mood Rating',
                    data: [], // Add your mood values here
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 4
                    }
                }
            }
        });
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    initChart();
});

// Handle logout
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        // Your logout logic here
        window.location.href = 'index.html';
    });
}
