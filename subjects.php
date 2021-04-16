<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Subjects - Edu-Search</title>
    <!-- Scripts-->
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    <script type="text/javascript" src="js/subjects.js"></script>
    <script>
        /* Javascript found on https://www.w3schools.com/howto/howto_css_dropdown_navbar.asp */
        /* Opens Dropdown */
        function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
        }

        // Close the dropdown if the user clicks outside of it
        window.onclick = function(e) {
            if (!e.target.matches('.dropbtn')) {
                var myDropdown = document.getElementById("myDropdown");
                if (myDropdown.classList.contains('show')) {
                    myDropdown.classList.remove('show');
                }
            }
        }
    </script>
    <!-- Style Sheet -->
    <link href="css/main.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>


<?php
include 'header.php';
?>
<!-- Row content -->
<div class="row">
    <div class="main">
        <div class="col-3">
            <div class="content">
                <!--Side Menu Code -->
                <div class="menu-container">
                    <h2>Departments</h2>
                    <!-- Menu for larger devices, will not show on mobiles -->
                    <div class="sidenav">
                        <button value="SE.TER.ENRL" onClick="subjectValue(this.value)">All Programmes</button>
                        <button value="UIS.FOSEP.56.F800" onClick="subjectValue(this.value)">Agriculture</button>
                        <button value="UIS.FOSEP.56.F140" onClick="subjectValue(this.value)">Education</button>
                        <button value="UIS.FOSEP.56.F700" onClick="subjectValue(this.value)">Engineering</button>
                        <button value="UIS.FOSEP.56.F600" onClick="subjectValue(this.value)">Communication
                        </button>
                        <button value="UIS.FOSEP.56.F200" onClick="subjectValue(this.value)">Humanities</button>
                        <button value="UIS.FOSEP.56.F500" onClick="subjectValue(this.value)">Science</button>
                        <button value="UIS.FOSEP.56.F800" onClick="subjectValue(this.value)">Services</button>
                        <button value="UIS.FOSEP.56.F400" onClick="subjectValue(this.value)">Business and Law</button>
                    </div>
                    <!-- Dropdown menu will only show on mobile devices-->
                    <div class="dropdown">
                        <button class="dropbtn" onclick="myFunction()">Departments
                            <i class="fa fa-caret-down"></i></button>
                        <div class="dropdown-content" id="myDropdown">
                            <button value="SE.TER.ENRL" onClick="subjectValue(this.value)">All Programmes</button>
                            <button value="UIS.FOSEP.56.F800" onClick="subjectValue(this.value)">Agriculture</button>
                            <button value="UIS.FOSEP.56.F140" onClick="subjectValue(this.value)">Education</button>
                            <button value="UIS.FOSEP.56.F700" onClick="subjectValue(this.value)">Engineering</button>
                            <button value="UIS.FOSEP.56.F600" onClick="subjectValue(this.value)">Communication
                            </button>
                            <button value="UIS.FOSEP.56.F200" onClick="subjectValue(this.value)">Humanities</button>
                            <button value="UIS.FOSEP.56.F500" onClick="subjectValue(this.value)">Science</button>
                            <button value="UIS.FOSEP.56.F800" onClick="subjectValue(this.value)">Services</button>
                            <button value="UIS.FOSEP.56.F400" onClick="subjectValue(this.value)">Business and Law
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Side Menu End -->
            </div>
        </div>
        <div class="col-6">
            <!-- Main bar chart -->
            <div id="chart-container">
                <h2>Statistics</h2>
                <canvas id="bar-chart"></canvas>
            </div>
            <br/><br/>
        </div>
        <div class="col-3">
            <!-- Smaller Pie Chart -->
            <h2>Piechart</h2>
            <div class="chart-container-2">
                <canvas id="bar-chart-2"></canvas>
            </div>
        </div>

        <div class="col-3">
            <!-- Smaller Doughnut Chart -->
            <h2>Doughnut Chart</h2>
            <div class="chart-container-3">
                <canvas id="bar-chart-3"></canvas>
            </div>
        </div>


    </div>
</div>

<?php
include 'footer.php';
?>

</body>

</html>