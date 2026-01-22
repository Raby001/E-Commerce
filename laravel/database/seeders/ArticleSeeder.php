<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Article;
use App\Models\Author;

class ArticleSeeder extends Seeder
{
    public function run(): void
    {
        $authorSok = Author::where('name', 'Sok')->first();
        $authorSao = Author::where('name', 'Sao')->first();
        $authorDara = Author::where('name', 'Dara')->first();

        $authorSok->articles()->createMany([
            ['name' => 'Climate changes in the last 3 years'],
            ['name' => 'Global warming is in its critical stage'],
        ]);

        $authorSao->articles()->createMany([
            ['name' => 'Computers in the next generation'],
            ['name' => 'Quantum computers, is it coming?'],
        ]);

        $authorDara->articles()->createMany([
            ['name' => 'Chemistry in nature form'],
            ['name' => 'The origin of water'],
        ]);
    }
}
