<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class challengesSessionResult extends Model
{
    use HasFactory;

    protected $guarded = [];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'challenges_session_result';

    public function challengesSessionHistories()
    {
        return $this->belongsTo(challengesSessionHistory::class);
    }
}
