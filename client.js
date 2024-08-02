// client.js
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const hideIcon = document.getElementById('hide-icon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        hideIcon.setAttribute('src', 'resources/show.png'); // Replace with your show icon path
    } else {
        passwordInput.type = 'password';
        hideIcon.setAttribute('src', 'resources/hide.png'); // Replace with your hide icon path
    }
}

const data = {
    labels: ['Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    datasets: [{
        label: 'Daily Sales (₱)',
        data: [12000, 15000, 8000, 20000, 18000, 22000, 19000],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

// Configurations for the chart
const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
};

// Render the chart
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);