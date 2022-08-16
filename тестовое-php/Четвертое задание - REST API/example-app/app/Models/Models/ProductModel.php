<?php

namespace App\Models\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductModel extends Model
{
    use HasFactory;
    protected $table = "products";

    public $timestamps = false;
    
    protected $fillable = [
        'id',
        'name',
        'description',
        'price'
    ];
}
