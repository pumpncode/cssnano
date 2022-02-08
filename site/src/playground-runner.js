import cssnanoPresetLite from 'cssnano-preset-lite';
import cssnanoPresetDefault from 'cssnano-preset-default';
import cssnanoPresetAdvanced from 'cssnano-preset-advanced';
import postcss from 'postcss';

export function runOptimizer(input, outputView, config, setError) {
  runner(input, [config])
    .then((res) => {
      setError('');

      const transaction = outputView.state.update({
        changes: {
          from: 0,
          to: outputView.state.doc.length,
          insert: res.css,
        },
      });
      outputView.dispatch(transaction);
    })

    .catch((err) => {
      switch (err.constructor) {
        case postcss.CssSyntaxError:
          setError(`CssSyntaxError: ${err.reason} (${err.line}:${err.column})`);
          break;
        default:
          setError('Unknown error. See browser console for details.');
          console.error(err);
      }
    });
}

function runner(input, config) {
  let nanoPlugins;
  switch (config[0]) {
    case 'cssnano-preset-lite':
      nanoPlugins = cssnanoPresetLite().plugins;
      break;
    case 'cssnano-preset-default':
      nanoPlugins = cssnanoPresetDefault().plugins;
      break;
    case 'cssnano-preset-advanced':
      nanoPlugins = cssnanoPresetAdvanced().plugins;
      break;
    default:
      return Promise.reject(new Error('Invalid configuration preset'));
  }

  const postcssPlugins = [];
  for (const plugin of nanoPlugins) {
    const [processor, opts] = plugin;
    if (
      typeof opts === 'undefined' ||
      (typeof opts === 'object' && !opts.exclude) ||
      (typeof opts === 'boolean' && opts === true)
    ) {
      postcssPlugins.push(processor(opts));
    }
  }
  return new Promise((resolve, reject) => {
    postcss(postcssPlugins)
      .process(input, { from: undefined })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
}
