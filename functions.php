<?php

function wgmc_enqueue_assets() {
    // Main theme stylesheet
    wp_enqueue_style(
        'wgmc-style',
        get_stylesheet_uri(),
        [],
        wp_get_theme()->get( 'Version' )
    );

    // Google Fonts (Inter)
    wp_enqueue_style(
        'wgmc-google-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
        [],
        null
    );

    // Chatbot script
    wp_enqueue_script(
        'wgmc-chatbot',
        get_template_directory_uri() . '/chatbot.js',
        [],
        wp_get_theme()->get( 'Version' ),
        true // load in footer
    );
}
add_action( 'wp_enqueue_scripts', 'wgmc_enqueue_assets' );

// Remove WordPress version from query strings for security
function wgmc_remove_version() {
    return '';
}
add_filter( 'the_generator', 'wgmc_remove_version' );

// Add theme support for basic WordPress features
function wgmc_theme_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', [
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ] );
}
add_action( 'after_setup_theme', 'wgmc_theme_setup' );
