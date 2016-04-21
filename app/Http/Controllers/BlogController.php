<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Response;
use App\User;
use App\Blogpost;

class BlogController extends Controller
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
        $user = Auth::user();
        $blogsData = Blogpost::get();
        return Response::json($blogsData);
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
        //$input['sortid'] = Blogpost::max('sortid')+1;
        //$input['slug'] = strtolower(preg_replace('/\s*/', '',  $input['title']));
        $blogData = Blogpost::create($input);
        $blogData->toArray();
        return Response::json(array('blogData'=>$blogData,'msgType'=>'success','msg'=>'Static Page has been successfully created'));
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
        $blogData = Blogpost::find($id);
        return Response::json($blogData);
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
        $blogData = Blogpost::find($id);
        $input['slug'] = strtolower(preg_replace('/\s*/', '',  $input['title']));
        $blogData->fill($input);
        $blogData->save();
        $blogData->toArray();
        return Response::json(array('blogData'=>$blogData,'msgType'=>'success','msg'=>'Static Page has been successfully updated'));
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Blogpost::find($id)->delete();
        $blogsData = Blogpost::get()->toArray();
        return Response::json(array('blogsData'=>$blogsData,'msgType'=>'danger','msg'=>'Static Page has been successfully deleted'));
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
        if (!$user->hasRole(['owner', 'admin', 'staff'])){
            return false;
        }
        return true;
    } 
}
