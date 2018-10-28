@extends('layouts.app')
@section('content')
    <div class="card">

        <div class="card-header">Users </div>

        <div class="card-body">

            <table class="table table-borderless table-striped table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>User Type</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            @foreach($users as $user)
            <tr>
                <td>{{$user->id}}</td>
                <td>{{$user->name}}</td>
                <td>{{$user->email}}</td>
                <td>{{$user->type}}</td>
                <td><a href="{{"/users/".$user->id}}" onclick="if(!confirm('Do you Delete This User ?')) return false"> <i class="fa fa-trash"></i></a> </td>
            </tr>
                @endforeach
            </tbody>
        </table>
    </div>
        <div class="pagination col-lg-12 center-block">
            {!! $users->render() !!}
        </div>
    </div>
@endsection