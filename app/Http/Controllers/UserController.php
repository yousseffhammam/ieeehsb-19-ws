<?php

namespace App\Http\Controllers;

use App\Http\Resources\User\UserCollection;
use App\Http\Resources\User\UserResource;
use App\User;
use App\Post;
use Tymon\JWTAuth\JWTAuth;
use JWTAuthException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Validation\Validator;

class UserController extends Controller
{
    public function __construct()
    {
//        $this->middleware('auth');
        $this->middleware('auth');
    }


    public function index()
    {

        if(auth()->user()->type == 'admin')
        {
//        $users =   User::all();
        $users =   User::orderBy('created_at','desc')->paginate(5);
//        return  UserCollection::collection($users);
        return  view('/admin/users',compact('users'));
    }else{
           return back()->with('error','Unauthorized');	
    }

    }

    public function addUser(Request $request)
    {

        if(auth()->user()->type == 'admin'){

        $this->validate($request ,[
                    'name' => 'required |string | max:50 | min:5',
                    'email' => 'required |string|email|max:255| unique:users',
                    'password'=>'required|confirmed|string|min:6',
                    'password_confirmation'=>'sometimes|required_with:password',
                    'user-type' => 'required'
        ]);
            $user = new User;
            $user->name = $request->input('name');
            $user->password = Hash::make($request->input('password'));
            $user->email = $request->input('email');
            $user->type = $request->input('user-type');
            $user->save();

            $users =   User::paginate(5);
            return view('admin/users' , compact('users'))->with('User Added');
//            return redirect('api/users')->with('User Added');
        }else{
           return back()->with('error','Unauthorized');
        }

        }

    public function show(User $user)
    {
        return new UserResource($user);
    }

        public function destroy( $id)
        {
        	if(auth()->user()->type == 'admin'){
	            if (auth()->user()->id == $id)
	            {
	//                return redirect('api/users')->with('You can\'t delete Your Self!!');
	                return redirect('users')->with('You can\'t delete Your Self!!','');
	            }
	            Post::where('user_id' , $id)->delete();
	            User::findOrFail($id)->delete();

	            $users =   User::paginate(5);
	//            return redirect('api/users')->with('user deleted');
	            return redirect('/users')->with('user deleted');
	          }
	          else{
	          	return back()->with('error','Unauthorized');
	          }

        }
        public function viewAdd()
        {
            return view('admin/addUser');
        }

}
