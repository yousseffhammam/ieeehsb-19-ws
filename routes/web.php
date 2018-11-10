<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Foundation\Auth\User;
use Illuminate\Support\Facades\Storage;
use App\Post;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

//
Route::get('/home', 'HomeController@index')->name('home');
//
Route::get('/adduser', 'UserController@viewAdd');
Route::post('/adduser', 'UserController@addUser');
Route::get('/users', 'UserController@index');
//Route::resource('/users', 'UserController');

Route::get('users/{id}', 'UserController@destroy');

Route::resource('posts', 'PostsController');



Route::get('/create', 'PostsController@create');
Route::post('/create', 'PostsController@store');

Route::post('/posts/{id}', 'PostsController@update');

Route::get('/posts/{id}/view', 'PostsController@viewPost');
