<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::group(['middleware' => 'web'], function () {
    Route::auth('portal');
    Route::get('/portal', 'HomeController@index');
    //Route::get('/portal/getDashboardData', 'DashboardController@index');
    Route::resource('/portal/dashboard', 'DashboardController');
    //Route::resource('/portal/user/edit', 'UserController@edit');
    Route::resource('/portal/user', 'UserController');
    Route::resource('/portal/setting', 'SettingController');
    Route::resource('/portal/staticpage', 'StaticpageController');
    //    Route::get('/portal/getDashboardData', function(){return 'test';});

});
// Route::get('/', function () {usu
//     return view('master');
// });
// Route::get('/portal/', function () {
//     return view('master');
// });

// Route::post('portal/auth', 'UserController@checkAuth');
// Route::get('test', function(){return 'test';});
// Route::get('/test/', function(){return 'test';});
// Route::resource('portal/user/', 'UserController');


// Route::any('{path?}', function()
// {
//     return view("welcome");
// })->where("path", ".+");