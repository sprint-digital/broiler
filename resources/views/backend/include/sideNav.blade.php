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
                <li>
                    <a href="#/gallery"><i class="fa fa-photo fa-fw"></i> Gallery</a>
                </li>
                <li>
                    <a href="#/staticpage"><i class="fa fa-file-code-o fa-fw"></i> Static Pages</a>
                </li>
                <li class="">
                    <a href="#"><i class="fa fa-user fa-fw"></i> Profile<span class="fa arrow"></span></a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a class="" href="#/profile"><i class="fa fa-user fa-fw"></i> My Profile</a>
                        </li>
                        <li>
                            <a class="" href="#/setting"><i class="fa fa-wrench fa-fw"></i> Account Settings</a>
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