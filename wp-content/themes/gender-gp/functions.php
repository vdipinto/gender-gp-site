<?php
add_action('after_setup_theme', function () {
  add_theme_support('wp-block-styles');
  add_theme_support('responsive-embeds');
  add_theme_support('editor-styles');
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
});

add_action('wp_enqueue_scripts', function () {
  // Use Vite build outputs if present.
  $uri = get_template_directory_uri();
  $ver = wp_get_environment_type() === 'production' ? '0.1.0' : time();

  if ( file_exists( get_template_directory() . '/dist/main.css' ) ) {
    wp_enqueue_style('gender-gp', $uri . '/dist/main.css', [], $ver);
  }
  if ( file_exists( get_template_directory() . '/dist/main.js' ) ) {
    wp_enqueue_script('gender-gp', $uri . '/dist/main.js', [], $ver, true);
  }
});
