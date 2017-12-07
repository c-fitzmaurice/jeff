<!DOCTYPE html>
<html lang="en">
    <head>
        <title>{{ $page->site_name }}</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <link rel="stylesheet" href="/css/main.css">
    </head>
    <body>
        <div id="jeff">
            @include('_partials.menu')

            @yield('body')

            @include('_partials.footer')
        </div>
        
        <script src="/js/manifest.js"></script>
        <script src="/js/vendor.js"></script>
        <script src="/js/main.js"></script>
    </body>
</html>
