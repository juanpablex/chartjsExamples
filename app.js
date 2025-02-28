document.addEventListener('DOMContentLoaded', function () {
    // Datos para las gráficas de empleados
    const employeesData = {
        performance: [65, 70, 80, 90, 85],
        age: [30, 25, 35, 45, 50],
        departments: ['Ventas', 'IT', 'Marketing', 'HR', 'Logística'],
        gender: [60, 40]
    };

    // Gráfico de rendimiento de empleados
    const performanceChart = new Chart(document.getElementById('performanceChart'), {
        type: 'line',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
            datasets: [{
                label: 'Rendimiento de Empleados',
                data: employeesData.performance,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                
            }]
        }
    });

    // Gráfico de edad de empleados
    const ageChart = new Chart(document.getElementById('ageChart'), {
        type: 'bar',
        data: {
            labels: ['Juan', 'Ana', 'Carlos', 'Marta', 'Luis'],
            datasets: [{
                label: 'Edad de Empleados',
                data: employeesData.age,
                backgroundColor: 'rgb(255, 159, 64)'
            }]
        }
    });

    // Gráfico de distribución de empleados por departamento
    const departmentChart = new Chart(document.getElementById('departmentChart'), {
        type: 'pie',
        data: {
            labels: employeesData.departments,
            datasets: [{
                label: 'Distribución por Departamento',
                data: [30, 25, 20, 15, 10],
                backgroundColor: ['red', 'blue', 'green', 'yellow', 'purple']
            }]
        }
    });

    // Gráfico de género de empleados
    const genderChart = new Chart(document.getElementById('genderChart'), {
        type: 'doughnut',
        data: {
            labels: ['Masculino', 'Femenino'],
            datasets: [{
                label: 'Distribución por Género',
                data: employeesData.gender,
                backgroundColor: ['lightblue', 'pink']
            }]
        }
    });

    // Datos para las gráficas de productos
    const productsData = {
        sales: [120, 200, 150, 180, 220],
        categories: ['Electrónica', 'Ropa', 'Alimentos', 'Hogar', 'Juguetes'],
        stock: [50, 100, 70, 90, 120],
        prices: [30, 50, 40, 20, 70]
    };

    // Gráfico de ventas de productos
    const salesChart = new Chart(document.getElementById('salesChart'), {
        type: 'bar',
        data: {
            labels: productsData.categories,
            datasets: [{
                label: 'Ventas por Categoría',
                data: productsData.sales,
                backgroundColor: 'rgb(54, 162, 235)'
            }]
        }
    });

    // Gráfico de distribución de productos por categoría
    const categoryChart = new Chart(document.getElementById('categoryChart'), {
        type: 'pie',
        data: {
            labels: productsData.categories,
            datasets: [{
                label: 'Productos por Categoría',
                data: productsData.sales,
                backgroundColor: ['orange', 'cyan', 'green', 'purple', 'yellow']
            }]
        }
    });

    // Gráfico de stock de productos
    const stockChart = new Chart(document.getElementById('stockChart'), {
        type: 'line',
        data: {
            labels: productsData.categories,
            datasets: [{
                label: 'Stock de Productos',
                data: productsData.stock,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            }]
        }
    });

    // Gráfico de precios de productos
    const priceChart = new Chart(document.getElementById('priceChart'), {
        type: 'bar',
        data: {
            labels: productsData.categories,
            datasets: [{
                label: 'Precios de Productos',
                data: productsData.prices,
                backgroundColor: 'rgb(153, 102, 255)'
            }]
        }
    });
});
