<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Adjectives;
use App\Models\Word;
use App\Models\ArticleWord;
use App\Models\challengesSessionHistory;
use App\Models\challengesSessionResult;

class ChallengeController extends Controller
{
    public function getChallenges(Request $request){
        $challengeArray = [];
        $answersArray = [];
        // $challenge = Word::where('id', $request->firstNumber)->get();
        for($i = 0; $i < 20; $i++) {
            $challengeArray[$i] = Word::where('id', $request[$i]['challengeId'])->get();
            $answersArray[$i] = ArticleWord::where('word_id', $request[$i]['challengeId'])->get();

        }
        return response()->json([
            'challenge' => $challengeArray,
            'answers' => $answersArray,
        ]);
    }

    public function challengeSave(Request $request) {
        //needed: UserId, the questions, the answers
        $sessionId = challengesSessionHistory::where('user_id', $request->userId)->get();
        $sessionLength = count($sessionId) + 1;
        challengesSessionHistory::create([
            'user_id' => $request->userId,
            'session_id' => $sessionLength,
            'time_session_start' => $request->timestamp,
        ]);

        // $sessionId = $request->challengeData;
        return response()->json([
            'test' => $sessionId,
            'answercheck' => $request->ChallengeQuestionAnswered,
            'resultcheck' => $request->ChallengeQuestionAnsweredResult,
            'length' => $sessionLength,
        ]);
    }
}
