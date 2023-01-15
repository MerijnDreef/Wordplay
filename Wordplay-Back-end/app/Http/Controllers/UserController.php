<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Adjectives;
use App\Models\Word;

class UserController extends Controller
{
    public function registerUser(Request $request) {
        if($request->email != null && $request->password != null){
            $this->validate(request(), [
                'name' => 'required',
                'email' => 'required|email',
                'password' => 'required',
                'passwordVerify' => 'required'
            ]);
            if($request->password == $request->passwordVerify){
                $user = User::create(request(['name', 'email', 'password']));
                
                auth()->login($user);

                return response()->json([
                    'status' => 'True',
                ]);
            } else {
                return response()->json([
                    'status' => 'False',
                    'verifypassword' => 'False',
                ]);
            }
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
                'isAuth' => 'True',
                'token' => $success,
                'user' => $user->id,
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

    public function getName(Request $request) {

        $firstName = Adjectives::where('id', $request->FirstName)->get("adjective_name");
        $secondName = Word::where('id', $request->SecondName)->get("word");

        // $testing = array_merge($firstName[0]->adjective_name, $secondName[0]->word);
        // $testing = $firstName->merge($secondName);
        // $testing->all();

        return response()->json([
            'name' => $firstName[0]->adjective_name." ".$secondName[0]->word,
        ]);

    }

    public function getUserInfo(Request $request) {
       $userInfo = User::where('id', $request->userLoginId)->get();
       return response()->json([
        'userName' => $userInfo[0]->name,
        'userEmail' => $userInfo[0]->email,
        'userCreatedAt' => $userInfo[0]->created_at,
        // 'request' => $userInfo[0]->name,
       ]); 
    }
}