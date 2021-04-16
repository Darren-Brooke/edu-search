<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jobs - Edu-Search</title>
    <!-- Scripts-->
    <script src="js/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="js/jobs.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
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
<!-- Header File -->
<?php
include 'header.php';
?>
<div class="container"><!-- Row content -->
    <div class="row">
        <div class="col-3">
            <div class="content">
                <!--Side Menu Code -->
                <div class="menu-container">
                    <h2>Job Fields</h2>
                    <!-- Search button to load desired job field -->
                    <div class="search-container">
                        <input type="text" placeholder="Search.." name="search" id="search">
                        <button id="job_search"><i class="fa fa-search"></i></button>
                    </div>
                    <!-- Menu for larger devices, will not show on mobiles -->
                    <div class="sidenav">
                        <button value="Agriculture" onClick="jobValue(this.value)">Agriculture</button>
                        <button value="Education" onClick="jobValue(this.value)">Education</button>
                        <button value="Engineering" onClick="jobValue(this.value)">Engineering</button>
                        <button value="Communication" onClick="jobValue(this.value)">Communication</button>
                        <button value="Humanities" onClick="jobValue(this.value)">Humanities</button>
                        <button value="Science" onClick="jobValue(this.value)">Science</button>
                        <button value="Services" onClick="jobValue(this.value)">Services</button>
                        <button value="Business and Law" onClick="jobValue(this.value)">Business and Law</button>
                    </div>
                    <!-- Dropdown menu will only show on mobile devices-->
                    <div class="dropdown">
                        <button class="dropbtn" onclick="myFunction()">Departments
                            <i class="fa fa-caret-down"></i></button>
                        <div class="dropdown-content" id="myDropdown">
                            <button value="Agriculture" onClick="jobValue(this.value)">Agriculture</button>
                            <button value="Education" onClick="jobValue(this.value)">Education</button>
                            <button value="Engineering" onClick="jobValue(this.value)">Engineering</button>
                            <button value="Communication" onClick="jobValue(this.value)">Communication</button>
                            <button value="Humanities" onClick="jobValue(this.value)">Humanities</button>
                            <button value="Science" onClick="jobValue(this.value)">Science</button>
                            <button value="Services" onClick="jobValue(this.value)">Services</button>
                            <button value="Business and Law" onClick="jobValue(this.value)">Business and Law</button>
                        </div>
                    </div>
                </div>
                <!-- Side Menu End -->
            </div>
        </div>
        <!-- uni_list.js Javascript Function University List -->
        <div class="col-9">
            <div class="content">
                <h2 class="job-field">Current jobs according to the UK CES Commission for Employment and Skills </h2>
                <p class="job-default">Please Select use the search tool to search for a specific job field or use the
                    side-menu to select a default field</p>
                <ul class="job-container">
                    <li class="list">
                    </li>
                </ul>
            </div>
        </div>
        <!-- Uni List Javascript End -->
    </div>
    <!-- Row End -->
</div>
<!-- Container -->
<!--Footer File-->
<?php
include 'footer.php';
?>
</body>
</html>