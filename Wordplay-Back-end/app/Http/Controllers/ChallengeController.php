<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Adjectives;
use App\Models\Word;

class ChallengeController extends Controller
{
    public function getChallenges(Request $request){
        $challengeArray = [];
        // $challenge = Word::where('id', $request->firstNumber)->get();
        for($i = 0; $i < 20; $i++) {
            $challengeArray[$i] = Word::where('id', $request[$i]['challengeId'])->get();
        }
        return response()->json([
            'challenge' => $challengeArray,
        ]);
    }
}
