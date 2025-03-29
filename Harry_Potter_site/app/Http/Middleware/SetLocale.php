<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class SetLocale
{
    public function handle(Request $request, Closure $next)
    {
        // Recupera la lingua dalla sessione o dall'URL
        $locale = $request->get('lang', session('locale', config('app.locale')));

        // Verifica se la lingua è disponibile
        if (in_array($locale, config('app.available_locales'))) {
            App::setLocale($locale);
            session(['locale' => $locale]);
        }

        return $next($request);
    }
}