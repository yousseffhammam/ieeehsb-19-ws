<?php

use Illuminate\Http\Request;
use Illuminate\Http\Controllers;


//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

   Route::group(['middleware' => ['api']], function () {
   Route::post('/login', 'AuthController@login');

   Route::get('/logout', 'AuthController@logout');
   Route::post('/logout', 'AuthController@logout');

   
});
//Route::post('/password/reset', 'Auth/ResetPasswordController');


//Route::apiResource('posts', 'PostsController');
Route::resource('/posts', 'PostsController');
Route::post('posts/store', 'PostsController@store');
Route::post('posts/{id}/update', 'PostsController@update');
Route::get('/posts/{id}/destroy', 'PostsController@destroy');
Route::post('/posts/{id}/destroy', 'PostsController@destroy');

//Route::group(['prefix' => 'posts'] , function (){
//    Route::apiResource('/{posts}/reviews' , 'ReviewController');
//});

Route::post('/adduser', 'UserController@addUser');
Route::get('/adduser', 'UserController@addUser');
//Route::get('/users', 'UserController@users');
//Route::post('/users', 'UserController@destroy');
Route::resource('/users', 'UserController');

Route::get('users/{id}/destroy', 'UserController@destroy');
Route::post('users/{id}/destroy', 'UserController@destroy');



