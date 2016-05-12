<div style="margin-bottom: 0px;">
    <div id="fh5co-wrap" >
        <div id="fh5co-offcanvass">
            <ul>
                @foreach($staticpagesData as $staticpageData)
                    <li class=""><a href="#/{{$staticpageData->slug}}" >{{$staticpageData->title}}</a></li>
                @endforeach
            </ul>
            <h3 class="fh5co-lead">Connect with us</h3>
            <p class="fh5co-social-icons">
                <a href="#"><i class="icon-twitter"></i></a>
                <a href="#"><i class="icon-facebook"></i></a>
                <a href="#"><i class="icon-instagram"></i></a>
                <a href="#"><i class="icon-dribbble"></i></a>
                <a href="#"><i class="icon-youtube"></i></a>
            </p>
        </div>

        <div id="fh5co-menu" class="navbar">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle" data-toggle="collapse" data-target="#fh5co-navbar" aria-expanded="false" aria-controls="navbar"><span>Menu</span> </a>
                        <a href="#/" class="navbar-brand"><span>{{$applicationData->value}}</span></a>
                    </div>
                </div>
            </div>
        </div>
    