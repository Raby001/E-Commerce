<?php

namespace App\Models;

use App\Models\User;
use App\Models\Permission;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;
    protected $fillable = ['name'];

    // a role can have many users
    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    // a role can have many permission
    
    public function permissions()
    {
        return $this->belongsToMany(Permission::class);
    }   
     

}
