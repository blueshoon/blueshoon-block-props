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

function create_block_blueshoon_block_props_init() {
	register_block_type( __DIR__ . '/build' );
}

add_action( 'init', create_block_blueshoon_block_props_init );
