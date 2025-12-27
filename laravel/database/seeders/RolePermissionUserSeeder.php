<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class RolePermissionUserSeeder extends Seeder
{
    public function run(): void
    {
        // Roles
        $adminRole = Role::firstOrCreate(['name' => 'admin']);
        $managerRole = Role::firstOrCreate(['name' => 'manager']);
        $staffRole = Role::firstOrCreate(['name' => 'staff']);
        
        // Permissions
        $permissions = [
            'users.manage',
            'products.create',
            'products.update',
            'products.delete',
            'category.create',
            'category.update',
            'category.delete',
        ];

        foreach ($permissions as $perm) {
            Permission::firstOrCreate(['name' => $perm]);
        }

        // Assign permissions to roles safely
        $adminRole->permissions()->syncWithoutDetaching(Permission::pluck('id')->toArray());
        $managerRole->permissions()->syncWithoutDetaching(
            Permission::whereIn('name', ['products.create', 'products.update', 'category.create', 'category.update'])->pluck('id')->toArray()
        );
        $staffRole->permissions()->syncWithoutDetaching([]);

        // Users
        $adminUser = User::firstOrCreate(
            ['email' => 'admin@example.com'],
            ['name' => 'Admin User', 'password' => Hash::make('password')]
        );
        $adminUser->roles()->syncWithoutDetaching([$adminRole->id]);

        $managerUser = User::firstOrCreate(
            ['email' => 'manager@example.com'],
            ['name' => 'Manager User', 'password' => Hash::make('password')]
        );
        $managerUser->roles()->syncWithoutDetaching([$managerRole->id]);

        $staffUser1 = User::firstOrCreate(
            ['email' => 'staff1@example.com'],
            ['name' => 'Staff User 1', 'password' => Hash::make('password')]
        );
        $staffUser1->roles()->syncWithoutDetaching([$staffRole->id]);

        $staffUser2 = User::firstOrCreate(
            ['email' => 'staff2@example.com'],
            ['name' => 'Staff User 2', 'password' => Hash::make('password')]
        );
        $staffUser2->roles()->syncWithoutDetaching([$staffRole->id]);
    }
}
