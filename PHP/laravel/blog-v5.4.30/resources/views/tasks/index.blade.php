<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
    <!-- <h1>Hello <?php //echo $name; ?></h1> -->
    
    <ul>
        @foreach ($tasks as $task)
            <li>
            	<a href="tasks/{{ $task->id }}">{{ $task->body }}</a>
            </li>
        @endforeach
    </ul>
</body>
</html>