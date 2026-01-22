<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Comment;
use App\Models\Article;
use App\Models\Author;
use App\Models\Audience;

class CommentSeeder extends Seeder
{
    public function run(): void
    {
        // Author Sok comments on his article
        Comment::create([
            'name' => 'Thank you to all the subscribers',
            'user_id' => Author::where('name', 'Sok')->first()->user_id,
            'commentable_id' => Article::where('name', 'Climate changes in the last 3 years')->first()->id,
            'commentable_type' => Article::class,
        ]);

        // Audience Samnang comments on Author Sao
        Comment::create([
            'name' => 'Your article is amazing',
            'user_id' => Audience::where('name', 'Samnang')->first()->user_id,
            'commentable_id' => Author::where('name', 'Sao')->first()->id,
            'commentable_type' => Author::class,
        ]);

        // Author Sao comments on Audience Samnang
        Comment::create([
            'name' => 'Welcome to read my article',
            'user_id' => Author::where('name', 'Sao')->first()->user_id,
            'commentable_id' => Audience::where('name', 'Samnang')->first()->id,
            'commentable_type' => Audience::class,
        ]);

        // Audience Veasna comments on an article
        Comment::create([
            'name' => 'I can’t wait this thing happening',
            'user_id' => Audience::where('name', 'Veasna')->first()->user_id,
            'commentable_id' => Article::where('name', 'Quantum computers, is it coming?')->first()->id,
            'commentable_type' => Article::class,
        ]);
    }
}
