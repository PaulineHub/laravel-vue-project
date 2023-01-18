<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    public function ajout(Request $request) 
    {   
        Contact::create($request->except(['_token']));
        return redirect('contact');
    }
}
