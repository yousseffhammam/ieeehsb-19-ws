@extends('layouts.app')

@section('content')
    <div class="row container">
            <div class="col-sm-4">

                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <h3 class="panel-title">{{$post->post_owner}}</h3>
                    </div>
                    <div class="panel-body">
                        <h2> {{$post->title}}</h2>
                        <p> {{$post->body}}</p>

                        @if($post->post_image)
                            <img src="{{ URL::to('/') }}/uploaded/images/{{$post->post_image}}" class="img-thumbnail" alt="{{$post->post_image}}" style="width:50%;height:50%" >
                        @endif

                        @if($post->post_video)

                            <video width="320" height="240" controls>
                                <source src="{{ URL::to('/') }}/uploaded/videos/{{$post->post_video}}" type="video/mp4">
                                <source src="{{ URL::to('/') }}/uploaded/videos/{{$post->post_video}}" type="video/ogg">
                                Your browser does not support the video tag.
                            </video>
                        @endif

                        @if($post->post_file)
                            <a href="{{ URL::to('/') }}/uploaded/files/{{$post->post_file}}">{{$post->post_file}}</a>
                        @endif


                        <span class="label label-danger">created at : {{$post->created_at}}  </span>
                        {{--     <span class="label label-info">  by {{$post->user->name}}</span>--}}
                        <span class="label label-info">  by {{$post->post_owner}}</span>

                        @if (!\auth::guest())
                            @if((auth()->user()->id == $post->user_id) || (auth()->user()->type == 'admin') )
                                <div style="  display:inline-block">

                                    <a href="edit"><i class="fa fa-edit"></i></a>

                                    {!! Form::open(['method'=>'DELETE' , 'route'=>['posts.destroy' , $post->id]]) !!}
                                    {!! Form::submit('X' , ['class'=>'btn btn-danger d-inline-block'] ) !!}
                                    {!! Form::close() !!}
                                </div>
                            @endif
                        @endif

                    </div>
                </div>

            </div>



    </div>


@endsection
