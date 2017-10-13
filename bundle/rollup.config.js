import resolve from 'rollup-plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';

const globals = {
    '@angular/common': 'ng.common',
    '@angular/core': 'ng.core',
    '@angular/forms': 'ng.forms',
    '@angular/router': 'ng.router',
    '@material/animation': 'material.animation',
    '@material/checkbox': 'material.checkbox',
    '@material/form-field': 'material.formfield',
    '@material/icon-toggle': 'material.icontoggle',
    '@material/radio': 'material.radio',
    '@material/ripple': 'material.ripple',
    '@material/snackbar': 'material.snackbar',
    '@material/textfield': 'material.textfield',
    '@material/toolbar': 'material.toolbar',
    '@material/tabs': 'material.tabs',
    'rxjs': 'Rx'
};

export default {
    input: 'build/material.js',
    plugins: [
        resolve({jail: '/src'}),
        sourcemaps()
    ],
    onwarn: function(warning) {
        // Suppress known error message caused by TypeScript compiled code with Rollup
        // https://github.com/rollup/rollup/wiki/Troubleshooting#this-is-undefined
        if (warning.code !== 'THIS_IS_UNDEFINED')
            console.log("Rollup warning: ", warning.message);
    },
    sourcemap: true,
    output: [
        {file: 'dist/material.umd.js', format: 'umd', name: 'blox.material'},
        {file: 'dist/material.es5.js', format: 'es'}
    ],
    external: Object.keys(globals),
    globals: globals
};
