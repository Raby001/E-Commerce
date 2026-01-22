<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Author;
use App\Models\User;

class AuthorSeeder extends Seeder
{
    public function run(): void
    {
        $userSok = User::where('name', 'sok123')->first();
        $userSao = User::where('name', 'sao')->first();
        $userDara = User::where('name', 'd.dara')->first();

        Author::create(['name' => 'Sok', 'user_id' => $userSok->id]);
        Author::create(['name' => 'Sao', 'user_id' => $userSao->id]);
        Author::create(['name' => 'Dara', 'user_id' => $userDara->id]);
    }
}
