@include('backend.include.header')    
    <!-- MetisMenu CSS -->
    <link href="{{ asset('bower_components/metisMenu/dist/metisMenu.min.css')}}" rel="stylesheet">

    <!-- Custom CSS -->
    <!--<link href="{{ asset('css/sb-admin-2.css')}}" rel="stylesheet">-->

    <div class="container login-container">
        <div class="row">
            <div class="col-md-4 col-md-offset-4">
                <div class="panel panel-primary">
                    <div class="panel-heading logo-heading">
                        <img src="{{ url('/img/logo-large.png') }}" class="login-logo">
                    </div>
                    <div class="panel-body">
                        <form class="form-horizontal" role="form" method="POST" action="{{ url('/portal/login') }}">
                            {!! csrf_field() !!}
                            <p>Please enter your credentials to login.</p>
                            <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }} auth-form-group">

                                <div class="col-md-12">
                                    <input type="email" class="form-control" placeholder="E-mail" name="email" value="{{ old('email') }}" autofocus>
                                    @if ($errors->has('email'))
                                        <span class="help-block">
                                            <strong>{{ $errors->first('email') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }} auth-form-group">
                                <div class="col-md-12">
                                    <input type="password" class="form-control" placeholder="Password" name="password">
                                    @if ($errors->has('password'))
                                        <span class="help-block">
                                            <strong>{{ $errors->first('password') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group auth-form-group">
                                <div class="col-md-12">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" name="remember"><span class="checkbox-material"><span class="check"></span></span> Remember Me
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group auth-form-group">
                                <div class="col-md-12">
                                    <button type="submit" class="btn btn-lg btn-raised btn-primary btn-block">
                                        <i class="material-icons md-18">input</i> Login
                                    </button>

                                    <a class="btn btn-link btn-block" href="{{ url('/portal/password/reset') }}">Forgot Your Password?</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


@include('backend.include.footer') 