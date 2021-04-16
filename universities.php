<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Universities - Edu-Search</title>
    <!-- Scripts-->
    <script src="js/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="js/uni_list.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    <!-- Style Sheet -->
    <link href="css/main.css" rel="stylesheet" type="text/css">
</head>
<body>
<!-- Header File -->
<?php
include 'header.php';
?>
<!-- Row content -->
<div class="row">
    <div class="container">
        <div class="center-container">

            <!-- Information about page -->
            <div class="col-6">
                <div class="content">
                <h2>Universities</h2>
                <p> This page contains a wealth of Universities situated within the United Kingdoms, simply select your desired choice and you will be taken to their Official Website.</p>
            </div>
        </div>
        <!-- uni_list.js Javascript Function University List -->
        <div class="col-6">
            <div class="content">
                <h2>University List</h2>
                <ul class="uni-container">
                    <li class="list">
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </div>
</div>
<!--Footer File-->
<?php
include 'footer.php';
?>
</body>
</html>