<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ChallengeController;
use App\Http\Controllers\HistoryController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/test', [TestController::class, 'index']);

Route::post('/register', [UserController::class, 'registerUser']);
Route::post('/nameObtain', [UserController::class, 'getName']);

Route::post('/login', [UserController::class, 'loginUser']);

Route::post('/challenge', [ChallengeController::class, 'getChallenges']);

Route::post('/userInfo', [UserController::class, 'getUserInfo']);

Route::post('/sessionSend', [ChallengeController::class, 'challengeSave']);

Route::post('/historySessions', [HistoryController::class, 'getHistorySession']);
Route::post('/historyAnswers', [HistoryController::class, 'getHistoryResult']);

Route::get('/getWords', [ChallengeController::class, 'getWords']);

