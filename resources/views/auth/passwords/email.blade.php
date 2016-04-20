@include('backend.include.header')
        <!-- MetisMenu CSS -->
<link href="{{ asset('bower_components/metisMenu/dist/metisMenu.min.css')}}" rel="stylesheet">

<!-- Custom CSS -->
<!--<link href="{{ asset('css/sb-admin-2.css')}}" rel="stylesheet">-->

<div class="container login-container">
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div class="panel panel-primary">
                <div class="panel-heading logo-heading">
                    <h3 class="panel-title">Password Reset</h3>
                </div>
                <div class="panel-body">
                    <form class="form-horizontal" role="form" method="POST" action="{{ url('/portal/password/email') }}">
                        {!! csrf_field() !!}

                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }} auth-form-group">
                            <label class="col-md-4 control-label">E-Mail Address</label>

                            <div class="col-md-6">
                                <input type="email" class="form-control" name="email" value="{{ old('email') }}">

                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group auth-form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <button type="submit" class="btn btn-raised btn-primary btn-block">
                                    <i class="material-icons md-18">send</i>Send Password Reset Link
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>


@include('backend.include.footer')
