var postcss = require('postcss');

var plugin = require('./index.js');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}

it('basic row', () => {
    return run(`
        .row{
            groar-row: container;
        }
    `, `
        .row{

        }
    `, { });
});
