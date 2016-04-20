@if (Request::path() == 'portal')
    <div class="navbar-default sidebar" role="navigation">
        <div class="sidebar-nav navbar-collapse">
            <ul class="nav" id="side-menu">
                <li>
                    <!-- insert pic -->
                </li>
                <li>
                    <a href="#/dashboard"><i class="material-icons">dashboard</i> Dashboard</a>
                </li>
                <li>
                    <a href="#/gallery"><i class="material-icons">image</i> Gallery</a>
                </li>
                <li>
                    <a href="#/staticpage"><i class="material-icons">public</i> Web Pages</a>
                </li>
                <!-- account and settings only accessible from top nav right dropdown menu
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
                </li>-->
            </ul>
        </div>
        <!-- /.sidebar-collapse -->
    </div>
    <!-- /.navbar-static-side -->
</nav>
@endif