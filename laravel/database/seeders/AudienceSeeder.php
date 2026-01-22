<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Audience;
use App\Models\User;

class AudienceSeeder extends Seeder
{
    public function run(): void
    {
        $userVeasna = User::where('name', 'veasna')->first();
        $userSamnang = User::where('name', 'samnang')->first();
        $userRatana = User::where('name', 'ratana')->first();

        Audience::create(['name' => 'Veasna', 'user_id' => $userVeasna->id]);
        Audience::create(['name' => 'Samnang', 'user_id' => $userSamnang->id]);
        Audience::create(['name' => 'Ratana', 'user_id' => $userRatana->id]);
    }
}
