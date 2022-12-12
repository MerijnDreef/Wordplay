<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Adjectives;
use App\Models\Word;

class ChallengeController extends Controller
{
    public function getChallenges(Request $request){
        // $challengeArray = [];
        $challenge = Word::where('id', $request->firstNumber)->get();
        return response()->json([
            'challenge' => $challenge,
            // 'testing' => $request->firstNumber,
        ]);
    }
}
