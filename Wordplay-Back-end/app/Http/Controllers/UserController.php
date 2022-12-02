<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function registerUser(Request $request) {
        if($request->email != null && $request->password != null){
            $this->validate(request(), [
                'name' => 'required',
                'email' => 'required|email',
                'password' => 'required'
            ]);
            
            $user = User::create(request(['name', 'email', 'password']));
            
            auth()->login($user);

            return response()->json([
                'status' => 'True',
            ]);
        } else {
            if($request->email == null && $request->password == null){
                return response()->json([
                    'status' => 'False',
                    'emailWrong' => 'True',
                    'passwordWrong' => 'True',
                ]);    
            } else if($request->email == null && $request->password != null){
                return response()->json([
                    'status' => 'False',
                    'emailWrong' => 'True',
                    'passwordWrong' => 'False',
                ]); 
            } else {
                return response()->json([
                    'status' => 'False',
                    'emailWrong' => 'False',
                    'passwordWrong' => 'True',
                ]); 
            }
        }
    }

    public function loginUser(Request $request) {

        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
 
        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
 
            return response()->json([
                'status' => 'True',
                'emailWrong' => 'False',
                'passwordWrong' => 'False',
            ]);
        }

    }
}