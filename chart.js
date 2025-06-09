new Chart(document.getElementById('studentCasesLineChart'), {
    type: 'line',
    data: { /* ... */ },
    options: {
        responsive: true, // This is crucial
        maintainAspectRatio: false, // Often helpful to prevent the chart from trying to maintain its initial aspect ratio
        // ... other options
    }
});

new Chart(document.getElementById('studentCasesLineChart'), {
    type: 'pie',
    data: { /* ... */ },
    options: {
        responsive: true, // This is crucial
        maintainAspectRatio: false, // Often helpful to prevent the chart from trying to maintain its initial aspect ratio
        // ... other options
    }
});

