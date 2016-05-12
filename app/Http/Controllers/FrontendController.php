<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Response;
use App\User;
use App\Staticpage;
use App\CoreSetting;

class FrontendController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $staticpagesData = Staticpage::get();
        $coreSettingData = CoreSetting::get();
        $applicationData = CoreSetting::where('key', 'Application Name')->first();
        return view('frontend.content', compact('staticpagesData', 'coreSettingData', 'applicationData'));
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id=null)
    {
        $staticpagesData = Staticpage::where('slug', $id)->first();
        return Response::json($staticpagesData);
    }
}
