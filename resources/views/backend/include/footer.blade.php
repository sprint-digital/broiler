    </div>
    <!-- /#wrapper -->

    <!-- JavaScripts -->
    <script type="text/javascript" src="{{asset('bower_components/jquery/dist/jquery.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('bower_components/bootstrap/dist/js/bootstrap.min.js')}}"></script>
	@if (Request::path() == 'portal')
	    <script type="text/javascript" src="{{asset('bower_components/angular/angular.min.js')}}"></script>
	    <script type="text/javascript" src="{{asset('bower_components/angular-route/angular-route.min.js')}}"></script>
	    <script type="text/javascript" src="{{asset('bower_components/angular-cookies/angular-cookies.min.js')}}"></script>
	    <script type="text/javascript" src="{{asset('js/app.js')}}"></script>
	    <script type="text/javascript" src="{{asset('js/models.js')}}"></script>
	    <script type="text/javascript" src="{{asset('js/controllers.js')}}"></script>
    @endif

    <!-- Metis Menu Plugin JavaScript -->
    <script src="{{asset('bower_components/metisMenu/dist/metisMenu.min.js')}}"></script>

    <!-- Custom Theme JavaScript -->
    <script src="{{asset('js/sb-admin-2.js')}}"></script>


</body>
</html>