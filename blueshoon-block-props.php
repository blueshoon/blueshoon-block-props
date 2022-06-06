<?php
/**
 * Plugin Name:       Blueshoon Block Props
 * Version:           0.1.0
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Author:            Frederick Wells
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blueshoon-domain
 */

 defined( 'ABSPATH' ) || exit;

function create_block_blueshoon_block_props_init() {
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	wp_register_script(
		'blueshoon-block-props',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);

	register_block_type( __DIR__ . '/build' );
}

add_action( 'init', create_block_blueshoon_block_props_init );

function blueshoon_block_props_enqueue_assets() {
	wp_enqueue_script( 'blueshoon-block-props' );
}

add_action( 'enqueue_block_editor_assets', 'blueshoon_block_props_enqueue_assets' );
