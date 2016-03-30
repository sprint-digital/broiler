@if (Request::path() == 'portal')
    <div class="navbar-default sidebar" role="navigation">
        <div class="sidebar-nav navbar-collapse">
            <ul class="nav" id="side-menu">
                <li>
                    <!-- insert pic -->
                </li>
                <li>
                    <a href="#/dashboard"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a>
                </li>

                <li class="active">
                    <a href="#"><i class="fa fa-user fa-fw"></i> Profile<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a class="active" href="#/profile"><i class="fa fa-user fa-fw"></i> My Profile</a>
                        </li>
                        <li>
                            <a class="active" href="#/setting"><i class="fa fa-wrench fa-fw"></i> Account Settings</a>
                        </li>
                    </ul>
                    <!-- /.nav-second-level -->
                </li>
            </ul>
        </div>
        <!-- /.sidebar-collapse -->
    </div>
    <!-- /.navbar-static-side -->
</nav>
@endif