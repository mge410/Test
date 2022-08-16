<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Models\ProductModel;
use Validator;


class ProductController extends Controller
{
    public function products(){
        return response()->json(ProductModel::get(), 200);
    }

    public function productByid($id){
        $product = ProductModel::find($id);
        if (is_null($product)){
            return response()->json(['error' => true, 'message' => 'Not found', 200]);
        }
        return response()->json($product, 200);
    }
    
    public function productSave(Request $req){
        $rules = [
            'name' => 'required|min:1',
            'description' => 'required|min:1',
            'price' => 'required|min:1'
        ];
        $validator = Validator::make($req->all(), $rules);
        if ($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        $product = ProductModel::create($req->all());
        return response()->json($product, 201);
    }

    public function productEdit(Request $req, $id){
        $product = ProductModel::find($id);
        $product->update($req->all());
        return response()->json($product, 200);
    }

    public function productDelete(Request $req, $id){
        $product = ProductModel::find($id);
        if (is_null($product)){
            return response()->json(['error' => true, 'message' => 'Not found'], 200);
        }
        $product->delete();
        return response()->json('', 204);
    }
}
