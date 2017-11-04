<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Services\SocialAccountService;
use Illuminate\Http\JsonResponse;
use Socialite;

class SocialAuthController extends Controller
{
    public function redirect(Request $request, $provider)
    {
        $referer = str_replace(env('APP_URL'), '', \URL::previous());

        return Socialite::driver($provider)->stateless()->redirect();
    }

    public function callback(SocialAccountService $service, Request $request, $provider)
    {
        $user = $service->createOrGetUser(Socialite::driver($provider)->stateless()->user());
        $token = \JWTAuth::fromUser($user);

        return redirect()->to("/?token=$token");
    }
}
