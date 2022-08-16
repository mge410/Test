<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Product\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


//Route::get('products', '\app\Http\Controllers\Product\ProductController@products');
//Route::get('products', [ProductController::class, 'products']);
Route::get('products', [ProductController::class, 'products']);

Route::get('products/{id}', [ProductController::class, 'productByid']);

Route::post('products', [ProductController::class, 'productSave']);

Route::put('products/{id}', [ProductController::class, 'productEdit']);

Route::delete('products/{id}', [ProductController::class, 'productDelete']);