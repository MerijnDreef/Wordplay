<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Word;
use App\Models\ArticleWord;
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

    public function getHistoryResult(Request $request){
        // $sessionHistory = [];
        $wrdId = [];
        $artData = [];
        $wordData = [];
        $sessionHistory = challengesSessionResult::where('session_id', $request->sessionId)->get();
        $sessionHistoryId = $sessionHistory->pluck('article_word_id');
        $words = Word::with('ArticleWords')->find($sessionHistoryId);
        for($y = 0; $y < 19; $y++) {
            $artData[$y] = ArticleWord::where('id', $sessionHistory[$y]['article_word_id'])->get('article_id');
            
            $wrdId[$y] = ArticleWord::where('id', $sessionHistory[$y]['article_word_id'])->get('word_id');

            $wordData[$y] = Word::where('id', $wrdId[$y])->get('word');
            // $artData = Article::where('id', $artId[$y])->get('article');
            // $artData = $artId[$y];
        }

        return response()->json([
            'sessionData' => $sessionHistory,
            'waagh' => $wrdId,
            'woId' => $wrdId[0],
            'wordData' => $wordData,
            'artData' => $artData,
            'sessionHistoryIds' => $sessionHistoryId,
            'words' => $words
            // 'sessionId' => $request->sessionId,
        ]);
    }
}
