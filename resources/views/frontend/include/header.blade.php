<!DOCTYPE html>
<html lang="en" ng-app="frontendApp">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{$applicationData->value}}</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700" rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Styles -->
    <link href="{{ asset('bower_components/bootstrap/dist/css/bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <!-- Custom CSS -->
    <!--<link href="{{ asset('css/sb-admin-2.css')}}" rel="stylesheet">-->
    <link href="{{ asset('bower_components/morrisjs/morris.css')}}" rel="stylesheet">
    <!-- <link href="{{ asset('bower_components/angular-datatables/dist/css/angular-datatables.min.css')}}" rel="stylesheet"> -->
    <link href="{{ asset('bower_components/datatables/media/css/dataTables.bootstrap.min.css')}}" rel="stylesheet">

    <link href="{{ asset('css/dataTables.responsive.css')}}" rel="stylesheet">

    <link href="{{asset('bower_components/angular-datatables/dist/plugins/bootstrap/datatables.bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{asset('bower_components/summernote/dist/summernote.css')}}" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="{{ asset('bower_components/font-awesome/css/font-awesome.min.css')}}" rel="stylesheet" type="text/css">

    <link href="{{ asset('css/style.css')}}" rel="stylesheet">
    <link href="{{ asset('css/frontendStyle.css')}}" rel="stylesheet">
    <style>
        #fh5co-menu {
            background: #fff;
            position: fixed;
            border-bottom: 1px solid #ccc;
            top: 0;
            margin-top: 0px;
            -webkit-transform: translateY(0%);
            -moz-transform: translateY(0%);
            -ms-transform: translateY(0%);
            -o-transform: translateY(0%);
            transform: translateY(0%);
        }
        .navbar-brand > span {
            border-color: #444;
            color: #444;
        }

        .fh5co-nav-toggle > span{
                color: #444;
        }
        #fh5co-menu.sleep {
            -webkit-transform: none;
            -moz-transform: none;
            -ms-transform: none;
            -o-transform: none;
            transform: none;
        }
        .form-control{
            background-image: none !important;
        }
    </style>

    <!-- JS Variables -->
    <script>var baseUrl = "{{url('/')}}/"</script>
    <style>
        body {
            font-family: 'Lato';
        }

        .fa-btn {
            margin-right: 6px;
        }
    </style>
</head>
<body id="app-layout">
