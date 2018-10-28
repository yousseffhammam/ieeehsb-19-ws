<?php

namespace App\Http\Controllers;

use App\User;
use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Validation\Validator;

class UserConroller extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function viewAdd()
    {
        return view('/admin/addUser');
    }

    public function addUser(Request $request)
    {


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
            return view('admin/users' , compact('users'));
        }

        public function users()
        {
            $users =   User::paginate(5);
          return view('/admin/users' , compact('users'));
        }

        public function destroy( $id)
        {
            Post::where('user_id' , $id)->delete();
            User::findOrFail($id)->delete();

            $users =   User::paginate(5);
            return redirect()->back();

        }

}
