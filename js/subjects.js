// Information on how to create charts using Chart.js was obtained from https://www.chartjs.org/docs/latest/
// Loads the Default Bar Chart when the Subjects page is clicked
$(function () {
    let label = [];
    let dataBar = [];
    $.ajax({
        url: ("https://api.worldbank.org/v2/countries/GBR/indicators/SE.TER.ENRL?date=2009:2015&format=JSON"),
        type: "GET",
        dataType: "json",
        success: function (data) {
            console.log(data);
            // Loops API data into arrays to be used in the Chart Creation
            for (let i = 0; i <= data[1].length; i++) {
                dataBar.push(data[1][i]);
                label.push(data[1][i]);
            }
            //creates new chart
            let ctx1 = document.getElementById("bar-chart").getContext('2d');
            myChart1 = new Chart(ctx1, {
                type: 'horizontalBar',
                data: {
                    labels: ["Year"],
                    datasets: [{ // puts data in dataset to be displayed
                        label: [label[0].date],
                        backgroundColor: "#3e95cd",
                        data: [dataBar[0].value],
                    }, {
                        label: [label[1].date],
                        backgroundColor: "#8e5ea2",
                        data: [dataBar[1].value],
                    }, {
                        label: [label[2].date],
                        backgroundColor: "#3cba9f",
                        data: [dataBar[2].value],
                    }, {
                        label: [label[3].date],
                        backgroundColor: "#e8c3b9",
                        data: [dataBar[3].value],
                    }, {
                        label: [label[4].date],
                        backgroundColor: "#c45850",
                        data: [dataBar[4].value],
                    }, {
                        label: [label[5].date],
                        backgroundColor: "#ed9121",
                        data: [dataBar[5].value],
                    }, {
                        label: [label[6].date],
                        backgroundColor: "#cfcfc4",
                        data: [dataBar[6].value],
                    }]
                },
                // configuration options for chart
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        display: true
                    },
                    title: {
                        display: true,
                        fontColor: 'black',
                        text: dataBar[0].indicator.value,
                    }
                }
            });
            //creates new chart
            let ctx2 = document.getElementById("bar-chart-2").getContext('2d');
            myChart2 = new Chart(ctx2, {
                type: 'pie',
                data: {
                    labels: [label[0].date, label[1].date, label[2].date, label[3].date, label[4].date, label[5].date, label[6].date],
                    datasets: [
                        {
                            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#ed9121", "#cfcfc4"],
                            data: [dataBar[0].value, dataBar[1].value, dataBar[2].value, dataBar[3].value, dataBar[4].value, dataBar[5].value, dataBar[6].value
                            ]
                        }
                    ]
                },
                // Configuration for chart
                options: {
                    scales: {
                        yAxes: [{
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
                            ticks: {
                                display: false
                            }
                        }]
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        labels: {
                            fontColor: '#000000'
                        },
                        display: true,
                    },
                    title: {
                        display: true,
                        fontColor: '#000000',
                        text: "Female Enrollment Figures",
                    }
                }
            });
            // creates new chart
            let ctx3 = document.getElementById("bar-chart-3").getContext('2d');
            myChart3 = new Chart(ctx3, {
                type: 'doughnut',
                data: {
                    labels: [label[0].date, label[1].date, label[2].date, label[3].date, label[4].date, label[5].date, label[6].date],
                    datasets: [
                        {
                            label: "Popularity",
                            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#ed9121", "#cfcfc4"],
                            data: [dataBar[0].value, dataBar[1].value, dataBar[2].value, dataBar[3].value, dataBar[4].value, dataBar[5].value, dataBar[6].value
                            ]
                        }
                    ]
                },
                // Configuration for chart, changes appearance
                options: {
                    scales: {
                        yAxes: [{
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
                            ticks: {
                                display: false
                            }
                        }]
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        labels: {
                            fontColor: '#000000'
                        },
                        display: true,
                    },
                    title: {
                        display: true,
                        fontColor: '#000000',
                        text: "Male Enrollment Figures",
                    }
                }
            });
        }
    })
});

// Changes Default Bar Chart depending on the Side Bar Navigation Menu input
function subjectValue(value) {
    let label = [];
    let dataBar = [];
    //Removes old canvas's to prevent issues from occurring
    myChart1.destroy();
    myChart2.destroy();
    myChart3.destroy();
    let search = (value);
    $.ajax({
        //connects to API
        url: "https://api.worldbank.org/v2/countries/GBR/indicators/" + search + "?date=2009:2015&format=JSON",
        type: "get",
        dataType: "json",
        success: function (data) {
            console.log(data);
            // Takes data from url API and places them into arrays to be used in the chart creation
            for (let i = 0; i <= data[1].length; i++) {
                dataBar.push(data[1][i]);
                label.push(data[1][i]);
            }
            // creates new chart
            let ctx1 = document.getElementById("bar-chart").getContext("2d");
            myChart1 = new Chart(ctx1, {
                type: 'horizontalBar',
                data: {
                    labels: ["Year"],
                    datasets: [{ // Places values into respective data holders to be displayed
                        label: [label[0].date],
                        backgroundColor: "#3e95cd",
                        data: [dataBar[0].value],
                    }, {
                        label: [label[1].date],
                        backgroundColor: "#8e5ea2",
                        data: [dataBar[1].value],
                    }, {
                        label: [label[2].date],
                        backgroundColor: "#3cba9f",
                        data: [dataBar[2].value],
                    }, {
                        label: [label[3].date],
                        backgroundColor: "#e8c3b9",
                        data: [dataBar[3].value],
                    }, {
                        label: [label[4].date],
                        backgroundColor: "#c45850",
                        data: [dataBar[4].value],
                    }, {
                        label: [label[5].date],
                        backgroundColor: "#ed9121",
                        data: [dataBar[5].value],
                    }, {
                        label: [label[6].date],
                        backgroundColor: "#cfcfc4",
                        data: [dataBar[6].value],
                    }]
                },
                // Options menu
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        labels: {
                            fontColor: 'black'
                        },
                        display: true,
                    },
                    title: {
                        display: true,
                        fontColor: 'black',
                        text: dataBar[0].indicator.value,
                    }
                }
            });
            //Creates New Chart
            let ctx2 = document.getElementById("bar-chart-2").getContext("2d");
            myChart2 = new Chart(ctx2, {
                type: 'pie',
                data: {
                    labels: [label[0].date, label[1].date, label[2].date, label[3].date, label[4].date, label[5].date, label[6].date],
                    datasets: [
                        {
                            label: "Popularity",
                            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#ed9121", "#cfcfc4"],
                            data: [dataBar[0].value, dataBar[1].value, dataBar[2].value, dataBar[3].value, dataBar[4].value, dataBar[5].value, dataBar[6].value
                            ]
                        }
                    ]
                },
                // Options for barchart
                options: {
                    scales: {
                        yAxes: [{
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
                            ticks: {
                                display: false,
                                fontColor: "black"
                            }
                        }]
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        labels: {
                            fontColor: 'black'
                        },
                        display: true,
                    },
                    title: {
                        display: true,
                        fontColor: 'black',
                        text: "Female Enrollment Figures",
                    }
                }

            });
            //Creates New Bar Chart
            let ctx3 = document.getElementById("bar-chart-3").getContext("2d");
            myChart3 = new Chart(ctx3, {
                type: 'doughnut',
                data: {
                    labels: [label[0].date, label[1].date, label[2].date, label[3].date, label[4].date, label[5].date, label[6].date],
                    datasets: [
                        {
                            label: "Popularity",
                            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#ed9121", "#cfcfc4"],
                            data: [dataBar[0].value, dataBar[1].value, dataBar[2].value, dataBar[3].value, dataBar[4].value, dataBar[5].value, dataBar[6].value
                            ]
                        }
                    ]
                },
                // The options for the charts
                options: {
                    scales: {
                        yAxes: [{
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
                            ticks: {
                                display: false
                            }
                        }]
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        labels: {
                            fontColor: 'black'
                        },
                        display: true,
                    },
                    title: {
                        display: true,
                        fontColor: 'black',
                        text: "Male Enrollment Figures",
                    }
                }
            });
        }
    });
}