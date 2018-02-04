<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name', 'MSS') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>

    <div id="app" class="app-wrapper">
        <div class="fill-parent d-flex justify-content-center align-items-stretch">
            <div class="align-self-center">
                cargando...
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <script>
        var MSS_VARS = <?php echo json_encode([
            'user' => $user ?? null,
            'token' => $token ?? null,
            'timeFactor' => floatval(env('MSS_TIME_FACTOR', 1)),
        ]); ?>
    </script>
    <script src="{{ asset('js/manifest.js') }}"></script>
    <script src="{{ asset('js/vendor.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
