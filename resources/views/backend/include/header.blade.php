<!DOCTYPE html>
<html lang="en" ng-app="myApp">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Broiler</title>

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
    <div id="wrapper">
@if (Request::path() == 'portal')
        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle pull-left" data-toggle="collapse" data-target=".navbar-collapse">
                    <i class="material-icons md-28">apps</i>
                </button>
                <a class="navbar-brand" href="#/dashboard"><img src="{{ url('/img/logo.png') }}" class="navbar-logo"></a>
                <ul class="nav navbar-top-links navbar-right">
                    <!-- /.dropdown -->
                    <li class="dropdown pull-right">
                        <a class="dropdown-toggle" data-toggle="dropdown">
                            <i class="material-icons">touch_app</i>  <i class="fa fa-caret-down"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-user">
                            <li><a href="#/profile"><i class="material-icons">person</i> User Profile</a>
                            </li>
                            <li><a href="#/setting"><i class="material-icons">settings</i> Settings</a>
                            </li>
                            <li class="divider"></li>
                            <li><a href="{{ url('/portal/logout') }}"><i class="material-icons">exit_to_app</i> Logout</a>
                            </li>
                        </ul>
                        <!-- /.dropdown-user -->
                    </li>
                    <!-- /.dropdown -->
                </ul>
                <!-- /.navbar-top-links -->
            </div>
            <!-- /.navbar-header -->


@endif