<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class challengesSessionHistory extends Model
{
    use HasFactory;

    protected $guarded = [];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'challenges_session_history';

    public function challengesSessionResults()
    {
        return $this->hasMany(challengesSessionResult::class);
    }
}
