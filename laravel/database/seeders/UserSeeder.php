<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::create([
            'name' => 'sok123',
            'email' => 'sok123@example.com',
            'password' => Hash::make('password123'),
        ]);

        User::create([
            'name' => 'sao',
            'email' => 'sao@example.com',
            'password' => Hash::make('password123'),
        ]);

        User::create([
            'name' => 'd.dara',
            'email' => 'd.dara@example.com',
            'password' => Hash::make('password123'),
        ]);

        User::create([
            'name' => 'veasna',
            'email' => 'veasna@example.com',
            'password' => Hash::make('password123'),
        ]);

        User::create([
            'name' => 'samnang',
            'email' => 'samnang@example.com',
            'password' => Hash::make('password123'),
        ]);

        User::create([
            'name' => 'ratana',
            'email' => 'ratana@example.com',
            'password' => Hash::make('password123'),
        ]);
    }
}
