<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user=DB::table('users')->where('email', 'Dummy@example.com')->first();
        DB::table('posts')->insert([
            'title' => 'Sample Post',
            'content' => 'This is a sample post content.',
            'published_at' => now(),
            'user_id' => $user->id,
        ]);
    }
}
