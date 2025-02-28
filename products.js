document.addEventListener('DOMContentLoaded', function () {
    Chart.register(ChartDataLabels);
    const productsData = {
        sales: [120, 200, 150, 180, 220],
        categories: ['Electrónica', 'Ropa', 'Alimentos', 'Hogar', 'Juguetes'],
        stock: [50, 100, 70, 90, 120],
        prices: [30, 50, 40, 20, 70]
    };
    const totalSales = productsData.sales.reduce((acc, val) => acc + val, 0);
    // Gráfico de ventas de productos
    const salesChart = new Chart(document.getElementById('salesChart'), {
        type: 'radar',
        data: {
            labels: productsData.categories,
            datasets: [{
                label: 'Ventas por Categoría (radar)',
                data: productsData.sales,
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
                    let percentage = ((value / totalSales) * 100).toFixed(1);
                    return `${value} (${percentage}%)`; // Muestra el valor y el porcentaje
                }
            }
          }
        }
    });

    const totalSales2 = productsData.sales.reduce((acc, val) => acc + val, 0);
    // Gráfico de distribución de productos por categoría
    const categoryChart = new Chart(document.getElementById('categoryChart'), {
        type: 'line',
        data: {
            labels: productsData.categories,
            datasets: [{
                label: 'Productos por Categoría (line fill)',
                data: productsData.sales,
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
                fill:true
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
                    let percentage = ((value / totalSales2) * 100).toFixed(1);
                    return `${value} (${percentage}%)`; // Muestra el valor y el porcentaje
                }
            }
          }
        }
    });

    const totalStocks = productsData.stock.reduce((acc, val) => acc + val, 0);
    // Gráfico de stock de productos
    const stockChart = new Chart(document.getElementById('stockChart'), {
        type: 'pie',
        data: {
            labels: productsData.categories,
            datasets: [{
                label: 'Stock de Productos (scatter)',
                data: productsData.stock,
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
                    let percentage = ((value / totalStocks) * 100).toFixed(1);
                    return `${value} (${percentage}%)`; // Muestra el valor y el porcentaje
                }
            }
           
          }
        }
    });

    const totalPrices = productsData.prices.reduce((acc, val) => acc + val, 0);
    // Gráfico de precios de productos
    const priceChart = new Chart(document.getElementById('priceChart'), {
        type: 'polarArea',
        data: {
            labels: productsData.categories,
            datasets: [{
                label: 'Precios de Productos (polarArea)',
                data: productsData.prices,
                backgroundColor: [
                    'rgba(255, 87, 51, 0.6)',
                    'rgba(51, 255, 87, 0.6)',
                    'rgba(51, 87, 255, 0.6)',
                    'rgba(255, 51, 166, 0.6)',
                    'rgba(166, 51, 255, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 87, 51, 1)',
                    'rgba(51, 255, 87, 1)',
                    'rgba(51, 87, 255, 1)',
                    'rgba(255, 51, 166, 1)',
                    'rgba(166, 51, 255,1)',
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
                    let percentage = ((value / totalPrices) * 100).toFixed(1);
                    return `${value} (${percentage}%)`; // Muestra el valor y el porcentaje
                }
            }
          }
        }
    });
});
