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
       
        $sessionHistory = challengesSessionHistory::create([
            'user_id' => $request->userId,
            'time_session_start' => $request->timestamp,
        ]);
        $sessionId = challengesSessionHistory::where('user_id', $request->userId)->orderBy('session_id', 'DESC')->get('session_id');

            $sessionLength = count($request->ChallengeQuestionAnsweredResult);
        // sessionQuestion($request->ChallengeQuestionAnsweredResult, $request->ChallengeQuestionAnswered);

        for($y = 0; $y < 19; $y++) {
        //      // 'session_id' => $sessionLength,
        //         // 'article_word_id' => $request->ChallengeQuestionAnsweredResult[$i],
        //         // 'answer_id' => $request->ChallengeQuestionAnswered[$i],
            challengesSessionResult::create([
                'session_id' => $sessionId[0]['session_id'],
                'article_word_id' => $request->ChallengeQuestionAnsweredResult[$y],
                'answer_id' => $request->ChallengeQuestionAnswered[$y],
            ]);

        }

        // $sessionId = $request->challengeData;
        return response()->json([
            'test' => $sessionId[0]['session_id'],
            'answercheck' => $request->ChallengeQuestionAnswered,
            'resultcheck' => $request->ChallengeQuestionAnsweredResult[0],
            'length' => $sessionLength,
            'loop' => $y,
        ]);
    }

    public function getWords(){
        $wordGet = ArticleWord::find(2)->limit(5)->get();
        return response()->json([
            'test' => $wordGet,
        ]);
    }
}
