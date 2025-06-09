const studentData = {
    '2020-2021': 49,
    '2021-2022': 36,
    '2022-2023': 44,
    '2023-2024': 51,
    '2024-2025': 5
};

const labels = Object.keys(studentData);
const data = Object.values(studentData);

const backgroundColors = [
    'rgba(144, 0, 0, 0.7)',   // Your base dark red, slightly transparent
    'rgba(200, 50, 50, 0.7)', // Lighter, slightly desaturated red
    'rgba(240, 180, 180, 0.7)',// Very pale pink/red tint
    'rgba(90, 90, 90, 0.7)',  // Medium Gray (for contrast/neutrality)
    'rgba(220, 220, 220, 0.7)'// **Changed: Light Gray, visibly different from white**
];

const borderColors = [
    'rgba(144, 0, 0, 1)',   // Your base dark red
    'rgba(200, 50, 50, 1)', // Lighter, slightly desaturated red
    'rgba(240, 180, 180, 1)',// Very pale pink/red tint
    'rgba(90, 90, 90, 1)',  // Medium Gray
    'rgba(220, 220, 220, 1)'// **Changed: Light Gray, visibly different from white**
];

const ctx = document.getElementById('studentPieChart').getContext('2d');
const studentPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            label: 'Number of Students',
            data: data,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Number of Students per School Year',
                font: {
                    size: 18
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed !== null) {
                            label += context.parsed + ' students';
                        }
                        return label;
                    }
                }
            }
        }
    }
});