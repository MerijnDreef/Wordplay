<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\adjectives;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\DB;

class AdjectiveSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('adjectives')->delete();

        $json = File::get("database/data/adjectiveData.json");
        $data = json_decode($json);

        foreach($data as $obj) {
            adjectives::create(array(
                'adjective_name' => $obj->adjective_name
            ));
        }
    }
}
