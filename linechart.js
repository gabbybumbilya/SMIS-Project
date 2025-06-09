const studentCasesData = {
    '2020-2021': 32,
    '2021-2022': 68,
    '2022-2023': 18,
    '2023-2024': 33,
    '2024-2025': 92
};

const caseLabels = Object.keys(studentCasesData);
const caseData = Object.values(studentCasesData);

const caseCtx = document.getElementById('studentCasesLineChart').getContext('2d');
const studentCasesLineChart = new Chart(caseCtx, {
    type: 'line',
    data: {
        labels: caseLabels,
        datasets: [{
            label: 'Number of Student Cases',
            data: caseData,
            borderColor: 'rgba(144, 0, 0, 1)',
            backgroundColor: 'rgba(144, 0, 0, 0.5)',
            fill: true,
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Number of Student Cases per School Year',
                font: {
                    size: 18
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += context.parsed.y + ' cases';
                        }
                        return label;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Cases'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'School Year'
                }
            }
        }
    }
});