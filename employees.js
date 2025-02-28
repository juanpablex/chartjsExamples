document.addEventListener('DOMContentLoaded', function () {
    Chart.register(ChartDataLabels);
    const employeesData = {
        performance: [65, 70, 80, 90, 85],
        age: [30, 25, 35, 45, 50],
        departments: ['Ventas', 'IT', 'Marketing', 'HR', 'Logística'],
        gender: [60, 40]
    };

    const totalPerformances = employeesData.performance.reduce((acc, val) => acc + val, 0);
    // Gráfico de rendimiento de empleados
    const performanceChart = new Chart(document.getElementById('performanceChart'), {
        type: 'line',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
            datasets: [{
                label: 'Rendimiento de Empleados (line)',
                data: employeesData.performance,
                backgroundColor: [
                    'rgba(255, 87, 51, 0.6)',
                    'rgba(51, 255, 87, 0.6)',
                    'rgba(51, 87, 255, 0.6)',
                    'rgba(255, 51, 166, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 87, 51, 1)',
                    'rgba(51, 255, 87, 1)',
                    'rgba(51, 87, 255, 1)',
                    'rgba(255, 51, 166, 1)'
                ],
                borderWidth: 2,
                tension: 0.1
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 40 // Cambia este valor al tamaño de fuente que desees
                        }
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 40 // También puedes hacer lo mismo para el eje Y
                        }
                    }
                }
            },
          plugins:{
            legend:{
                labels:{
                    font:{
                        size:40
                    }
                    
                }
            },
            datalabels:{
                anchor:'end',
                //align:'top',
                color:'black',
                font:{
                    weight:'bold',
                    size:20
                },
                formatter: (value) => {
                    let percentage = ((value / totalPerformances) * 100).toFixed(1);
                    return `${value} (${percentage}%)`; // Muestra el valor y el porcentaje
                }
            }
          }
        }
    });

    const totalAges = employeesData.age.reduce((acc, val) => acc + val, 0);
    // Gráfico de edad de empleados
    const ageChart = new Chart(document.getElementById('ageChart'), {
        type: 'bar',
        data: {
            labels: ['Juan', 'Ana', 'Carlos', 'Marta', 'Luis'],
            datasets: [{
                label: 'Edad de Empleados (bar)',
                data: employeesData.age,
                backgroundColor: [
                    'rgba(255, 87, 51, 0.6)',
                    'rgba(51, 255, 87, 0.6)',
                    'rgba(51, 87, 255, 0.6)',
                    'rgba(255, 51, 166, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 87, 51, 1)',
                    'rgba(51, 255, 87, 1)',
                    'rgba(51, 87, 255, 1)',
                    'rgba(255, 51, 166, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 40 // Cambia este valor al tamaño de fuente que desees
                        }
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 40 // También puedes hacer lo mismo para el eje Y
                        }
                    }
                }
            },
          plugins:{
            legend:{
                labels:{
                    font:{
                        size:40
                    }
                    
                }
            },
            datalabels:{
                anchor:'end',
                align:'bottom',
                color:'black',
                font:{
                    weight:'bold',
                    size:20
                },
                formatter: (value) => {
                    let percentage = ((value / totalAges) * 100).toFixed(1);
                    return `${value} (${percentage}%)`; // Muestra el valor y el porcentaje
                }
            }
          }
        }
    });

   const totalDepartments = employeesData.performance.reduce((acc, val) => acc + val, 0);
    // Gráfico de distribución de empleados por departamento
    const departmentChart = new Chart(document.getElementById('departmentChart'), {
        type: 'pie',
        data: {
            labels: employeesData.departments,
            datasets: [{
                label: 'Distribución por Departamento (pie)',
                data: [30, 25, 20, 15, 10],
                backgroundColor: [
                    'rgba(255, 87, 51, 0.6)',
                    'rgba(51, 255, 87, 0.6)',
                    'rgba(51, 87, 255, 0.6)',
                    'rgba(255, 51, 166, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 87, 51, 1)',
                    'rgba(51, 255, 87, 1)',
                    'rgba(51, 87, 255, 1)',
                    'rgba(255, 51, 166, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 40 // Cambia este valor al tamaño de fuente que desees
                        }
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 40 // También puedes hacer lo mismo para el eje Y
                        }
                    }
                }
            },
          plugins:{
            legend:{
                labels:{
                    font:{
                        size:40
                    }
                    
                }
            },
            datalabels:{
                anchor:'end',
                //align:'top',
                color:'black',
                font:{
                    weight:'bold',
                    size:20
                },
                formatter: (value) => {
                    let percentage = ((value / totalDepartments) * 100).toFixed(1);
                    return `${value} (${percentage}%)`; // Muestra el valor y el porcentaje
                }
            }
          }
        }
    });

    const totalGenders = employeesData.gender.reduce((acc, val) => acc + val, 0);
    // Gráfico de género de empleados
    const genderChart = new Chart(document.getElementById('genderChart'), {
        type: 'doughnut',
        data: {
            labels: ['Masculino', 'Femenino'],
            datasets: [{
                label: 'Distribución por Género (doughnut)',
                data: employeesData.gender,
                backgroundColor: [
                    'rgba(255, 87, 51, 0.6)',
                    'rgba(51, 255, 87, 0.6)',
                    'rgba(51, 87, 255, 0.6)',
                    'rgba(255, 51, 166, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 87, 51, 1)',
                    'rgba(51, 255, 87, 1)',
                    'rgba(51, 87, 255, 1)',
                    'rgba(255, 51, 166, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 40 // Cambia este valor al tamaño de fuente que desees
                        }
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 40 // También puedes hacer lo mismo para el eje Y
                        }
                    }
                }
            },
          plugins:{
            legend:{
                labels:{
                    font:{
                        size:40
                    }
                    
                }
            },
            datalabels:{
                anchor:'end',
                //align:'top',
                color:'black',
                font:{
                    weight:'bold',
                    size:20
                },
                formatter: (value) => {
                    let percentage = ((value / totalGenders) * 100).toFixed(1);
                    return `${value} (${percentage}%)`; // Muestra el valor y el porcentaje
                }
            }
          }
        }
    });
});
