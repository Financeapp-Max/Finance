document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('expense-form');
    const resultDiv = document.getElementById('result');
    const expenseChart = document.getElementById('expense-chart').getContext('2d');
    const summaryTotalExpenses = document.getElementById('total-expenses');
    const summaryRemainingBudget = document.getElementById('remaining-budget');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const income = parseFloat(document.getElementById('income').value);
        const creditExpenses = parseFloat(document.getElementById('credit-expenses').value);
        const restaurantExpenses = parseFloat(document.getElementById('restaurant-expenses').value);
        const houseExpenses = parseFloat(document.getElementById('house-expenses').value);
        const transportExpenses = parseFloat(document.getElementById('transport-expenses').value);

        const totalExpenses = creditExpenses + restaurantExpenses + houseExpenses + transportExpenses;
        const remainingBudget = income - totalExpenses;

        // Mostrar resultados
        summaryTotalExpenses.textContent = `Total Gastos: $${totalExpenses.toFixed(2)}`;
        summaryRemainingBudget.textContent = `Dinero Restante: $${remainingBudget.toFixed(2)}`;

        // Crear la gráfica circular
        new Chart(expenseChart, {
            type: 'pie',
            data: {
                labels: ['Créditos', 'Restaurantes', 'Casa', 'Transporte'],
                datasets: [{
                    label: 'Distribución de Gastos',
                    data: [creditExpenses, restaurantExpenses, houseExpenses, transportExpenses],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                    borderColor: '#fff',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                return `${tooltipItem.label}: $${tooltipItem.raw.toFixed(2)} (${(tooltipItem.raw / totalExpenses * 100).toFixed(2)}%)`;
                            }
                        }
                    }
                }
            }
        });

        resultDiv.style.display = 'block';
    });
});

