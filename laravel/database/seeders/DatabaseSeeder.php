<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            UserSeeder::class,
            AuthorSeeder::class,
            ArticleSeeder::class,
            AudienceSeeder::class,
            SubscriptionSeeder::class, // pivot table
            CommentSeeder::class,
        ]);
    }
}
