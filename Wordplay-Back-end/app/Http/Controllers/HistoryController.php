<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Adjectives;
use App\Models\Word;
use App\Models\challengesSessionHistory;
use App\Models\challengesSessionResult;

class HistoryController extends Controller
{
    public function getHistorySession(Request $request){
        $sessionHistory = challengesSessionHistory::where('user_id', $request->userId)->get();
        $sessionId = challengesSessionHistory::where('user_id', $request->userId)->orderBy('session_id', 'DESC')->get('session_id');
        $sessionLength = count($sessionId);
        // $sessionLength = 'test';
        return response()->json([
            'sessionData' => $sessionHistory,
            'length' => $sessionLength,
        ]);
    }
}
