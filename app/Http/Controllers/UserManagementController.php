<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Response;
use App\User;
use DB;

class UserManagementController extends Controller
{
    /**
     * Call in the middleware to be used in this Controller
     */
    public function __construct()
    {
        $this->middleware('auth');
    }
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
        // Grabs All users' data with their roles
        $usersData = DB::select( DB::raw("SELECT users.name, users.active, users.email, users.id, roles.display_name FROM users, roles, role_user WHERE users.id = role_user.user_id AND roles.id = role_user.role_id") );
        return Response::json($usersData);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {

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
        $input['sortid'] = User::max('sortid')+1;
        $input['slug'] = strtolower(preg_replace('/\s*/', '',  $input['title']));
        $userData = User::create($input);
        $userData->toArray();
        return Response::json(array('userData'=>$userData,'msgType'=>'success','msg'=>'Static Page has been successfully created'));
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id = null)
    {
        if (!$this->checkUser()){
            return Response::json(array('accessDenied'=>'true','msgType'=>'danger','msg'=>'Sorry, you do not have permission. Please contact the website administrator or owner to resolve this issue.'));
        };
        $userData = DB::select( DB::raw("SELECT users.name,users.active, users.email, users.id, roles.id as role_id, roles.display_name as role_display_name FROM users, roles, role_user WHERE users.id = role_user.user_id AND roles.id = role_user.role_id and users.id = :id"), ['id' => $id] )[0];
        $roles = DB::table('roles')->select('id','display_name')->get();
        return Response::json(array('userData' => $userData, 'roles' => $roles));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();
        $input['userData']['active']=$input['selectedStatus']['status'];
        DB::table('role_user')->where('user_id', $id)->delete();
        $roleId = $input['selectedRole']['id'];
        $userData = User::find($id);
        $userData->roles()->attach($roleId);
        $userData->fill($input['userData']);
        $userData->save();
        $userData = DB::select( DB::raw("SELECT users.name,users.active, users.email, users.id, roles.id as role_id, roles.display_name as role_display_name FROM users, roles, role_user WHERE users.id = role_user.user_id AND roles.id = role_user.role_id and users.id = :id"), ['id' => $id] )[0];

        return Response::json(array('userData' => $userData, 'msgType'=>'success','msg'=>'User has been successfully Updated'));
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (User::find($id)->active == 1){
            User::find($id)->update(['active' => 0]);
        }else{
            User::find($id)->update(['active' => 1]);
        }
        $usersData = User::get();
        if (User::find($id)->active == '1'){
            return Response::json(array('usersData'=>$usersData,'msgType'=>'success','msg'=>'User has been successfully Activated'));
        }
        return Response::json(array('usersData'=>$usersData,'msgType'=>'danger','msg'=>'User has been successfully Deactivated'));
    }
    /**
     * Middleware function 
     *
     * @param  none
     * @return Json message or continue
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
