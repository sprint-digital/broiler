<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Response;
use App\User;
use App\Setting;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (!$this->checkUser()){
            return Response::json(array('accessDenied'=>'true','msgType'=>'danger','msg'=>'Sorry, you do not have permission. Please contact the website administrator or owner to resolve this issue.'));
        };
        $user = Auth::user();
        $settingData = Setting::get();
        return Response::json($settingData);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();
        Setting::create($input);
        return Response::json(array('settingDatas'=>Setting::get(),'msgType'=>'success','msg'=>'Application Setting was successfully Created.'));
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id=null)
    {
        $settingData = Setting::find($id);
        return Response::json($settingData);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $id = null)
    {
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $inputs = $request->all();
        foreach ($inputs as $input){
            $settingData = Setting::find($input['id']);
            $settingData->fill($input);
            $settingData->save();
        }
        return Response::json(array('settingDatas'=>Setting::get(),'msgType'=>'success','msg'=>'Application Settings were successfully Updated.'));
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Setting::find($id)->delete();
        $settingDatas = Setting::get()->toArray();
        return Response::json(array('settingDatas'=>$settingDatas,'msgType'=>'danger','msg'=>'Setting has been successfully deleted'));
    }
    /**
     * Middleware function 
     *
     * @param  none
     * @return Boolean True or False
     */
    public function checkUser()
    {
        $user = Auth::user();
        if (!$user->hasRole(['owner', 'admin'])){
            return false;
        }
        return true;
    } 
}
