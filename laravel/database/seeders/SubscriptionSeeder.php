<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Audience;
use App\Models\Article;

class SubscriptionSeeder extends Seeder
{
    public function run(): void
    {
        $audienceSamnang = Audience::where('name', 'Samnang')->first();
        $audienceVeasna = Audience::where('name', 'Veasna')->first();
        $audienceRatana = Audience::where('name', 'Ratana')->first();

        $audienceSamnang->articles()->attach([
            Article::where('name', 'Computers in the next generation')->first()->id,
            Article::where('name', 'Chemistry in nature form')->first()->id,
            Article::where('name', 'The origin of water')->first()->id,
        ]);

        $audienceVeasna->articles()->attach([
            Article::where('name', 'Climate changes in the last 3 years')->first()->id,
            Article::where('name', 'The origin of water')->first()->id,
            Article::where('name', 'Quantum computers, is it coming?')->first()->id,
        ]);

        $audienceRatana->articles()->attach([
            Article::where('name', 'Climate changes in the last 3 years')->first()->id,
            Article::where('name', 'Global warming is in its critical stage')->first()->id,
        ]);
    }
}
