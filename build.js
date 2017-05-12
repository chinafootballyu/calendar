const rollup = require( 'rollup' );

rollup.rollup({
  entry: 'src/index.js'
}).then( function ( bundle ) {
  bundle.write({
    format: 'es',
    dest: 'dist/index.js',
    sourceMap: false
  });
});