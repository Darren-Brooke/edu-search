<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home - Edu-Search</title>
    <!-- Scripts-->
    <script src="js/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
    <!-- Style Sheet -->
    <link href="css/main.css" rel="stylesheet" type="text/css">
</head>
<body>
<?php
include 'header.php';
?>
<div class="row">
    <div id="container">
        <!-- Welcome Message -->
        <div class="col-12">
            <div class="center-container-index">
                <h2>Welcome</h2>
                <p>Welcome to Edu-search. This website is aimed primarily at helping students aiming to go to university
                    find the ideal University within the bounds of the United Kingdom. This site contains numerous
                    functions for helping students. There is a comprehensive list of Universities within the UK. The
                    data for which is pulled from a trusted external API at the hipolabs website.</p>
                <p> Aside from the University List we also offer detailed statistics in the form of visual graphs which
                    look into the enrollment percentages across a wide variety of education programs ranging from
                    Agriculture to business and law. The charts are interactive so you will be able to narrow the years
                    down to get a better understanding of the presented statistics.</p>
                <p> Finally Edu-search offers the ability to look look into many different job fields and the sort of
                    work you could potentially see within. These results show the qualifications that would be expected
                    from and a brief description of the work the job entails. The data for both the Visual Charts and
                    Job Search is pulled directly from the World Banks API.</p>
            </div>
        </div>
    </div>
</div>

<?php
include 'footer.php';
?>
</body>
</html>