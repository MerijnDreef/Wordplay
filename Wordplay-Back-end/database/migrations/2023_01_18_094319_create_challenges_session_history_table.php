<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChallengesSessionHistoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('challenges_session_history', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->integer('session_id');
            $table->dateTime('time_session_start');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('challenges_session_history');
    }
}
