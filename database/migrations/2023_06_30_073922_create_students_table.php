<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('student_id');
            $table->string('nick_name_en');
            $table->string('full_name_en');
            $table->string('sur_name_en');
            $table->string('nick_name_th');
            $table->string('full_name_th');
            $table->string('sur_name_th');
            $table->string('project_nickname_en');
            $table->string('project_nickname_th');
            $table->string('project_type');
            $table->string('project_name_en');
            $table->string('project_name_th');
            $table->text('project_details');
            $table->integer('project_session');
            $table->string('project_advisor');
            $table->string('project_func_1');
            $table->string('project_func_2');
            $table->string('project_func_3');
            $table->string('project_stack_1');
            $table->string('project_wish');
            $table->string('img_profile');
            $table->string('img_aboutme');
            $table->string('img_projectpng');
            $table->string('img_projecticon');
            $table->string('email');
            $table->string('url_linkedIn');
            $table->string('url_showreel');
            $table->string('url_portfolio')->nullable();
            $table->string('url_interview')->nullable();
            $table->string('url_demo')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
