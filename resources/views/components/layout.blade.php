<!DOCTYPE html>
<html lang="fr">
<link rel="stylesheet" href="{{ mix('css/app.css') }}" />
<title>Site</title>
<body>
    <nav>
        <a href="/">Accueil</a>
        <a href="/contact">Contact</a>
    </nav>

    {{ $slot }}
<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
