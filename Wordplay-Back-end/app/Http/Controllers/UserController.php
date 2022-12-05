<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
            if($request->email != null && $request->password == null){
                return response()->json([
                    'status' => 'False',
                    'emailWrong' => 'False',
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
                    'emailWrong' => 'True',
                    'passwordWrong' => 'True',
                ]); 
            }
        }
    }

    
    /**
     * Login api
     *
     * @return \Illuminate\Http\Response
     */
    public function loginUser(Request $request) {

        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
            $user = Auth::user(); 
            $success['token'] =  $user->createToken('MyApp')->plainTextToken; 
            // $success['name'] =  $user->name;
   
            // return $this->sendResponse($success, 'User login successfully.');
            return response()->json([
                'status' => 'True',
                'token' => $succes->token,
            ]);
        } 
        else{ 
            if($request->email != null && $request->password == null){
                return response()->json([
                    'status' => 'False',
                    'emailWrong' => 'False',
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
                    'emailWrong' => 'True',
                    'passwordWrong' => 'True',
                ]); 
            }
        } 

    }
}